import { useEffect, useState } from "react";
import classes from "./ItemsList.module.css";
import AddItem from "../AddItem/AddItem";

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
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10").then((res) =>
      res
        .json()
        .then((data) => setItems(data))
        .catch((e) => {
          console.error("Error fetching items:", e);
        })
    );
  }, []);

  return (
    <ul className={classes.ul}>
      {items.map((item) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} />
          <p>{item.description}</p>
          <div className={classes.wrapper}>
            <p>${item.price.toFixed(2)}</p>
            <AddItem />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
