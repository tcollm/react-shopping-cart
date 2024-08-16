import { useEffect, useState } from "react";

const useFetchItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10").then((res) =>
      res
        .json()
        .then((data) => setItems(data))
        .catch((e) => {
          setError(e);
          console.error("Error fetching items:", e);
        })
    );
  }, []);

  return { items, error };
};

export default useFetchItems;
