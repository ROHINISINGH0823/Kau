import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center mt-20">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-2xl w-full text-gray-800 text-center">
        {/* Heading with No Bottom Margin */}
        <h1 
          className="text-4xl font-bold text-blue-800" 
          style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a' }}
        >
          ABOUT US
        </h1>
        
        {/* Main Paragraph with Left Margin */}
        <p className="text-lg leading-relaxed mt-4 ml-8"> {/* ml-8 adds left margin */}
          Kaushik Consulting, founded in 2023 and headquartered in Brandon, MS,
          has rapidly made its mark by securing over <strong>$1 billion</strong> in contracts for
          its clients and generating a revenue exceeding <strong>$2 million</strong>. Partnering with
          more than <strong>50 clients</strong> across America, the company has garnered a reputation
          for excellence, earning numerous accolades including the <strong>IRG No. 1 Supplier Award</strong>, 
          <strong>STF Contractor of the Year Award</strong>, <strong>Rally Supplier Excellence Award</strong>, and the 
          <strong>OurBus No. 1 Strategic Supplier</strong> designation.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
