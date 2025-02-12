import React, { useState } from "react";
import { Line, Radar, Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ModelDashboard = () => {
  // Sample model performance data
  const [modelData] = useState({
    accuracy: [0.85, 0.88, 0.92, 0.95],
    loss: [0.4, 0.3, 0.2, 0.1],
    labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4'],
    confusionMatrix: [12, 4, 3, 8], // Example values for a binary classifier
    featureImportance: [0.35, 0.25, 0.4], // Example feature importance
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
    <div className="p-4 space-y-4">
      <div className="bg-white shadow-md rounded-lg p-4 h-80">
        <h3 className="text-xl font-semibold mb-4">Model Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="font-semibold">Accuracy Over Epochs</h4>
            <Line data={accuracyChartData} />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="font-semibold">Loss Over Epochs</h4>
            <Line data={lossChartData} />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 h-80">
        <h3 className="text-xl font-semibold mb-4">Confusion Matrix</h3>
        <Bar data={confusionMatrixData} options={{ responsive: true }} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 h-80">
        <h3 className="text-xl font-semibold mb-4">Feature Importance</h3>
        <Doughnut data={featureImportanceData} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 h-80">
        <h3 className="text-xl font-semibold mb-4">Model Radar</h3>
        <Radar
          data={{
            labels: ['Accuracy', 'Precision', 'Recall', 'F1 Score', 'AUC'],
            datasets: [
              {
                label: 'Model 1',
                data: [0.85, 0.88, 0.87, 0.86, 0.91],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ModelDashboard;
