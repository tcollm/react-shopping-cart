import { useItems } from "../Items/ItemsContext";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const { items, error } = useItems();

  if (error) {
    return <p>Error fetching items: {error.message}</p>;
  }

  if (!items || !Array.isArray(items) || items.length < 17) {
    return <p>Loading...</p>;
  }

  // if (items.length > 0) {
  //   console.log("Items:", items);
  // } else {
  //   console.log("Error getting items");
  // }

  return (
    <section className={classes.body}>
      {/* Today's Deals */}
      <section className={classes.deals}>
        <h2>Today&#39;s Deals</h2>
        <div className={classes.itemContainer}>
          {/* backpack */}
          <div className={classes.itemBox}>
            <h3>{items[0].title}</h3>
            <img src={items[0].image} alt={items[0].title} />
            <div className={classes.priceWrapper}>
              <p>
                <s>$149.95</s>
              </p>
              <p>${items[0].price.toFixed(2)}</p>
            </div>
          </div>
          {/* slimfit shirt */}
          <div className={classes.itemBox}>
            <h3>{items[1].title}</h3>
            <img src={items[1].image} alt={items[1].title} />
            <div className={classes.priceWrapper}>
              <p>
                <s>$29.99</s>
              </p>
              <p>${items[1].price.toFixed(2)}</p>
            </div>
          </div>
          {/* ssd disk */}
          <div className={classes.itemBox}>
            <h3>{items[9].title}</h3>
            <img src={items[9].image} alt={items[9].title} />
            <div className={classes.priceWrapper}>
              <p>
                <s>$149.00</s>
              </p>
              <p>${items[9].price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Items */}
      <section className={classes.section}>
        <h2>Trending Items</h2>
        <div className={classes.itemContainer}>
          {/* casual long sleeve */}
          <div className={classes.itemBox}>
            <h3>{items[3].title}</h3>
            <img src={items[3].image} alt={items[3].title} />
            <p>${items[3].price.toFixed(2)}</p>
          </div>
          {/* samsung gaming monitor */}
          <div className={classes.itemBox}>
            <h3>{items[13].title}</h3>
            <img src={items[13].image} alt={items[13].title} />
            <p>${items[13].price.toFixed(2)}</p>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className={classes.section}>
        <h2>New Arrivals</h2>
        <div className={classes.itemContainer}>
          {/* gold princess ring */}
          <div className={classes.itemBox}>
            <h3>{items[6].title}</h3>
            <img src={items[6].image} alt={items[6].title} />
            <p>${items[6].price.toFixed(2)}</p>
          </div>
          {/* women's rain jacket */}
          <div className={classes.itemBox}>
            <h3>{items[16].title}</h3>
            <img src={items[16].image} alt={items[16].title} />
            <p>${items[16].price.toFixed(2)}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
