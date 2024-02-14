import React from "react";
import CartContext from "./cart-context.jsx";

const CartProvider = (props) => {
  const cartContext = {
    items: [],
    totalAmount: 0,
  };
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
