import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AgentDashboard from "./dashboards/agent-dashboard";
import ModelDashboard from "./dashboards/model-dashboard";

const DashboardRoutes = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/agent">Agent Dashboard</Link></li>
          <li><Link to="/model">Model Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route 
          path="/agent" 
          element={<AgentDashboard />}
        />
        <Route 
          path="/model" 
          element={<ModelDashboard />}
        />
        <Route 
          path="/" 
          element={
            <div>
              <h2>Select a Dashboard</h2>
              <p>Welcome to the research dashboard system! Here, you can explore various dashboards that summarize and visualize the data from the papers you are reading.</p>
              <p>Choose a dashboard to see detailed metrics, trends, and insights related to specific research areas. Each dashboard is focused on a key aspect of the research, and presents various performance metrics such as accuracy, latency, and other relevant statistics.</p>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
};

export default DashboardRoutes;
