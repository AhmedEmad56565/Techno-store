const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export default function updateCart(state) {
  //calculate items price
  state.itemsPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  //calculate shipping price
  state.shippingPrice = addDecimal(Number(state.itemsPrice * 0.02));

  //calculate tax price
  state.taxPrice = addDecimal(Number(state.itemsPrice * 0.1));

  //calculate total price
  state.totalPrice = addDecimal(
    Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxPrice)
  );

  //calculate total quantity
  state.totalQuantity = state.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
}
