'use client'
// import { useRouter } from "next/router";
import { useState} from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import React from "react";

export default function Header(){
     
  
    // State to toggle the mobile menu
    const [isOpen, setIsOpen] = useState(false);
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
          // Navigate to the selected page using window.location
          window.location.href = selectedValue;
        }
      };
      // const handleSelectChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
      //   const selectedValue = event.target.value;
      //   if (selectedValue) {
      //     // Navigate to the selected page using window.location
      //     window.location.href = selectedValue;
      //   }
      // };
    
    return(
        <div className="lg:ml-16 sm:ml-8 mr-16 flex items-center pt-5 pb-5 ">


<nav className="bg-tranparent text-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* <h1 className="text-2xl font-bold">SHOP.CO</h1> */}

       

        {/* Hamburger Icon: Visible on mobile */}
        <div className="md:hidden lg:hidden flex items-center">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)} // Toggle state
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      {isOpen && (
        <div className="md:hidden lg:hidden bg-blue-500 ">
          <ul className="flex flex-col">
           
            <li>
            <div className="relative inline-block text-left mr-5">
      <select
        onChange={handleSelectChange} // Handle dropdown selection
        className=" w-full text-sm text-gray-700"
      >
        <option value="">Select</option> 
        <option value="/">Shop</option> {/* Home Page */}
        <option value="/catagory">Category</option>
        <option value="/detail">Detail</option>
       
      </select>
    </div>
            {/* <Link href="" className="hover:text-black"></Link> */}
            </li>
            <li>
              <Link href="">On Sale</Link>
            </li>
            <li>
              <Link href="">New Arrivals</Link>
            </li>
            <li>
              <Link href="">Brands</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
           {/* <div className="relative inline-block text-left mr-5 lg:hidden">
          
      <select
        onChange={handleSelectChange1} // Handle dropdown selection
        className=" w-full text-sm text-gray-700"
      >
         
        <option value=""></option> 
        <option value="/">Shop</option> {/* Home Page */}
        {/* <option value="/catagory">Category</option> */}
        {/* <option value="/detail">Detail</option> */}
       
      {/* </select> */}
    {/* </div> */} 
            <h1 className="font-extrabold text-3xl ">SHOP.CO</h1>
            <div className="text-xs text-gray-800 font-semibold ml-10 items-center sm:hidden lg:block">
               {/* <select className="mr-5">
                <option value="">Shop</option>
                <option value="">Detail</option>
                <option value="">Category</option>
               </select> */}
              <div className="relative inline-block text-left mr-5">
      <select
        onChange={handleSelectChange} // Handle dropdown selection
        className=" w-full text-sm text-gray-700"
      >
        <option value="">Select</option> 
        <option value="/">Shop</option> {/* Home Page */}
        <option value="/catagory">Category</option>
        <option value="/detail">Detail</option>
       
      </select>
    </div>
            {/* <div className="sm:hidden lg:block lg:ml-24 sm:ml-0"> */}
                <a href=""  className="mr-5">On Sale</a>
                <a href="" className="mr-5">New Arrivals</a>
                <a href="" className="">Brands</a>
            {/* </div>  */}
            
               
            </div>
            <div className="lg:block sm:hidden">
            <div className=" flex  bg-stone-200 p-2 w-96 rounded-3xl ml-10  ">
           <button className="px-2">
           <FontAwesomeIcon icon={faSearch} width={15} className="mr-2 text-gray-700" /></button>   
           <input  type="search" placeholder="Search for products..." className="text-sm w-full  bg-transparent border-none outline-none focus:ring-inset"/>
          </div></div>
          <div className="flex items-center">
          <FontAwesomeIcon icon={faSearch} width={15} className="ml-28 lg:hidden" />
            <Link href={'/cart'}>
            <button>
            <FontAwesomeIcon icon={faShoppingCart} width={15} className="lg:ml-28 sm:ml-5" />
            </button>
            </Link>
            
            <FontAwesomeIcon icon={faUser} width={15} className="ml-5" />
          </div>
        </div>
        
    )
}
