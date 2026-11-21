import { useMemo, useState } from "react";
import { watchPageStyles as a } from "../assets/dummyStyles";
import { WATCHES, FILTERS as RAW_FILTERS } from "../assets/dummywdata";
import { useCart } from "../CartContext";
import { Grid, User, Users } from "lucide-react";

const ICON_MAP = { Grid, User, Users };
const FILTERS = RAW_FILTERS?.length
  ? RAW_FILTERS.map((f) => ({ ...f, icon: ICON_MAP[f.iconName] ?? Grid }))
  : [
      { key: "all", label: "All", icon: Grid },
      { key: "men", label: "Men", icon: User },
      { key: "women", label: "Women", icon: Users },
    ];

const WatchPage = () => {
    const [filter, setFilter] = useState("all");
    const {cart, addItem, increment, decrement, removeItem} = useCart();

    const filtered = useMemo(
        ()=> WATCHES.filter((w)=> (filter === "all" ? true : w.gender === filter)),[filter]
    );
    const getQty = (id) => {
        const it = cart.find((c)=> String(c.id) === String(id));
        return it ? Number(it.qty || 0) : 0;
    };
  return(
    <div className={a.container}>
        <div className={a.headerContainer}>
            <div>
                <h1 className={a.headerTitle}>
                    Timepieces{" "}
                    <span className={a.titleAccent}>Curated</span>

                </h1>
                <p className={a.headerDescription}>A handpicked selection - clean presentation, zero borders. Choose a filter to refine.</p>
            </div>
        </div>
    </div>
  );
};

export default WatchPage;
