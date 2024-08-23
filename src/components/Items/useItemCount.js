import { useState } from "react";

const useItemCount = () => {
  const [itemCount, setItemCount] = useState(0);
  // const [cart, setCart] = useState([]);

  const incrementItemCount = () => {
    setItemCount(itemCount + 1);

    // setCart((prevCart) => [...prevCart, item]);
  };

  return { itemCount, incrementItemCount };
};

export default useItemCount;
