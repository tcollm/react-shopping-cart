import { useState } from "react";

// const CartLogic = () => {
//   let items = [];
// };

const AddItem = () => {
  const [itemCount, setItemCount] = useState(0);

  const handleAddItem = () => {
    setItemCount(itemCount + 1);
  };

  return <button onClick={handleAddItem}>Add Item</button>;
};

export default AddItem;
