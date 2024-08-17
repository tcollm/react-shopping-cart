const HomePage = () => {
  return (
    <section className="body">
      <h1>Home</h1>

      {/* Today's Deals */}
      <section className="deals">
        <h2>Today&#39;s Deals</h2>
        <div className="backpack"></div>
        <div className="slimfit shirt"></div>
        <div className="ssd disk"></div>
      </section>

      {/* Trending Items */}
      <section className="trending">
        <h2>Trending Items</h2>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </section>

      {/* New Arrivals */}
      <section className="newArrivals">
        <h2>New Arrivals</h2>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </section>

      {/* Bestsellers */}
      <section className="bestsellers">
        <h2>Bestsellers</h2>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </section>
    </section>
  );
};

export default HomePage;
