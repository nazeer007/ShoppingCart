import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import CartTile from "../../components/cartTile";
import { useNavigate } from "react-router-dom";

function CartList() {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  console.log(cartItems);

  return (
    <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
      <h2 className="text-xl font-semibold text-gray-900 text-center pt-4">
        My Cart
      </h2>
      <div className="grid md:grid-cols-3 gap-4 mt-12">
        <div className="md:col-span-2 space-y-4">
          {cartItems?.length ? (
            cartItems.map((singleCartItem) => (
              <CartTile singleCartItem={singleCartItem} />
            ))
          ) : (
            <h3>Cart is Empty!</h3>
          )}
        </div>
        <div className="bg-gray-100 rounded-sm p-4 h-max">
          <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-300">
            Order Summary
          </h3>
          <ul>
            <p className="mt-2">
              Total{": "}
              <span className="mx-4">
                ${" "}
                {cartItems
                  .reduce((acc, curr) => acc + curr.totalPrice, 0)
                  .toFixed(2)}
              </span>
            </p>
          </ul>
          <div className="mt-6 flex gap-4">
            <button
              disabled={cartItems.length === 0}
              className="bg-black text-white py-1"
            >
              Checkout
            </button>
            <button
              onClick={() => navigate("/products")}
              className="bg-black text-white py-1"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
