import NavBar from "../NavBar/NavBar";
import classes from "./ShoppingPage.module.css";
// import items (from AddItem?)
// TODO: will items store the itemObj directly meaning that I do not have to call them here? (probably)

const ShoppingPage = () => {
  return (
    <>
      <NavBar />
      <section className={classes.body}>
        <h1>Shopping</h1>
        <section className="items">
          {/* for item in items (get items from AddItem component?) */}
        </section>
      </section>
    </>
  );
};

export default ShoppingPage;
