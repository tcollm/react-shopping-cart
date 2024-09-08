import { useState } from "react";

const useItemCount = () => {
  const [itemCount, setItemCount] = useState(0);
  const [cart, setCart] = useState([]);

  const incrementItemCount = (item) => {
    setItemCount((prevCount) => prevCount + 1);

    setCart((prevCart) => [...prevCart, item]);
  };

  const decrementItemCount = (pos) => {
    setItemCount((prevCount) => Math.max(0, prevCount - 1));

    setCart((prevCart) => prevCart.filter((_, index) => index !== pos));
  };

  return { itemCount, incrementItemCount, cart, decrementItemCount };
};

export default useItemCount;
