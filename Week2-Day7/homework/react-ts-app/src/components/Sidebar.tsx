import React from "react";
import {
  Users,
  BarChart3,
  Map,
  Building2,
  UserCheck,
  Clock,
  Settings,
  X,
  Plus,
} from "lucide-react";

// Navigation items configuration
export const navigationItems = [
  { name: "Patients", key: "patients", icon: Users },
  { name: "Overview", key: "overview", icon: BarChart3 },
  { name: "Map", key: "map", icon: Map },
  { name: "Departments", key: "departments", icon: Building2 },
  { name: "Doctors", key: "doctors", icon: UserCheck },
  { name: "History", key: "history", icon: Clock },
  { name: "Settings", key: "settings", icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string;
  onItemClick: (key: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  activeItem,
  onItemClick,
}) => {
  const handleItemClick = (key: string) => {
    onItemClick(key);
    onClose(); // Close sidebar on mobile after selection
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-44 bg-white border-r border-gray-200
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Plus className="w-3 h-3 text-white" />
              </div>
              <span className="text-base font-semibold text-gray-800">
                H-care
              </span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Register Patient Button */}
          <div className="p-4">
            <button className="bg-purple-600 text-xs w-full text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
              <span>Register patient</span>
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.key;

              return (
                <button
                  key={item.name}
                  onClick={() => handleItemClick(item.key)}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left
                    ${
                      isActive
                        ? "bg-purple-50 text-purple-600 border-purple-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon className="w-2 h-2" />
                  <span className="font-medium text-xs">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile App Section */}
          <div className="p-4 border-t border-gray-200">
            <div className="bg-purple-50 rounded-xl flex flex-col items-center space-y-3 text-center">
              {/* Hình minh họa */}
              <img
                src="images/559.jpg"
                alt="mobile-illustration"
                className="w-full h-1/2 object-fill"
              />

              {/* Tiêu đề */}
              <p className="text-sm font-medium text-gray-700">
                Get mobile app
              </p>

              {/* Nút tải app */}
              <div className="flex items-center justify-center space-x-3">
                <img
                  src="images/ch-play.jpg"
                  alt="Google Play"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="images/apple.png"
                  alt="App Store"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
