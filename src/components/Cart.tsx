import React from 'react';
import Image from 'next/image';
// Define the Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartProps {
  cartItems: Product[];
  removeFromCart: (product: Product) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  const cartTotal = cartItems.reduce((total: number, item: Product) => total + item.price, 0);

  return (
    <div className="p-4 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <div>{item.name}</div>
              <div>${item.price}</div>
              
              <Image src={item.image} alt='kk' width={30} height={10}/>
              <button
                onClick={() => removeFromCart(item)}
                className="ml-4 bg-red-500 text-white px-2 py-1 rounded-lg"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold text-lg">Total: ${cartTotal.toFixed(2)}</h3>
          <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
