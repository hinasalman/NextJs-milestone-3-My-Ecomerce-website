'use client'; // This is necessary because we are using hooks like `useState` and `useEffect` in a Client Component

import { useState } from 'react';

const CartPage = () => {
  // Initialize cart state (in a real app, you'd fetch this from a global store or API)
  const [cart, setCart] = useState([]);

  // Add product to cart (for simplicity, we are adding a dummy product)
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  return (
    <div>
      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. Add some products!</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              </li>
            ))}
          </ul>

          <button onClick={() => alert('Proceeding to checkout...')}>Proceed to Checkout</button>
        </div>
      )}

      {/* Dummy products to add to cart */}
      <h2>Products</h2>
      <div>
        <button onClick={() => addToCart({ id: 1, name: 'T-Shirt', price: 20 })}>Add T-Shirt to Cart</button>
        <button onClick={() => addToCart({ id: 2, name: 'Baby Dress', price: 30 })}>Add Baby Dress to Cart</button>
      </div>
    </div>
  );
};

export default CartPage;

