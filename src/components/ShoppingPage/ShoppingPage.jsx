
import { Link } from "react-router-dom";

const ShoppingPage = () => {
  return (
    <>
      <h1>Shopping Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Go back to the home page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ShoppingPage; 