import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import { useItemCountContext } from "../Items/ItemCountContext.jsx";

const NavBar = () => {
  const { itemCount } = useItemCountContext();

  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <li>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="shopping" className={classes.link}>
            Shopping
          </Link>
        </li>
      </ul>
      <ul className={classes.navListRight}>
        <li>
          <Link to="cart" className={classes.link}>
            Cart ({itemCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
