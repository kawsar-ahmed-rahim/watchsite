import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();

export function cartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p,
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };
  const increment = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)),
    );
  };

  const decrement = (id) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0),
    );
  };
  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };
  const clearCart = () => setCart([]);

  // helper: robust price parser
  const parsePrice = (price) => {
    if (typeof price === "number" && isFinite(price)) return price;
    if (!price) return 0;
    // convert to string and strip currency symbols, spaces, and letters,
    // keep digits, minus and dot. remove commas.
    let s = String(price).trim();
    // remove all characters except digits, dot, minus
    s = s.replace(/[^0-9.\-]/g, "");
    // if multiple dots, keep first dot only
    const parts = s.split(".");
    if (parts.length > 2) {
      const first = parts.shift();
      s = first + "." + parts.join("");
    }
    const n = parseFloat(s);
    return Number.isFinite(n) ? n : 0;
  };
  const totalItems = cart.reduce((sum, p) => sum + (p.qty || 0), 0);
  const totalPrice = cart.reduce(
    (sum, p) => sum + (p.qty || 0) * parsePrice(p.price),
    0,
  );
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        increment,
        decrement,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
