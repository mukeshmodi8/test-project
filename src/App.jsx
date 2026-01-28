import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import ProjectHero from "./Pages/ProjectHero";

// import Dashboard from "./pages/Dashboard/Dashboard";
// import ProjectList from "./pages/Projects/ProjectList";
// import ProjectDetails from "./pages/Projects/ProjectDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
          {/* <Route path="projects" element={<ProjectList />} /> */}
          <Route path="projects/:id" element={<ProjectHero />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
