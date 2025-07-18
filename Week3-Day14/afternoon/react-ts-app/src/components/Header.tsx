// Header.tsx
import { NavLink, useNavigate } from "react-router";
import { useAuthStore } from "../useAuthStore";

const Header = () => {
  const navigate = useNavigate();
  const { loggedInUser, logOut } = useAuthStore((state) => state);

  // const { user, setUser } = useContext(LoginContext);
  // console.log("Navigation user:", user);

  // if (!user) {
  //   return null;
  // }

  const navItems = [
    { path: "/", label: "My tasks", exact: true },
    { path: "/create-task", label: "Create Task", exact: false },
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
            Hi, {loggedInUser?.email}
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
              logOut();
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
