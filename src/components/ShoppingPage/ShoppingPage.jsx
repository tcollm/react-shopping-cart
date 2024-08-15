import NavBar from "../NavBar/NavBar";
import classes from "./ShoppingPage.module.css";

const ShoppingPage = () => {
  return (
    <>
      <NavBar />
      <section className={classes.body}>
        <h1>Shopping</h1>
      </section>
    </>
  );
};

export default ShoppingPage;
