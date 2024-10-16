'use client'
import Image from "next/image";
import { useState } from "react";
import Foot from "@/components/Foot";
import Header from "@/components/Header";

const Detail = () => {
  const product = {
    name: "One Life Graphic T-Shirt",
    price: 260,
    originalPrice: 300,
    discount: 40,
    rating: 4.5,
    reviews: [
      {
        name: "Samantha D.",
        date: "August 14, 2023",
        comment: "I absolutely love this t-shirt! The design is unique...",
        rating: 5,
      },
      // More reviews here...
    ],
    colors: ["#4A4A4A", "#FFFFFF", "#1E3A8A", "#4C1D95"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    image: "/shirt1.png", // Placeholder image path
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: string) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div>
        <Header/>
        <div className="w-11/12 ml-10 h-px bg-stone-300"></div>
    <div className="container mx-auto px-4 py-8">
      <div className="lg:flex">
        {/* Left Column: Product Images */}
        <div className="w-1/2 bg-stone-200 rounded-2xl sm:hidden lg:block">
          <img src={product.image} alt={product.name} className="w-full" />
        </div>

        {/* Right Column: Product Info */}
        <div className="lg:w-1/2 lg:pl-8 mt-8 sm:w-full">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center my-2">
            <p className="text-xl font-semibold text-gray-900">${product.price}</p>
            <p className="text-gray-500 line-through ml-4">${product.originalPrice}</p>
            <span className="ml-2 text-red-500">-{product.discount}%</span>
          </div>

          <div className="flex items-center my-4">
            <div className="flex space-x-1">
              {[...Array(Math.round(product.rating))].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
              {[...Array(5 - Math.round(product.rating))].map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>
            <span className="ml-2">{product.rating} / 5</span>
          </div>

          {/* Colors */}
          <div className="my-4">
            <h3 className="text-sm font-medium">Select Color</h3>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="my-4">
            <h3 className="text-sm font-medium">Choose Size</h3>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full py-2 border border-gray-300 rounded"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div className="my-4 flex bg-stone-200 rounded-lg items-center w-fit px-2 ">
            <button
              className="text-xl"
              onClick={() => handleQuantityChange("decrease")}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              className="w-12 text-center border-none outline-none focus:ring-inset bg-stone-200 "
              readOnly
            />
            <button
              className="text-xl"
              onClick={() => handleQuantityChange("increase")}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-4 w-full bg-black text-white py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Reviews */}
      <h1 className="lg:text-4xl sm:text-2xl font-bold mt-5">Rating & Reviews</h1>
      <div className="flex justify-center mt-5">
                <div className="border border-gray-400 w-fit p-4 rounded-xl">
                    <p> ⭐⭐⭐⭐⭐</p>
                    <p className="font-bold">Sarah M.</p>
                    <p className="text-xs">I recently bought a shirt and a pair of jeans,<br />
                    and I’m impressed with the quality. The fabric <br />feels soft but durable, and both items fit perfectly
                    <br /> and the shirt stays comfortable all day.</p>
                </div>
                <div className="border border-gray-400 w-fit p-4 ml-12 rounded-xl">
                    <p> ⭐⭐⭐⭐⭐</p>
                    <p className="font-bold">Jammes L.</p>
                    <p className="text-xs">These are now my go-to jeans and shirt!<br />
                    The shirt’s design is trendy but still casual enough<br /> for everyday wear, and the jeans look great whether
                    <br /> and they hold up well. I’m happy with this purchase!.</p>
                </div>
                <div className="border border-gray-400 w-fit p-4 ml-12 rounded-xl sm:hidden lg:block">
                    <p> ⭐⭐⭐⭐⭐</p>
                    <p className="font-bold">Alex K.</p>
                    <p className="text-xs">I ordered the shirt and jeans combo, and both items<br />
                    are perfect for daily wear. The shirt feels lightweight,<br /> great for layering, and the jeans are super comfortable.
                    <br />  but they fit true to size. I’ll definitely be ordering more!</p>
                </div>
            </div>
        
      

      {/* Related Products */}
      <div className="my-8 sm:hidden">
        <h3 className="text-4xl font-bold">You Might Also Like</h3>
        <div className="flex space-x-16  mt-5">
          
          <div className="w-1/5  bg-stone-200 p-2 rounded-lg">
            <img src="/shirt1.png" alt="Related product" className="w-full" />
            <h4 className="mt-2 text-sm font-medium">Polo with Contrast Trims</h4>
            <p className="text-sm text-gray-600">$240</p>
          </div>
          <div className="w-1/5  bg-stone-200 p-2 rounded-lg">
            <img src="/shirt2.png" alt="Related product" className="w-full" />
            <h4 className="mt-2 text-sm font-medium">T Shirt</h4>
            <p className="text-sm text-gray-600">$230</p>
          </div>
          {/* <div className="sm:hidden lg:flex lg:space-x-16"> */}
          <div className="w-1/5  bg-stone-200 p-2 rounded-lg">
            <img src="/shirt3.png" alt="Related product"  className="" />
            <h4 className="mt-2 text-sm font-medium">Polo with Contrast Trims</h4>
            <p className="text-sm text-gray-600">$240</p>
          </div>
          <div className="w-1/5  bg-stone-200 p-2 rounded-lg">
            <img src="/suit1.png" alt="Related product" className="w-full" />
            <h4 className="mt-2 text-sm font-medium">T Shirt</h4>
            <p className="text-sm text-gray-600">$230</p>
          </div>
          {/* </div> */}

        </div>
        </div>
    </div>
    <Foot/>
    </div>
  );
};

export default Detail;
