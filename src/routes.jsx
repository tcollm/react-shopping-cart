import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import useFetchItems from "./components/Items/useFetchItems";
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";

const { items, error } = useFetchItems;

// opted for prop drilling > context because Shopping and Home page are the
// only direct children of App.jsx so this seems like a simpler, more effective solution
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This makes HomePage the default route when `/` is visited
        element: <HomePage items={items} error={error} />,
      },
      {
        path: "shopping",
        element: <ShoppingPage items={items} error={error} />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
