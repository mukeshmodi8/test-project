import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ProjectHero from "../Pages/ProjectHero";
import ProjectDetailsPage from "../Pages/Project/ProjectDetailsPage";
import ProjectStatsPage from "../Pages/Project/ProjectStatsPage";
import FarmersPage from "../Pages/Project/FarmersPage";
import ManufacturersDistributorPage from "../Pages/Project/ManufacturersDistributorPage";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#FFFFFF]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <ProjectHero />
        <ProjectDetailsPage />
        <ProjectStatsPage />
        <FarmersPage />
        <ManufacturersDistributorPage />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
