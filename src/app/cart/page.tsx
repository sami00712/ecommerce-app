'use client'
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import Link from 'next/link';
// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  
}

export default function Cartin() {
  // Type cartItems as an array of Products
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Sample product data
  const products: Product[] = [
    { id: 1, name: 'T-shirt', price: 200, image: '/shirt1.png' },
    { id: 2, name: 'Jeans', price: 150, image: '/jeans1.png' },
    { id: 3, name: 'Shirt', price: 120, image: '/shirt2.png' },
    { id: 3, name: 'Shirt', price: 120, image: '/shirt4.png' }
  ];
  const product: Product[] = [
    { id: 1, name: 'T-shirt', price: 100, image: '/shirt3.png',},
    { id: 2, name: 'Jeans', price: 150, image: '/jeans2.png' },
    { id: 3, name: 'Suit', price: 500, image: '/suit1.png' },
    { id: 3, name: 'Suit', price: 600, image: '/suit2.png' }
  ];

  // Add to cart function
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
 

  // Remove from cart function
  const removeFromCart = (product: Product ) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
    
    
  }
 

  return (
    <div className="p-3">
      <div className='flex justify-between items-center'>
      <h1 className="text-4xl font-bold mb-8">Add to Cart</h1>
      <div>
      <button className="text-xs font-bold  border-gray-300 border px-10 py-1 rounded-2xl hover:border hover:border-gray-500 ">
        <Link href={'/'}>Back to Homepage</Link></button>
        </div>
      </div>
      {/* Product listing */}
      <div className="lg:grid-cols-4 grid sm:grid-cols-1 sm:space-y-5 lg:space-y-0 p-2">
        {products.map((products) => (
          <ProductCard key={products.id} product={products} addToCart={addToCart} />
        ))}
      </div>
      <div className="lg:grid-cols-4 grid sm:grid-cols-1 sm:space-y-5 p-2">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart component */}
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
     
    </div>
  );
}
