import React, { useState } from "react";
import { Line, Radar, Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart components (required for Chart.js v3 and above)
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ModelDashboard = () => {
  const [modelData] = useState({
    accuracy: [0.85, 0.88, 0.92, 0.95],
    loss: [0.4, 0.3, 0.2, 0.1],
    labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4'],
    confusionMatrix: [12, 4, 3, 8],
    featureImportance: [0.35, 0.25, 0.4],
  });

  const accuracyChartData = {
    labels: modelData.labels,
    datasets: [
      {
        label: "Accuracy",
        data: modelData.accuracy,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  const lossChartData = {
    labels: modelData.labels,
    datasets: [
      {
        label: "Loss",
        data: modelData.loss,
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
        fill: true,
      },
    ],
  };

  const confusionMatrixData = {
    labels: ['True Positive', 'False Positive', 'False Negative', 'True Negative'],
    datasets: [
      {
        label: "Confusion Matrix",
        data: modelData.confusionMatrix,
        backgroundColor: ['rgba(75,192,192,0.2)', 'rgba(255,99,132,0.2)', 'rgba(255,159,64,0.2)', 'rgba(153,102,255,0.2)'],
      },
    ],
  };

  const featureImportanceData = {
    labels: ['Feature 1', 'Feature 2', 'Feature 3'],
    datasets: [
      {
        data: modelData.featureImportance,
        backgroundColor: ['#FF6347', '#4CAF50', '#FFD700'],
      },
    ],
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Model Performance</h3>
        <div className="grid">
          <div className="card">
            <h4>Accuracy Over Epochs</h4>
            <div className="chart-container">
              <Line data={accuracyChartData} />
            </div>
          </div>
          <div className="card">
            <h4>Loss Over Epochs</h4>
            <div className="chart-container">
              <Line data={lossChartData} />
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Confusion Matrix</h3>
        <div className="chart-container">
          <Bar data={confusionMatrixData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      <div className="card">
        <h3>Feature Importance</h3>
        <div className="chart-container">
          <Doughnut data={featureImportanceData} />
        </div>
      </div>

      <div className="card">
        <h3>Model Radar</h3>
        <div className="chart-container">
          <Radar data={{
            labels: ['Accuracy', 'Precision', 'Recall', 'F1 Score', 'AUC'],
            datasets: [{
              label: 'Model 1',
              data: [0.85, 0.88, 0.87, 0.86, 0.91],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }], 
          }} />
        </div>
      </div>
    </div>
  );
};

export default ModelDashboard;
