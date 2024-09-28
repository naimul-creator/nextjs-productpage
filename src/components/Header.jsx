import { FaSearch, FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white flex items-center justify-between px-6 py-2">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">PeakMart</h1>
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
        <a href="#" className="flex items-center">
          <FaShoppingCart className="mr-2" /> Cart
        </a>
      </div>
    </header>
  );
}
