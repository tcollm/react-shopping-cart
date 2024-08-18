import classes from "./CartPage.module.css";

const CartPage = () => {
  // TODO: manage cart state (else where), and use it to display cart items here
  // ex: create array of ids, and then use pre-loaded items list to display each item here
  return (
    <section className={classes.body}>
      <h1>Cart</h1>
      <section className={classes.section}>Cart contents</section>
    </section>
  );
};

export default CartPage;
