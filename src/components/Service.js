import React from 'react';

const services = [
  { title: 'Web Components', icon: '🌐' },
  { title: 'Desktop Components', icon: '🖥️' },
  { title: 'Mobile Components', icon: '📱' },
  { title: 'Reporting & Dashboards', icon: '📊' },
  { title: 'Testing & Debugging', icon: '🧪' },
  { title: 'UI/UX Tools', icon: '🎨' },
];

const Service = () => {
  return (
    <div className="text-white py-16 px-4 md:px-16 lg:px-32 text-center" style={{ backgroundColor: '#F1F2F7' }}>
      <h2 className="text-2xl md:text-3xl font-bold mb-10">UI Components</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-indigo-700 rounded-lg p-6 shadow-md">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
