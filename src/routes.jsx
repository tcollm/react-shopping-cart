import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";

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
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
