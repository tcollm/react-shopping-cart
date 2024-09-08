import classes from "./AddItem.module.css";
import PropTypes from "prop-types";
import { useItemCountContext } from "../Items/ItemCountContext";

const AddItem = ({ itemId }) => {
  const { incrementItemCount } = useItemCountContext();

  const handleClick = () => {
    incrementItemCount(itemId);
  };

  return (
    <button onClick={handleClick} className={classes.addButton}>
      + Add
    </button>
  );
};

AddItem.propTypes = {
  itemId: PropTypes.number.isRequired,
};
export default AddItem;
