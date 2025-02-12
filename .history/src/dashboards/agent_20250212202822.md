import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';
import { Brain, Wrench, GitFlow, Database, Code, Box, Search } from 'lucide-react';

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
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Google AI Agents Whitepaper Dashboard
          </CardTitle>
        </CardHeader>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 gap-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  What is an Agent?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  An AI agent is an application that achieves goals by observing and acting upon the world using available tools. It combines:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-500" />
                    Language Model Core
                  </li>
                  <li className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-green-500" />
                    External Tools
                  </li>
                  <li className="flex items-center gap-2">
                    <GitFlow className="w-4 h-4 text-orange-500" />
                    Orchestration Layer
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Core Components
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64">
                  <PieChart width={300} height={250}>
                    <Pie
                      data={toolsData}
                      cx={150}
                      cy={120}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {toolsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Box className="w-5 h-5" />
                  Extensions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bridge between agents and APIs, enabling direct API calls and real-time information retrieval.
                </p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• Agent-side execution</li>
                  <li>• Built-in example types</li>
                  <li>• Direct API integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Functions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Client-side execution allowing more control over API calls and data flow.
                </p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• Client-side control</li>
                  <li>• Enhanced security</li>
                  <li>• Flexible timing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Data Stores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Vector databases providing access to additional structured and unstructured data.
                </p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• RAG implementation</li>
                  <li>• Multiple data formats</li>
                  <li>• Real-time updates</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="architecture" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <GitFlow className="w-5 h-5" />
                Agent Architecture Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64">
                <BarChart width={600} height={250} data={architectureSteps}>
                  <XAxis dataKey="step" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="step" fill="#4299E1" />
                </BarChart>
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
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="implementation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Search className="w-5 h-5" />
                Implementation Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64">
                <LineChart width={600} height={250} data={performanceData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="accuracy" stroke="#4299E1" />
                  <Line type="monotone" dataKey="latency" stroke="#48BB78" />
                </LineChart>
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AgentDashboard;
