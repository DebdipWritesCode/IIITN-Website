import React from "react";

const Fees: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-orange-50 text-gray-900 font-sans">
      {/* Page Header */}
      <header className="bg-orange-600 text-white py-10 text-center shadow-lg rounded-b-3xl">
        <h1 className="text-4xl font-extrabold tracking-wide">Fee Structure</h1>
        <p className="mt-2 text-lg opacity-90">Find details about academic and hostel fees here.</p>
      </header>

      {/* Fees Section */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Academic Fees */}
          <FeeCard 
            title="Academic Fees" 
            description="Click below to download the academic fee details." 
            pdfUrl="/path-to-academic-fees.pdf" 
          />

          {/* Hostel Fees */}
          <FeeCard 
            title="Hostel Fees" 
            description="Click below to download the hostel fee details." 
            pdfUrl="/path-to-hostel-fees.pdf" 
          />
        </div>

        {/* Payment Details */}
        <div className="mt-12 p-6 border border-orange-300 bg-white bg-opacity-90 rounded-2xl shadow-lg backdrop-blur-lg text-center">
          <h2 className="text-2xl font-semibold text-orange-700">Payment Details</h2>
          <p className="mt-2 text-gray-700">UPI and other payment details can be found here.</p>
          <div className="mt-4">
            <a
              href="/path-to-payment-details.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300"
            >
              View Payment Details
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

interface FeeCardProps {
  title: string;
  description: string;
  pdfUrl: string;
}

const FeeCard: React.FC<FeeCardProps> = ({ title, description, pdfUrl }) => {
  return (
    <div className="p-6 border border-orange-300 bg-white bg-opacity-90 rounded-2xl shadow-lg backdrop-blur-lg transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-semibold text-orange-700 text-center">{title}</h2>
      <p className="mt-2 text-gray-700 text-center">{description}</p>
      <div className="mt-4 flex justify-center">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Fees;
