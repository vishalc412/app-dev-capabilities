import React from 'react';

const ServiceOfferings = () => {
  const serviceOfferings = [
    {
      category: "Software Architecture & Technical Architecture",
      capabilities: [
        "Solution Design - Crafting scalable and flexible architectures",
        "Microservices & Modularization",
        "Performance Optimization",
        "Security Architecture",
        "Cloud-Native & Hybrid Architectures",
        "Technical Roadmaps for tech stack evolution"
      ],
      color: "#4F46E5" // Indigo
    },
    {
      category: "DevOps Services",
      capabilities: [
        "CI/CD Pipelines - Automate integration, testing, and deployment",
        "Infrastructure as Code (IaC) - Scalable infrastructure setups",
        "Monitoring & Logging - Real-time system insights",
        "Automation - Streamline workflows and reduce manual tasks",
        "Security & Compliance - Robust vulnerability management"
      ],
      color: "#7C3AED" // Purple
    },
    {
      category: "Backend Development",
      capabilities: [
        "API Development & Integration - Scalable, secure API solutions",
        "Database Management - SQL & NoSQL optimization",
        "OTEL - Open Telemetry Integrations",
        "Authentication & Authorization - Modern auth protocols",
        "Event-Driven Architecture",
        "Scalable Microservices",
        "Data Processing Pipelines"
      ],
      color: "#2563EB" // Blue
    },
    {
      category: "Frontend Development",
      capabilities: [
        "Responsive & Adaptive Design - All devices and screen sizes",
        "UI/UX Development - Intuitive interfaces",
        "Single Page Applications (SPAs) - React, Angular",
        "Progressive Web Apps (PWAs)",
        "Accessibility Compliance - WCAG standards",
        "State Management - Redux, Vuex",
        "Web Performance Optimization"
      ],
      color: "#DC2626" // Red
    },
    {
      category: "Cloud Services",
      capabilities: [
        "Cloud Infrastructure Setup - AWS, Azure, GCP",
        "Cloud Migration - Seamless transition strategies",
        "Scalability & Load Balancing - Auto-scaling solutions",
        "Disaster Recovery & Backup",
        "Cost Optimization - Effective resource management"
      ],
      color: "#059669" // Green
    },
    {
      category: "AI Ready Team",
      capabilities: [
        "AI Tool Integration",
        "GitHub Copilot trained team"
      ],
      color: "#D97706" // Yellow
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Service Offerings</h1>
        <p className="text-xl text-gray-600">Comprehensive Technology Solutions</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceOfferings.map((offering) => (
          <div 
            key={offering.category} 
            className="bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow"
            style={{ borderLeftWidth: '4px', borderLeftColor: offering.color }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: offering.color }}>
              {offering.category}
            </h3>
            <ul className="space-y-3">
              {offering.capabilities.map((capability) => (
                <li key={capability} className="flex items-start">
                  <svg 
                    className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" 
                    style={{ color: offering.color }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600 text-sm leading-tight">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt-12 bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
        <p className="text-gray-600">
          We deliver powerful, future-ready digital solutions that align with the unique needs and growth strategies of our clients across various industries. Our end-to-end expertise enables us to handle complex projects while maintaining the highest standards of quality and innovation.
        </p>
      </div>
    </div>
  );
};

export default ServiceOfferings;