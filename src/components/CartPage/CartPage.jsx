import classes from "./CartPage.module.css";
import { useItemCountContext } from "../Items/ItemCountContext";

const CartPage = () => {
  const { cart } = useItemCountContext();

  return (
    <section className={classes.body}>
      <h1>Cart</h1>
      {cart.length > 0 ? (
        cart.map((item, index) => <p key={index}>{item.title}</p>)
      ) : (
        <p>Your cart is empty!</p>
      )}
    </section>
  );
};

export default CartPage;
