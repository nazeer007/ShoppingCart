import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import CartTile from "../../components/cartTile";

function CartList() {
  const { cartItems } = useContext(ShoppingCartContext);
  console.log(cartItems);

  return (
    <div>
      <h2>Cart List Page</h2>
      <div>
        {cartItems?.length ? (
          cartItems.map((singleCartItem) => (
            <CartTile singleCartItem={singleCartItem} />
          ))
        ) : (
          <h3>Cart is Empty!</h3>
        )}
      </div>
    </div>
  );
}

export default CartList;
