import { useState } from "react";

const useItemCount = () => {
  const [itemCount, setItemCount] = useState(0);
  const [cart, setCart] = useState([]);

  const incrementItemCount = (itemId) => {
    setItemCount(itemCount + 1);

    setCart((prevCart) => [...prevCart, itemId]);
  };

  return { itemCount, incrementItemCount, cart };
};

export default useItemCount;
