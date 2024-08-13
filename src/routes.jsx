import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shopping/",
    element: <ShoppingPage />,
  },
];

export default routes;
