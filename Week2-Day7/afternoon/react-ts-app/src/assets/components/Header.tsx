// Header.tsx
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-orange-500 pr-10 pl-10 pt-3 pb-3 flex justify-between items-center">
      <span className="text-white font-bold text-3xl">Magazines</span>
      <ul className="flex flex-wrap gap-3 text-white font-medium text-sm md:text-base">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer hover:text-orange-300 transition-colors duration-200 ${
                isActive ? "text-orange-300" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `cursor-pointer hover:text-orange-300 transition-colors duration-200 ${
                isActive ? "text-orange-300" : ""
              }`
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category"
            className={({ isActive }) =>
              `cursor-pointer hover:text-orange-300 transition-colors duration-200 ${
                isActive ? "text-orange-300" : ""
              }`
            }
          >
            Category
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `cursor-pointer hover:text-orange-300 transition-colors duration-200 ${
                isActive ? "text-orange-300" : ""
              }`
            }
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `cursor-pointer hover:text-orange-300 transition-colors duration-200 ${
                isActive ? "text-orange-300" : ""
              }`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customer"
            className={({ isActive }) =>
              `cursor-pointer hover:text-orange-300 transition-colors duration-200 ${
                isActive ? "text-orange-300" : ""
              }`
            }
          >
            Customer
          </NavLink>
        </li>
        <li className="flex gap-3 bg-white rounded-sm cursor-pointer text-orange-500 p-1">
          <ShoppingCart width="16px" />
          <span>0</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
