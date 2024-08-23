import classes from "./AddItem.module.css";
// import PropTypes from "prop-types";
import { useItemCountContext } from "../Items/ItemCountContext";

// const AddItem = ({ item }) => {
const AddItem = () => {
  const { incrementItemCount } = useItemCountContext();

  const handleClick = () => {
    incrementItemCount();
    // console.log(item);
  };

  return (
    <button onClick={handleClick} className={classes.addButton}>
      + Add
    </button>
  );
};

// AddItem.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     category: PropTypes.string,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };
export default AddItem;
