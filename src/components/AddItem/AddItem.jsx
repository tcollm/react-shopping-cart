// import useItemCount from "./useItemCount";
import PropTypes from "prop-types";
import classes from "./AddItem.module.css";

const AddItem = ({ incrementItemCount }) => {
  const onClickFun = () => {
    incrementItemCount();
  };

  return (
    <button onClick={onClickFun} className={classes.addButton}>
      + Add
    </button>
  );
};

export default AddItem;

AddItem.propTypes = {
  incrementItemCount: PropTypes.func.isRequired,
};
