import React, { useState } from "react";

function Header({ data }) {
  // Initialization of useState.
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState([]);


  // Function to add a new item to the array.
  function addItemToArray() {
    // Create a new item object.
    const newItem = { id: items.length + 1, name: "Gloves", price: 25 };

    // Update the state with the new item added to the array.
    setItems([...items, newItem]);
  }

  // Function to add a specific item to the cart.
  function addItemToCart(item) {
    // Check if the item already exists in the cart.
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item exists, increase its quantity.
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If the item does not exist, add it to the cart with quantity 1.
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  // Function to remove an item from the cart.
  function RemoveItemFromCart(indexToRemove) {
    // Filter out the item at the given index.
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  }

  // Calculate the total price for all items in the cart.
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
    <div id="main">
      <h1>Simple E-Commerce Cart.</h1>
      <h2>Items List.</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{" "}
            <button id="addCartBtn" onClick={() => addItemToCart(item)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>


      <h2>Your Cart.</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} (Qty: {item.quantity}) - Total: $
            {(item.price * item.quantity).toFixed(2)}{" "}
            <button
              id="removeFromCart"
              onClick={() => RemoveItemFromCart(index)}
            >
              x
            </button>
          </li>
        ))}
      </ul>

      <h2 id="total">Total: ${cartTotal.toFixed(2)}</h2>
       </div>
    </>
  );
}

export default Header;
