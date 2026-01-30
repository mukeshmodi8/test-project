import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import ProjectHero from "../Pages/ProjectHero";
import ProjectDetailsPage from "../Pages/Project/ProjectDetailsPage";
import ProjectStatsPage from "../Pages/Project/ProjectStatsPage";
import FarmersPage from "../Pages/Project/FarmersPage";
import ManufacturersDistributorPage from "../Pages/Project/ManufacturersDistributorPage";
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex flex-col flex-1 min-w-0">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto px-2 sm:px-4 py-4 space-y-1">

          <ProjectHero />
          <ProjectDetailsPage />
          <ProjectStatsPage />
          <FarmersPage />
          <ManufacturersDistributorPage />
        </main>

      </div>
    </div>
  );
};



export default DashboardLayout;
