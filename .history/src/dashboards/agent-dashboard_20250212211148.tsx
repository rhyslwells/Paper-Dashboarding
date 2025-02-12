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
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      <div className="bg-white shadow-xl rounded-lg p-6">
        <div className="border-b mb-6 pb-2">
          <h2 className="text-3xl font-semibold text-blue-600">Google AI Agents Whitepaper Dashboard</h2>
        </div>
      </div>

      <div className="space-y-6">
        {/* Tab Buttons */}
        <div className="grid grid-cols-4 gap-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`p-3 rounded-lg text-xl ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`p-3 rounded-lg text-xl ${activeTab === 'tools' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Tools
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`p-3 rounded-lg text-xl ${activeTab === 'architecture' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab('implementation')}
            className={`p-3 rounded-lg text-xl ${activeTab === 'implementation' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Implementation
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Overview Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="border-b mb-6 pb-2">
                <h3 className="text-xl font-semibold text-blue-600">What is an Agent?</h3>
              </div>
              <p className="text-gray-600">
                An AI agent is an application that achieves goals by observing and acting upon the world using available tools. It combines:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3"><span className="text-blue-600">✔</span> Language Model Core</li>
                <li className="flex items-center gap-3"><span className="text-blue-600">✔</span> External Tools</li>
                <li className="flex items-center gap-3"><span className="text-blue-600">✔</span> Orchestration Layer</li>
              </ul>
            </div>

            {/* Core Components Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="border-b mb-6 pb-2">
                <h3 className="text-xl font-semibold text-blue-600">Core Components</h3>
              </div>
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">[Pie Chart Placeholder]</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolsData.map((tool, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
                <div className="border-b mb-6 pb-2">
                  <h3 className="text-xl font-semibold text-blue-600">{tool.name}</h3>
                </div>
                <p className="text-gray-600">{tool.value}% usage rate</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="border-b mb-6 pb-2">
              <h3 className="text-xl font-semibold text-blue-600">Agent Architecture Flow</h3>
            </div>
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-center">[Bar Chart Placeholder]</div>
            </div>
            <div className="mt-6 space-y-4">
              {architectureSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">{step.step}</div>
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
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="border-b mb-6 pb-2">
              <h3 className="text-xl font-semibold text-blue-600">Implementation Metrics</h3>
            </div>
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
         
