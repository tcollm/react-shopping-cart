import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useItemCount from "./useItemCount";
// NOTE: default exports CANNOT have {}

const ItemCountContext = createContext();

export const ItemCountProvider = ({ children }) => {
  const { itemCount, incrementItemCount } = useItemCount();

  return (
    <ItemCountContext.Provider value={{ itemCount, incrementItemCount }}>
      {children}
    </ItemCountContext.Provider>
  );
};

export const useItemCountContext = () => useContext(ItemCountContext);

ItemCountProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
