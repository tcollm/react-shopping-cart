import { Link, useLocation } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const location = useLocation();

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
            {/* Disallow the user from routing to shopping when already on shopping page */}
            {location.pathname === "/shopping" ? (
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className={classes.link}
              >
                Shopping
              </Link>
            ) : (
              <Link to="shopping" className={classes.link}>
                Shopping
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
