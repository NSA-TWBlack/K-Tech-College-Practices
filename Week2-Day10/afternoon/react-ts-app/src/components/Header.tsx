// Header.tsx
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../context";

const Header = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(LoginContext);
  console.log("Navigation user:", user);

  if (!user) {
    return null;
  }

  const navItems = [
    { path: "/tasks", label: "My tasks", exact: true },
    { path: "/create", label: "Create Task", exact: false },
  ];

  const isActive = (path: string, exact: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-full fixed top-0 right-0 left-0 bg-orange-500 pr-10 pl-10 pt-3 pb-3 flex justify-between items-center">
      <span className="text-white font-bold text-3xl">Task Management</span>
      <ul className="flex flex-wrap gap-5 text-white font-medium text-sm md:text-base">
        <li>
          <span className="cursor-pointer hover:text-orange-300 transition-colors duration-200">
            Hi, {user.loggedInUser?.email}
          </span>
        </li>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              key={item.path}
              className={`cursor-pointer hover:text-orange-300 transition-colors duration-200 ${
                isActive(item.path, item.exact) ? "text-orange-300" : ""
              }`}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              setUser(null);
              navigate("/login");
            }}
            className="cursor-pointer hover:text-red-500 transition-colors duration-200"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
