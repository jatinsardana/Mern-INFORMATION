import React from "react";
import {Route , BrowserRouter , Router , Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">
              Create INFO
            </button>
            </Link>
            <Link to="/all">
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              View INFOS
            </button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-white font-bold text-xl">INFORMATION</h1>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
