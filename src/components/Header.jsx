"use client";
import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from "react-redux";

export default function Header() {


  const cart = useSelector((state) => state.cart.item);


  return (
    <header className="bg-blue-500 text-white flex items-center justify-between px-6 py-2">
      <div className="flex items-center">
        <Link href="/">        <h1 className="text-2xl font-bold">PeakMart</h1>
        </Link>
        <span className="text-xs ml-2">Explore <span className="text-yellow-300">PeakMall</span></span>
      </div>
      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="w-full p-2 rounded-l-md text-black"
        />
        <button className="bg-orange-500 text-blue-800 p-3 rounded-r-md">
          <FaSearch />
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <button className="bg-orange-500 text-blue-800 p-1.5 rounded-md">Login</button>
       <Link className="flex items-center" href="/addtocart"> <FaShoppingCart className="mr-2" /> Cart:  <span className="font-bold text-orange-500">..{cart.length}</span></Link>
       
         
      
      </div>
    </header>
  );
}
