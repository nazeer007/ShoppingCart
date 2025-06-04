import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function CartTile({ singleCartItem }) {
  console.log(singleCartItem);
  const { handleAddToCart, handleRemoveFromCart } =
    useContext(ShoppingCartContext);

  return (
    <div className="grid grid-cols-2 items-center gap-5 border p-2">
      <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-slate-50 p-1 rounded-sm">
        <img
          className="w-full h-full object-contain"
          src={singleCartItem?.thumbnail}
          alt={singleCartItem?.title}
        />
      </div>
      <div className="">
        <h3>
          <span className="text-md font-semibold">Item:</span>{" "}
          {singleCartItem?.title}
        </h3>
        <p>
          <span className="text-md font-semibold">Price:</span> $
          {singleCartItem?.totalPrice.toFixed(2)}
        </p>
        <p>
          <span className="text-md font-semibold">Quantity:</span>{" "}
          {singleCartItem?.quantity}
        </p>
        <div className="mt-2 flex gap-2">
          <button
            className="bg-slate-50 py-1"
            disabled={singleCartItem?.quantity === 1}
            onClick={() => handleRemoveFromCart(singleCartItem, false)}
          >
            -
          </button>
          <button
            className="bg-slate-50 py-1"
            onClick={() => handleAddToCart(singleCartItem)}
          >
            +
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={() => handleRemoveFromCart(singleCartItem, true)}
            className="bg-black text-white py-1"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
