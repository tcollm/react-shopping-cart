import "./App.css";
import useFetchItems from "./components/Items/useFetchItems";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { ItemsProvider } from "./components/Items/ItemsContext";

function App() {
  const { items, error } = useFetchItems();

  return (
    <>
      <NavBar />
      <ItemsProvider value={{ items, error }}>
        <Outlet />
      </ItemsProvider>
    </>
  );
}

export default App;
