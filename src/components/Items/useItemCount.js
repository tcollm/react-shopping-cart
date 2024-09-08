import { useState } from "react";

const useItemCount = () => {
  const [itemCount, setItemCount] = useState(0);
  const [cart, setCart] = useState([]);

  const incrementItemCount = (item) => {
    setItemCount(itemCount + 1);

    setCart((prevCart) => [...prevCart, item]);
  };

  return { itemCount, incrementItemCount, cart };
};

export default useItemCount;
