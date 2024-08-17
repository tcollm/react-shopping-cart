import classes from "./ShoppingPage.module.css";
import ItemsList from "../Items/ItemsList";
import { useItems } from "../Items/ItemsContext";

const ShoppingPage = () => {
  const { items, error } = useItems();

  if (error) {
    return <p>Error fetching items: {error.message}</p>;
  }
  return (
    <>
      <section className={classes.body}>
        <h1>Shopping</h1>
        <section className="items">
          <ItemsList items={items} />
        </section>
      </section>
    </>
  );
};

export default ShoppingPage;
