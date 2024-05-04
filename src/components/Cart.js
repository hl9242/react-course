import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IteamList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
function Cart() {
  const cartData = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {/* {cartData.map((items) => ( */}
      <div className="w-6/12 m-auto border border-gray-200">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <IteamList items={cartData} />
      </div>
      {/* //   ))} */}
    </div>
  );
}

export default Cart;
