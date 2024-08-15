import AddItem from "../AddItem/AddItem";

const ItemObj = () => {
  return (
    <section className=".item">
      <h2>Item Title</h2>
      {/* <img src="" alt="item image" /> */}
      <div>$100.00</div>
      <AddItem />
      <div>Item info</div>
    </section>
  );
};

export default ItemObj;
