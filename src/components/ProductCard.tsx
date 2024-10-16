import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="bg-stone-200 p-4  ml-2 shadow-lg rounded-lg">
      <img
        className="w-full h-100 "
        src={product.image}
        alt={product.name}
      />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="mt-1 text-gray-600">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
