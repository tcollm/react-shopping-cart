import { element } from "prop-types";
import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";
import CartPage from "./components/CartPage/CartPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "shopping",
        element: <ShoppingPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
