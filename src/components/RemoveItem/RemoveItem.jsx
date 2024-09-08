import classes from "./RemoveItem.module.css";
import PropTypes from "prop-types";
import { useItemCountContext } from "../Items/ItemCountContext";

// Note: this id is the position in the list NOT the item id
const RemoveItem = ({ pos }) => {
  const { decrementItemCount } = useItemCountContext();

  const handleClick = () => {
    decrementItemCount(pos);
  };

  return (
    <button onClick={handleClick} className={classes.removeButton}>
      - Remove
    </button>
  );
};

export default RemoveItem;

RemoveItem.propTypes = {
  pos: PropTypes.number.isRequired,
};
