import classes from "./ItemsList.module.css";
import AddItem from "../AddItem/AddItem";
import { useState } from "react";
import PropTypes from "prop-types";

const ItemsList = ({ items }) => {
  // eslint-disable-next-line use-encapsulation/prefer-custom-hooks
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleDescription = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <ul className={classes.ul}>
      {items.map((item) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} />
          <p>
            {expandedItem === item.id
              ? item.description
              : `${item.description.slice(0, 100)}...`}
            <button
              onClick={() => toggleDescription(item.id)}
              className={classes.toggleButton}
            >
              {expandedItem === item.id ? "Show Less" : "Read More"}
            </button>
          </p>
          <div className={classes.wrapper}>
            <p>${item.price.toFixed(2)}</p>
            <AddItem itemId={item.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemsList;
