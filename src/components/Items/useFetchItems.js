import { useEffect, useState } from "react";

const useFetchItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=19")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((e) => {
        setError(e);
        console.error("Error fetching items:", e);
      });
  }, []);

  return { items, error };
};

export default useFetchItems;
