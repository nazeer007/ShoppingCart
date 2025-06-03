export default function CartTile({ singleCartItem }) {
  console.log(singleCartItem);

  return (
    <div>
      <p>Single Cart Item</p>
      <img src={singleCartItem?.thumbnail} alt="" />
    </div>
  );
}
