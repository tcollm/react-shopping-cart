import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useItemCount from "./useItemCount";

const ItemCountContext = createContext();

export const ItemCountProvider = ({ children }) => {
  const itemCountState = useItemCount();

  return (
    <ItemCountContext.Provider value={{ itemCountState }}>
      {children}
    </ItemCountContext.Provider>
  );
};

export const useItemCountContext = () => useContext(ItemCountContext);

ItemCountProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
