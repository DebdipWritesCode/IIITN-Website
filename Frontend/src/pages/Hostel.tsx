import React from "react";

const HostelRules: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-orange-600 text-white py-14 text-center shadow-md">
        <h1 className="text-5xl font-extrabold">🏠 Hostel Rules & Guidelines</h1>
        <p className="mt-2 text-lg font-medium">
          Stay informed and adhere to the institute's regulations for a smooth hostel life.
        </p>
      </header>

      {/* Rules Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-orange-700 text-center mb-8">
          Important Guidelines
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="#" className="bg-white shadow-lg rounded-xl p-6 text-center transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800">🚫 Anti Ragging Rules</h3>
            <p className="text-lg text-gray-600 mt-2">Ensure a safe and respectful environment for all students.</p>
            <p className="text-blue-500 font-medium mt-3">Click Here</p>
          </a>
          <a href="#" className="bg-white shadow-lg rounded-xl p-6 text-center transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800">📜 Institute Rules</h3>
            <p className="text-lg text-gray-600 mt-2">General guidelines to maintain discipline and order.</p>
            <p className="text-blue-500 font-medium mt-3">Click Here</p>
          </a>
          <a href="#" className="bg-white shadow-lg rounded-xl p-6 text-center transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800">🏠 Hostel Rules</h3>
            <p className="text-lg text-gray-600 mt-2">Rules to ensure smooth hostel living for all residents.</p>
            <p className="text-blue-500 font-medium mt-3">Click Here</p>
          </a>
          <a href="#" className="bg-white shadow-lg rounded-xl p-6 text-center transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800">✅ Do’s & Don’ts</h3>
            <p className="text-lg text-gray-600 mt-2">Guidelines on acceptable and prohibited conduct.</p>
            <p className="text-blue-500 font-medium mt-3">Click Here</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HostelRules;