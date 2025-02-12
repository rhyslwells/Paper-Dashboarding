import React, { useState } from 'react';

const AgentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const toolsData = [
    { name: 'Extensions', value: 33, color: '#4299E1' },
    { name: 'Functions', value: 33, color: '#48BB78' },
    { name: 'Data Stores', value: 34, color: '#F6AD55' }
  ];

  const architectureSteps = [
    { step: 1, name: 'Model Processing', description: 'Takes in user query and processes intent' },
    { step: 2, name: 'Tool Selection', description: 'Chooses appropriate tools based on task' },
    { step: 3, name: 'Orchestration', description: 'Coordinates actions and reasoning steps' },
    { step: 4, name: 'External Integration', description: 'Interacts with external systems via tools' },
    { step: 5, name: 'Response Generation', description: 'Synthesizes results into final response' }
  ];

  const performanceData = [
    { month: 'Jan', accuracy: 85, latency: 120 },
    { month: 'Feb', accuracy: 88, latency: 115 },
    { month: 'Mar', accuracy: 92, latency: 105 },
    { month: 'Apr', accuracy: 95, latency: 95 }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="border-b mb-4 pb-2">
          <h2 className="text-2xl font-semibold">Google AI Agents Whitepaper Dashboard</h2>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <button onClick={() => setActiveTab('overview')} className="p-2 bg-gray-200 rounded">Overview</button>
          <button onClick={() => setActiveTab('tools')} className="p-2 bg-gray-200 rounded">Tools</button>
          <button onClick={() => setActiveTab('architecture')} className="p-2 bg-gray-200 rounded">Architecture</button>
          <button onClick={() => setActiveTab('implementation')} className="p-2 bg-gray-200 rounded">Implementation</button>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="border-b mb-4 pb-2">
                <h3 className="text-lg font-semibold">What is an Agent?</h3>
              </div>
              <p className="text-gray-600">
                An AI agent is an application that achieves goals by observing and acting upon the world using available tools. It combines:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center gap-2">Language Model Core</li>
                <li className="flex items-center gap-2">External Tools</li>
                <li className="flex items-center gap-2">Orchestration Layer</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="border-b mb-4 pb-2">
                <h3 className="text-lg font-semibold">Core Components</h3>
              </div>
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">[Pie Chart Placeholder]</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="border-b mb-4 pb-2">
                <h3 className="text-lg font-semibold">Extensions</h3>
              </div>
              <p className="text-gray-600">
                Bridge between agents and APIs, enabling direct API calls and real-time information retrieval.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="border-b mb-4 pb-2">
                <h3 className="text-lg font-semibold">Functions</h3>
              </div>
              <p className="text-gray-600">
                Client-side execution allowing more control over API calls and data flow.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="border-b mb-4 pb-2">
                <h3 className="text-lg font-semibold">Data Stores</h3>
              </div>
              <p className="text-gray-600">
                Vector databases providing access to additional structured and unstructured data.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="border-b mb-4 pb-2">
              <h3 className="text-lg font-semibold">Agent Architecture Flow</h3>
            </div>
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-center">[Bar Chart Placeholder]</div>
            </div>
            <div className="mt-4 space-y-2">
              {architectureSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.name}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'implementation' && (
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="border-b mb-4 pb-2">
              <h3 className="text-lg font-semibold">Implementation Metrics</h3>
            </div>
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-center">[Line Chart Placeholder]</div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-500">Accuracy Trend</h4>
                <p className="text-sm text-gray-600">Shows improving accuracy over time</p>
              </div>
              <div>
                <h4 className="font-medium text-green-500">Latency Trend</h4>
                <p className="text-sm text-gray-600">Shows decreasing latency over time</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentDashboard;
