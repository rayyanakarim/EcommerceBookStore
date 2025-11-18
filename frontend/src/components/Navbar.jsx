import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import avatar from "../assets/books/avatar.png";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const currentUser = false;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 font-primary">
      <nav className="flex justify-between items-center">
        {/** LeftNavigation */}

        {/** LeftNavigation icon */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3BottomLeft className="w-6 h-6" />
          </Link>

          {/** LeftNavigation searchbar */}
          <div className="relative sm:w-72 w-40">
            <IoSearch className="absolute inline-block left-3 inset-y-2" />

            <input
              type="text"
              placeholder="Search books..."
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/** RightNavigation */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          {currentUser ? (
            <div className="relative flex items-center">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img
                  src={avatar}
                  alt="Profile"
                  className={`w-7 h-7 rounded-full ${
                    currentUser ? "border-2 border-primary" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}

              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <FaUser className="w-6 h-6" />
            </Link>
          )}

          <button className="hidden sm:inline-block">
            <FaRegHeart className="w-6 h-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <LuShoppingCart className="w-6 h-6" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
