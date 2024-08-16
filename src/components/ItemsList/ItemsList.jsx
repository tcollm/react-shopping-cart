import classes from "./ItemsList.module.css";
import AddItem from "../AddItem/AddItem";
import useFetchItems from "./useFetchItems";
import { useState } from "react";

// item object:
// {
//   id:1,
//   title:'...',
//   price:'...',
//   category:'...',
//   description:'...',
//   image:'...'
// },

const ItemsList = () => {
  const { items, error } = useFetchItems();
  const [itemCount, setItemCount] = useState(1);

  const incrementItemCount = () => {
    console.log("Button clicked: ", itemCount);
    setItemCount(itemCount + 1);
  };

  if (error) {
    return <p>Error fetching items: {error.message}</p>;
  }

  return (
    <ul className={classes.ul}>
      {items.map((item) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} />
          <p>{item.description}</p>
          <div className={classes.wrapper}>
            <p>${item.price.toFixed(2)}</p>
            <AddItem incrementItemCount={incrementItemCount} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
