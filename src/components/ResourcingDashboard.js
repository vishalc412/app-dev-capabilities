import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const ResourcingDashboard = () => {
  const [selectedTechnology, setSelectedTechnology] = useState('All');

  const resourceData = [
    { name: 'SQL Server', value: 94 },
    { name: '.NET', value: 82 },
    { name: 'JavaScript/jQuery', value: 80 },
    { name: 'React', value: 75 },
    { name: 'Azure', value: 72 },
    { name: 'Angular', value: 57 },
    { name: 'DevOps', value: 45 },
    { name: 'Node.js', value: 43 },
    { name: 'NoSQL DB', value: 36 },
    { name: 'AWS', value: 26 },
    { name: 'React Native', value: 23 },
    { name: 'SSRS', value: 22 },
    { name: 'Java', value: 18 },
    { name: 'Spring Boot', value: 17 },
    { name: 'Python', value: 14 },
    { name: 'Android', value: 5 }
  ].sort((a, b) => b.value - a.value);

  const experienceData = {
    'SQL Server': [
      { range: '0-2 years', count: 25 },
      { range: '2-5 years', count: 35 },
      { range: '5-8 years', count: 22 },
      { range: '8+ years', count: 12 }
    ],
    '.NET': [
      { range: '0-2 years', count: 20 },
      { range: '2-5 years', count: 30 },
      { range: '5-8 years', count: 20 },
      { range: '8+ years', count: 12 }
    ],
    'JavaScript/jQuery': [
      { range: '0-2 years', count: 22 },
      { range: '2-5 years', count: 28 },
      { range: '5-8 years', count: 18 },
      { range: '8+ years', count: 12 }
    ],
    'All': [
      { range: '0-2 years', count: 150 },
      { range: '2-5 years', count: 250 },
      { range: '5-8 years', count: 180 },
      { range: '8+ years', count: 120 }
    ]
  };

  const technologyGroups = [
    { name: 'Frontend', value: 212, color: '#4299e1' },
    { name: 'Backend', value: 125, color: '#48bb78' },
    { name: 'Cloud/DevOps', value: 117, color: '#9f7aea' },
    { name: 'Database', value: 130, color: '#ed8936' },
    { name: 'Mobile', value: 28, color: '#ef4444' },
  ];

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md">
          <p className="text-sm">{`${payload[0].payload.name}: ${payload[0].value} resources`}</p>
        </div>
      );
    }
    return null;
  };

  const getExperienceData = (tech) => {
    return experienceData[tech] || experienceData['All'];
  };

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Resource Distribution Overview</h1>
        <p className="text-xl text-gray-600">Current Team Capabilities and Allocation</p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h2 className="text-xl font-semibold">Frontend Expertise</h2>
          </div>
          <div className="text-3xl font-bold text-blue-500">212</div>
          <p className="text-gray-600">Total Frontend Resources</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
            <h2 className="text-xl font-semibold">Backend Power</h2>
          </div>
          <div className="text-3xl font-bold text-green-500">125</div>
          <p className="text-gray-600">Backend Developers</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <h2 className="text-xl font-semibold">Cloud & DevOps</h2>
          </div>
          <div className="text-3xl font-bold text-purple-500">117</div>
          <p className="text-gray-600">Cloud Experts</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        {/* Technology Distribution Pie Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Technology Group Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={technologyGroups}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {technologyGroups.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Resource Distribution Bar Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Resource Distribution by Technology</h2>
          <div className="h-[600px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={resourceData}
                layout="vertical"
                margin={{ top: 5, right: 50, left: 120, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={120}
                  tick={{ fontSize: 12 }}
                  interval={0}
                />
                <Tooltip content={customTooltip} />
                <Bar 
                  dataKey="value" 
                  fill="#4299e1"
                  label={{ 
                    position: 'right',
                    fontSize: 12,
                    formatter: (value) => `${value}`,
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Experience Distribution Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Experience Distribution</h2>
          <div className="mb-4">
            <select 
              className="border rounded p-2"
              value={selectedTechnology}
              onChange={(e) => setSelectedTechnology(e.target.value)}
            >
              <option value="All">All Technologies</option>
              {resourceData.map(tech => (
                <option key={tech.name} value={tech.name}>{tech.name}</option>
              ))}
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={getExperienceData(selectedTechnology)}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="count" 
                  name="Number of Resources"
                  fill="#8884d8"
                  label={{ 
                    position: 'top',
                    formatter: (value) => `${value}`
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcingDashboard;