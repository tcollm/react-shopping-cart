import NavBar from "../NavBar/NavBar";
import classes from "./ShoppingPage.module.css";
import ItemsList from "../ItemsList/ItemsList";

const ShoppingPage = () => {
  return (
    <>
      <NavBar />
      <section className={classes.body}>
        <h1>Shopping</h1>
        <section className="items">
          <ItemsList />
        </section>
      </section>
    </>
  );
};

export default ShoppingPage;
