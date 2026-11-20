import { brandPageStyles as a } from "../assets/dummyStyles";
import { useNavigate, useParams } from "react-router-dom";
import watchesData from "../assets/Categoriesdata";
import { useCart } from "../cartContext";
import { useState, useEffect } from "react";
import { ArrowLeft, Plus, Minus } from "lucide-react";
const BrandPage = () => {
  const { brandName } = useParams();
  const navigate = useNavigate();
  const brandWatches = watchesData[brandName?.toLowerCase()] || [];
  const { addItem, cart, increment, decrement } = useCart();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);

      try {
        document.documentElement && (document.documentElement.scrollTop = 0);
        document.body && (document.body.scrollTop = 0);
      } catch (e) {
        console.log("Error scrolling to top:", e);
      }
    }
  }, []);

  const findInCart = (id) => cart.find((p) => p.id === id);

  if (!brandWatches.length) {
    return (
      <div className={a.container}>
        <div className={a.notFoundCard}>
          <h2 className={a.notFoundTitle}>No watches found</h2>
          <p className={a.notFoundText}>
            This brand has no watches listed in our collection yet.
          </p>
          <button onClick={() => navigate(-1)} className={a.goBackButton}>
            <ArrowLeft size={18} />
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={a.mainContainer}>
      <div className="max-w-7xl mx-auto relatives">
        <div className={a.headerContainer}>
          <div className={a.backButtonContainer}>
            <button className={a.backButton} onClick={() => navigate(-1)}>
              <div className={a.backIcon}>
                <ArrowLeft size={20} />
              </div>
              <span className={a.backText}>Back</span>
            </button>
          </div>
          <div className={a.titleContainer}>
            <h1 className={a.title}>{brandName} Collections</h1>
          </div>
        </div>

        <div className={a.grid}>
          {brandWatches.map((watch) => {
            const inCart = findInCart(watch.id);
            return (
              <div className={a.card} key={watch.id}>
                <div className={a.imageContainer}>
                  <img src={watch.image} alt={watch.name} className={a.image} />
                </div>
                {/* watch detail */}
                <div className={a.detailsContainer}>
                  <h className={a.watchName}>{watch.name}</h>
                  <p className={a.watchDesc}>{watch.desc}</p>
                  <div className={a.priceAndControls}>
                    <p className={a.price}>{watch.price}</p>

                    {inCart ? (
                      <div className={a.quantityContainer}>
                        <button onClick={()=>decrement(watch.id)} className={a.quantityButton}>
                          <Minus size={16} />
                          </button>
                          <div className={a.quantityCount}>{inCart.qty}</div>
                          <button onClick={()=>increment(watch.id)} className={a.quantityButton}>
                            <Plus size={16} />
                          </button>
                          </div>
                    ):(
                      <button onClick={()=>addItem({
                        id: watch.id,
                        name: watch.name,
                        price: watch.price,
                        img: watch.image
                      })} className={a.addButton}>
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                </div>

                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
