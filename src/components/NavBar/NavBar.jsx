import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Disallow the user from routing to shopping when already on shopping page */}
            {location.pathname === "/shopping" ? (
              <Link to="#" onClick={(e) => e.preventDefault()}>
                Shopping
              </Link>
            ) : (
              <Link to="shopping">Shopping</Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
