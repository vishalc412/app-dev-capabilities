import React, { useState } from 'react';
import ResourcingDashboard from './ResourcingDashboard';
import ServiceOfferings from './ServiceOfferings';

const AppDashboard = () => {
  const [activeTab, setActiveTab] = useState('resourcing'); // 'resourcing' or 'services'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            <button
              className={`py-4 px-1 font-medium text-lg border-b-2 ${
                activeTab === 'resourcing'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('resourcing')}
            >
              Resource Distribution
            </button>
            <button
              className={`py-4 px-1 font-medium text-lg border-b-2 ${
                activeTab === 'services'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('services')}
            >
              Service Offerings
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        {activeTab === 'resourcing' ? (
          <ResourcingDashboard />
        ) : (
          <ServiceOfferings />
        )}
      </div>
    </div>
  );
};

export default AppDashboard;