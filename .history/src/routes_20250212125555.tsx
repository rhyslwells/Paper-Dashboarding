import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AgentDashboard from "./dashboards/agent-dashboard";
import ModelDashboard from "./dashboards/model-dashboard";
import ExperimentDashboard from "./dashboards/experiment-dashboard";

const DashboardRoutes = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/agent">Agent Dashboard</Link></li>
          <li><Link to="/model">Model Dashboard</Link></li>
          <li><Link to="/experiment">Experiment Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/agent" element={<AgentDashboard />} />
        <Route path="/model" element={<ModelDashboard />} />
        <Route path="/experiment" element={<ExperimentDashboard />} />
        <Route path="/" element={<h2>Select a Dashboard</h2>} />
      </Routes>
    </Router>
  );
};

export default DashboardRoutes;
