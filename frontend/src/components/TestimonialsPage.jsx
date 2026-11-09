import { testimonialPageStyles as a } from "../assets/dummyStyles";
import { useRef, useEffect } from "react";

import T1 from "../assets/T1.png";
import T2 from "../assets/T2.png";
import T3 from "../assets/T3.png";
import T4 from "../assets/T4.png";

const lerpAlpha = 0.15; // FIX: was undefined. Higher = snappier, lower = smoother

const cards = [
  {
    id: 1,
    title: "“Elegance and Precision” — Asha K.",
    meta: "Asha K. • July 5, 2025",
    excerpt:
      "I gifted the Swarovski piece to myself and it instantly became my go-to. The crystal detailing catches light in the most flattering way and the movement keeps perfect time — classy enough for gala nights, subtle enough for daily wear.",
    img: T1,
  },
  {
    id: 2,
    title: "“Built Like a Tank” — Rohit S.",
    meta: "Rohit S. • June 26, 2025",
    excerpt:
      "I wear my G-Shock for work, gym and weekend hikes — zero scratches so far. The shock resistance and battery life are absurdly good. If you want a worry-free daily watch, this one's unbeatable.",
    img: T2,
  },
  {
    id: 3,
    title: "“Sleek & Subtle” — Priya M.",
    meta: "Priya M. • May 15, 2025",
    excerpt:
      "The minimalist dial is gorgeous — thin case, clean lines and a strap that feels premium. It pairs perfectly with both office blazers and weekend denim. I get compliments every time I wear it.",
    img: T3,
  },
  {
    id: 4,
    title: "“A Time Capsule” — Arjun D.",
    meta: "Arjun D. • May 2, 2025",
    excerpt:
      "A vintage look that still feels modern — the domed crystal and aged-lume give it character. It's become my conversation starter at dinners. Comfortable, well-built, and full of charm.",
    img: T4,
  },
];

const TestimonialsPage = () => {
  const scroller = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const rafRef = useRef(null); // smoothing loop
  const momentumRef = useRef(null); // FIX: separate ref for momentum loop
  const targetScroll = useRef(null);
  const lastMoveTime = useRef(0);
  const lastMoveX = useRef(0);
  const velocity = useRef(0);

  // FIX: one helper that cancels both loops
  const cancelLoops = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (momentumRef.current) {
      cancelAnimationFrame(momentumRef.current);
      momentumRef.current = null;
    }
  };

  const maxScroll = () => {
    const el = scroller.current;
    return el ? Math.max(0, el.scrollWidth - el.clientWidth) : 0;
  };

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.style.scrollBehavior = "auto";

    const handleUp = () => {
      isDown.current = false;
      el.classList.remove("cursor-grabbing");
    };
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
      cancelLoops(); // FIX: cancels both loops
    };
  }, []);

  const ensureRafRunning = () => {
    if (rafRef.current) return;
    const el = scroller.current;
    if (!el) return;

    const loop = () => {
      if (targetScroll.current == null) {
        rafRef.current = null;
        return;
      }

      const current = el.scrollLeft;
      const next = current + (targetScroll.current - current) * lerpAlpha;
      el.scrollLeft = next;

      // close enough and nothing is pushing it anymore: snap and stop
      if (
        Math.abs(targetScroll.current - next) < 0.5 &&
        !isDown.current &&
        !momentumRef.current
      ) {
        el.scrollLeft = targetScroll.current;
        targetScroll.current = null;
        rafRef.current = null;
        return;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
  };

  const startMomentum = () => {
    const el = scroller.current;
    if (!el) return;

    // FIX: if the pointer was held still before release, don't use stale velocity
    if (performance.now() - lastMoveTime.current > 80) {
      velocity.current = 0;
    }

    if (Math.abs(velocity.current) < 0.02) {
      velocity.current = 0;
      ensureRafRunning(); // let smoothing finish settling on the target
      return;
    }

    if (momentumRef.current) cancelAnimationFrame(momentumRef.current);
    targetScroll.current = el.scrollLeft;

    let last = performance.now();
    const friction = 0.0008; // smaller = longer glide; larger = quicker stop

    const step = (now) => {
      const dt = now - last;
      last = now;

      // FIX: dragging right (positive velocity) must DECREASE scrollLeft
      targetScroll.current -= velocity.current * dt;

      // keep target inside the scrollable range
      const max = maxScroll();
      if (targetScroll.current < 0 || targetScroll.current > max) {
        targetScroll.current = Math.min(max, Math.max(0, targetScroll.current));
        velocity.current = 0;
      }

      velocity.current *= Math.exp(-friction * dt);

      if (Math.abs(velocity.current) > 0.02) {
        momentumRef.current = requestAnimationFrame(step);
      } else {
        velocity.current = 0;
        targetScroll.current = Math.round(targetScroll.current);
        momentumRef.current = null; // smoothing loop will now settle and stop
      }
    };

    momentumRef.current = requestAnimationFrame(step);
    ensureRafRunning(); // FIX: no longer shares rafRef with the momentum loop
  };

  const onMouseDown = (e) => {
    const el = scroller.current;
    if (!el) return;
    cancelLoops(); // FIX: stops both loops

    isDown.current = true;
    el.classList.add("cursor-grabbing");

    startX.current = e.clientX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;

    targetScroll.current = el.scrollLeft;
    lastMoveTime.current = performance.now();
    lastMoveX.current = e.clientX;
    velocity.current = 0;

    ensureRafRunning();
  };

  const onMouseLeave = () => {
    if (!isDown.current) return; // FIX: only react if a drag was in progress
    isDown.current = false;
    scroller.current && scroller.current.classList.remove("cursor-grabbing");
    startMomentum();
  };

  const onMouseUp = () => {
    if (!isDown.current) return;
    isDown.current = false;
    scroller.current && scroller.current.classList.remove("cursor-grabbing");
    startMomentum();
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const el = scroller.current;
    const x = e.clientX - el.offsetLeft;
    const walk = x - startX.current;

    targetScroll.current = scrollLeft.current - walk;

    const now = performance.now();
    const dt = Math.max(1, now - lastMoveTime.current);
    const instantV = (e.clientX - lastMoveX.current) / dt; // px/ms
    velocity.current = instantV * 0.6 + velocity.current * 0.4;
    lastMoveTime.current = now;
    lastMoveX.current = e.clientX;

    ensureRafRunning();
  };

  const onTouchStart = (e) => {
    const el = scroller.current;
    if (!el) return;
    cancelLoops(); // FIX

    isDown.current = true;
    startX.current = e.touches[0].clientX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;

    targetScroll.current = el.scrollLeft;
    lastMoveTime.current = performance.now();
    lastMoveX.current = e.touches[0].clientX;
    velocity.current = 0;

    ensureRafRunning();
  };

  const onTouchMove = (e) => {
    if (!isDown.current) return;
    const el = scroller.current;
    const x = e.touches[0].clientX - el.offsetLeft;
    const walk = x - startX.current;

    targetScroll.current = scrollLeft.current - walk;

    const now = performance.now();
    const dt = Math.max(1, now - lastMoveTime.current);
    const instantV = (e.touches[0].clientX - lastMoveX.current) / dt;
    velocity.current = instantV * 0.6 + velocity.current * 0.4;
    lastMoveTime.current = now;
    lastMoveX.current = e.touches[0].clientX;

    ensureRafRunning();
  };

  const onTouchEnd = () => {
    if (!isDown.current) return;
    isDown.current = false;
    scroller.current && scroller.current.classList.remove("cursor-grabbing");
    startMomentum();
  };

  return (
    <section className={a.pageSection}>
      <div className={a.container}>
        <h2
          className={a.title}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          THE WATCH JOURNAL
        </h2>

        <div
          ref={scroller}
          className={a.scroller}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
        >
          {cards.map((c) => (
            <article key={c.id} className={a.card}>
              <div className={a.imageBlock}>
                {/* FIX: draggable={false} stops the browser's ghost-image drag */}
                <img
                  src={c.img}
                  alt={c.title}
                  className={a.image}
                  draggable={false}
                />
              </div>
              <div className={a.contentBlock}>
                <div>
                  <h3 className={a.cardTitle}>{c.title}</h3>
                  <p className={a.cardMeta}>{c.meta}</p>
                  <p className={a.cardExcerpt}>{c.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`${a.scrollbarHide}`}</style>
    </section>
  );
};

export default TestimonialsPage;