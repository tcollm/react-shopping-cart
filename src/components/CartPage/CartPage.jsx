import classes from "./CartPage.module.css";

const CartPage = () => {
  return (
    <section className={classes.body}>
      <h1>Cart</h1>
      <section className={classes.section}>Cart contents</section>
    </section>
  );
};

export default CartPage;
