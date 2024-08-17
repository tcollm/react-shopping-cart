import classes from "./ShoppingPage.module.css";
import ItemsList from "../Items/ItemsList";
import PropTypes from "prop-types";

const ShoppingPage = ({ items, error }) => {
  return (
    <>
      <section className={classes.body}>
        <h1>Shopping</h1>
        <section className="items">
          {/* TODO: fix items; its undefined causing the entire page to break */}
          {/* <ItemsList items={items} error={error} /> */}
        </section>
      </section>
    </>
  );
};

ShoppingPage.propTypes = {
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
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
};

export default ShoppingPage;
