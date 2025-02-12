import React, { useState } from "react";
import {
  LineChart,
  Line,
  RadarChart,
  Radar,
  BarChart,
  Bar,
  DoughnutChart,
  Doughnut,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ModelDashboard = () => {
  const [modelData] = useState({
    accuracy: [0.85, 0.88, 0.92, 0.95],
    loss: [0.4, 0.3, 0.2, 0.1],
    labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4'],
    confusionMatrix: [12, 4, 3, 8],
    featureImportance: [0.35, 0.25, 0.4],
  });

  const accuracyChartData = modelData.labels.map((label, index) => ({
    name: label,
    accuracy: modelData.accuracy[index],
  }));

  const lossChartData = modelData.labels.map((label, index) => ({
    name: label,
    loss: modelData.loss[index],
  }));

  const confusionMatrixData = [
    { name: 'True Positive', value: modelData.confusionMatrix[0] },
    { name: 'False Positive', value: modelData.confusionMatrix[1] },
    { name: 'False Negative', value: modelData.confusionMatrix[2] },
    { name: 'True Negative', value: modelData.confusionMatrix[3] },
  ];

  const featureImportanceData = [
    { name: 'Feature 1', value: modelData.featureImportance[0] },
    { name: 'Feature 2', value: modelData.featureImportance[1] },
    { name: 'Feature 3', value: modelData.featureImportance[2] },
  ];

  return (
    <div className="container">
      <div className="card">
        <h3>Model Performance</h3>
        <div className="grid">
          <div className="card">
            <h4>Accuracy Over Epochs</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={accuracyChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  fill="#8884d8"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h4>Loss Over Epochs</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lossChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="loss"
                  stroke="#ff7300"
                  activeDot={{ r: 8 }}
                  fill="#ff7300"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Confusion Matrix</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={confusionMatrixData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <h3>Feature Importance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <DoughnutChart data={featureImportanceData}>
            <Tooltip />
            <Legend />
            <Doughnut dataKey="value" fill="#8884d8" />
          </DoughnutChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <h3>Model Radar</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart outerRadius="80%" data={[{ data: [0.85, 0.88, 0.87, 0.86, 0.91], name: "Model 1" }]}>
            <Tooltip />
            <Legend />
            <Radar name="Model 1" dataKey="data" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ModelDashboard;
