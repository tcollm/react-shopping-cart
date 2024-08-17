import classes from "./AddItem.module.css";
import { useItemCountContext } from "../Items/ItemCountContext";

const AddItem = () => {
  // TODO: incrementItemCount function does not increment item count
  // nor does it display next to cart
  const { incrementItemCount } = useItemCountContext();

  return (
    <button onClick={incrementItemCount} className={classes.addButton}>
      + Add
    </button>
  );
};

export default AddItem;
