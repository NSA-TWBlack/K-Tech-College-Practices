import { Outlet } from "react-router";
import Header from "../components/Header";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
