import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  // const location = useLocation();

  return (
    <>
      <nav className={classes.nav}>
        <ul>
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
      </nav>
    </>
  );
};

export default NavBar;
