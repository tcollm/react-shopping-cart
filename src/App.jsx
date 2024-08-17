import "./App.css";
import NavBar from "./components/NavBar/NavBar";

// TODO: cache items so that they can be loaded in both Home and Shopping Pages

function App() {
  return (
    <>
      <NavBar />
      <section className="body">
        <h1>Home</h1>

        {/* Today's Deals */}
        <section>
          <h2>Today&#39;s Deals</h2>
          <div>
            <h3>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
            <p>
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve for everyday
              convenience.
            </p>
            <p>
              <strong>Price:</strong> $109.95
            </p>
            <p>
              <strong>Discount:</strong> 10% off today!
            </p>
          </div>
          <div>
            <h3>Mens Casual Premium Slim Fit T-Shirts</h3>
            <p>
              Slim-fitting style, contrast raglan long sleeve, and lightweight
              soft fabric for breathable and comfortable wear. Ideal for casual
              fashion wear.
            </p>
            <p>
              <strong>Price:</strong> $22.30
            </p>
            <p>
              <strong>Deal:</strong> Buy 2, get 1 free!
            </p>
          </div>
          <div>
            <h3>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</h3>
            <p>
              Upgrade your system with faster boot-up, application load, and
              response times. Ideal for a performance boost in your PC.
            </p>
            <p>
              <strong>Price:</strong> $89.00
            </p>
            <p>
              <strong>Limited Time Offer:</strong> Save $25 when you order
              today!
            </p>
          </div>
        </section>

        {/* Trending Items */}
        <section>
          <h2>Trending Items</h2>
          <div>
            <h3>
              John Hardy Women&#39;s Legends Naga Gold & Silver Dragon Station
              Chain Bracelet
            </h3>
            <p>
              Inspired by the mythical water dragon that protects the
              ocean&#39;s pearl, this piece offers both protection and love.
            </p>
            <p>
              <strong>Price:</strong> $695.00
            </p>
          </div>
          <div>
            <h3>Mens Cotton Jacket</h3>
            <p>
              Perfect for all seasons, this jacket is great for outdoor
              activities or as a stylish layer for everyday use.
            </p>
            <p>
              <strong>Price:</strong> $55.99
            </p>
            <p>
              <strong>Popular:</strong> Highly rated by customers for comfort
              and style.
            </p>
          </div>
          <div>
            <h3>WD 2TB Elements Portable External Hard Drive - USB 3.0</h3>
            <p>
              Expand your storage with this reliable and fast external hard
              drive. Ideal for backing up your data on the go.
            </p>
            <p>
              <strong>Price:</strong> $64.00
            </p>
            <p>
              <strong>Trending:</strong> Top-selling storage solution.
            </p>
          </div>
        </section>

        {/* New Arrivals */}
        <section>
          <h2>New Arrivals</h2>
          <div>
            <h3>Solid Gold Petite Micropave</h3>
            <p>
              A beautiful, dainty piece that adds a touch of elegance to any
              outfit. Satisfaction guaranteed with a 30-day return policy.
            </p>
            <p>
              <strong>Price:</strong> $168.00
            </p>
            <p>
              <strong>Just In:</strong> Perfect for gifts or self-indulgence.
            </p>
          </div>
          <div>
            <h3>Mens Casual Slim Fit</h3>
            <p>
              The perfect blend of style and comfort. Ideal for everyday wear,
              with sizes to suit all body types.
            </p>
            <p>
              <strong>Price:</strong> $15.99
            </p>
            <p>
              <strong>New:</strong> Recently added, and already a customer
              favorite!
            </p>
          </div>
        </section>

        {/* Bestsellers */}
        <section>
          <h2>Bestsellers</h2>
          <div>
            <h3>White Gold Plated Princess Ring</h3>
            <p>
              A classic engagement ring, perfect for spoiling your loved one on
              special occasions.
            </p>
            <p>
              <strong>Price:</strong> $9.99
            </p>
            <p>
              <strong>Bestseller:</strong> Customers love this elegant and
              affordable option.
            </p>
          </div>
          <div>
            <h3>Pierced Owl Rose Gold Plated Stainless Steel Double</h3>
            <p>
              Stylish and durable, these earrings are perfect for everyday wear
              or as a gift.
            </p>
            <p>
              <strong>Price:</strong> $10.99
            </p>
            <p>
              <strong>Hot Item:</strong> Trending among fashion enthusiasts.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
