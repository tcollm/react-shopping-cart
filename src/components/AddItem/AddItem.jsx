import { useEffect, useState } from "react";

const AddItem = () => {
  const [itemCount, setItemCount] = useState(0);
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   if (itemCount > 0) {
  //     // get new item...
  //     setCart((prevCart) => [...prevCart, newItem]);
  //   }
  // });

  const handleAddItem = () => {
    setItemCount(itemCount + 1);
  };

  return <button onClick={handleAddItem}>Add Item</button>;
};

export default AddItem;
