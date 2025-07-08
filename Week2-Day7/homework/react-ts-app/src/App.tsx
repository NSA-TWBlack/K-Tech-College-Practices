import React, { useState } from "react";
import { Menu, Search } from "lucide-react";

// Import components
import Sidebar, { navigationItems } from "./components/Sidebar";

// Import pages
import PatientsPage from "./pages/PatientsPage";
import OverviewPage from "./pages/OverviewPage";
import MapPage from "./pages/MapPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DoctorsPage from "./pages/DoctorsPage";
import HistoryPage from "./pages/HistoryPage";
import SettingsPage from "./pages/SettingsPage";

// Page components mapping
const pageComponents = {
  patients: PatientsPage,
  overview: OverviewPage,
  map: MapPage,
  departments: DepartmentsPage,
  doctors: DoctorsPage,
  history: HistoryPage,
  settings: SettingsPage,
};

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("overview");

  const handleItemClick = (key: string) => {
    setActiveItem(key);
  };

  // Get current page component
  const CurrentPageComponent =
    pageComponents[activeItem as keyof typeof pageComponents] || OverviewPage;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          {/* Sidebar toggle button (mobile) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>

          {/* Left: Search */}
          <div className="flex-1 flex justify-start">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 text-xs py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Right: User Info */}
          <div className="flex items-center space-x-3 ml-4">
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <span className="text-xs font-medium text-gray-700 hidden sm:block">
              Emma Kwan
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-white">
          <CurrentPageComponent />
        </main>
      </div>
    </div>
  );
};

export default App;
