import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="shopping">Shopping Page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
