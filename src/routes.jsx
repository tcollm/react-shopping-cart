import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
  },
];

export default routes;
