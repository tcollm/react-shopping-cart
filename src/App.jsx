import "./App.css";
import useFetchItems from "./components/Items/useFetchItems";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { ItemsProvider } from "./components/Items/ItemsContext";
import { ItemCountProvider } from "./components/Items/ItemCountContext";

function App() {
  const { items, error } = useFetchItems();

  return (
    <ItemCountProvider>
      <NavBar />
      <ItemsProvider value={{ items, error }}>
        <Outlet />
      </ItemsProvider>
    </ItemCountProvider>
  );
}

export default App;
