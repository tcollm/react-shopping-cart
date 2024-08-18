import { createContext, useContext } from "react";
import PropTypes from "prop-types";

// provide default values
const ItemsContext = createContext({ items: [], error: null });

export const ItemsProvider = ({ children, value }) => {
  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

export const useItems = () => useContext(ItemsContext);

ItemsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any.isRequired,
};
