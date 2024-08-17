import { useState } from "react";

const useItemCount = () => {
  const [itemCount, setItemCount] = useState(0);

  const incrementItemCount = () => {
    setItemCount(itemCount + 1);
    console.log(itemCount);
  };

  return { itemCount, incrementItemCount };
};

export default useItemCount;
