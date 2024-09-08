import classes from "./CartPage.module.css";
import { useItemCountContext } from "../Items/ItemCountContext";
import RemoveItem from "../RemoveItem/RemoveItem";

const CartPage = () => {
  const { cart } = useItemCountContext();

  return (
    <section className={classes.body}>
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <div className={classes.cartItems}>
          {cart.map((item, index) => (
            <div key={index} className={classes.cartItem}>
              <img
                src={item.image}
                alt={item.title}
                className={classes.itemImage}
              />
              <div className={classes.itemDetails}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className={classes.price}>${item.price.toFixed(2)}</p>
                <RemoveItem pos={index} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={classes.emptyMessage}>Your cart is empty!</p>
      )}
    </section>
  );
};

export default CartPage;
