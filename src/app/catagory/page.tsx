// pages/category.tsx
'use client'
import { useState } from 'react';
import Foot from '@/components/Foot';
import Header from '@/components/Header';

// Define Product type interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  discount?: number;
  sizes: string[];
  colors: string[];
}

const Catagory: React.FC = () => {
  // State declarations with proper types
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([60, 200]);

  // Mock product data
  const products: Product[] = [
    { id: 1, name: 'Gradient Graphic T-shirt', price: 145, image: '/shirt3.png', rating: 3.5, sizes: ['S', 'M'], colors: ['Red', 'Blue'] },
    { id: 2, name: 'Polo with Tipping Details', price: 180, image: '/shirt1.png', rating: 4.6, sizes: ['M', 'L'], colors: ['Green', 'Yellow'] },
    { id: 3, name: 'Black Striped T-shirt', price: 120, image: '/shirt4.png', rating: 4.2, discount: 20, sizes: ['S', 'L'], colors: ['Black', 'White'] },
    { id: 4, name: 'Skinny Fit Jeans', price: 240, image: '/suit1.png', rating: 3.8, discount: 20, sizes: ['M', 'L'], colors: ['Blue'] },
    { id: 5, name: 'Checkered Shirt', price: 180, image: '/shirt2.png', rating: 4.5, sizes: ['S', 'M'], colors: ['Red', 'Green'] },
    { id: 6, name: 'Sleeve Striped Jeans', price: 130, image: '/jeans2.png', rating: 3.7, discount: 20, sizes: ['M', 'L'], colors: ['Orange', 'Black'] },
    { id: 1, name: 'Gradient Graphic T-shirt', price: 145, image: '/shirt3.png', rating: 3.5, sizes: ['S', 'M'], colors: ['Red', 'Blue'] },
    { id: 2, name: 'Polo with Tipping Details', price: 180, image: '/shirt1.png', rating: 4.6, sizes: ['M', 'L'], colors: ['Green', 'Yellow'] },
    { id: 3, name: 'Black Striped T-shirt', price: 120, image: '/shirt4.png', rating: 4.2, discount: 20, sizes: ['S', 'L'], colors: ['Black', 'White'] },
    { id: 4, name: 'Skinny Fit Jeans', price: 240, image: '/suit1.png', rating: 3.8, discount: 20, sizes: ['M', 'L'], colors: ['Blue'] },
    { id: 5, name: 'Checkered Shirt', price: 180, image: '/shirt2.png', rating: 4.5, sizes: ['S', 'M'], colors: ['Red', 'Green'] },
    { id: 6, name: 'Sleeve Striped Jeans', price: 130, image: '/jeans2.png', rating: 3.7, discount: 20, sizes: ['M', 'L'], colors: ['Orange', 'Black'] },
    // Add more products as needed
  ];

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const sizeMatch = selectedSize.length === 0 || selectedSize.some((size) => product.sizes.includes(size));
    const colorMatch = !selectedColor || product.colors.includes(selectedColor);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

    return sizeMatch && colorMatch && priceMatch;
  });

  return (
    <div>
      <Header/>
      <div className="w-11/12 ml-10 h-px bg-stone-300"></div>
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Filters */}
      <aside className="col-span-1 border border-stone-200 rounded-xl w-fit h-fit p-5">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="text-sm font-medium text-gray-700">Price</h3>
            <input
              type="range"
              min={60}
              max={200}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([60, Number(e.target.value)])}
              className="w-full mt-2"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>$60</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="text-sm font-medium text-gray-700">Colors</h3>
            <div className="flex space-x-2 mt-2">
              {['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Orange'].map((color) => (
                <button
                  key={color}
                  className={`h-8 w-8 rounded-full border ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <h3 className="text-sm font-medium text-gray-700">Size</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`py-2 px-3 border rounded ${selectedSize.includes(size) ? 'bg-gray-200' : ''}`}
                  onClick={() =>
                    setSelectedSize((prev) =>
                      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
                    )
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <div className="col-span-3 border border-stone-200 rounded-xl p-4">
        <h2 className="text-2xl font-semibold mb-6">Casual</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 ">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.rating} stars</p>
                <p className="mt-2">
                  <span className="text-xl font-semibold">${product.price}</span>
                  {product.discount && (
                    <>
                      <span className="text-sm line-through text-gray-400 ml-2">
                        ${Math.round(product.price / (1 - product.discount / 100))}
                      </span>
                      <span className="ml-2 text-sm text-red-500">{product.discount}% off</span>
                    </>
                  )}
                </p>
              </div>
            ))
          ) : (
            <p>No products found matching the selected filters.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded">Previous</button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button key={page} className="px-4 py-2 border rounded">
              {page}
            </button>
          ))}
          <button className="px-4 py-2 bg-gray-200 rounded">Next</button>
        </div>
      </div>
      
    </div>
    <Foot/>
    </div>
  );
};

export default Catagory;
