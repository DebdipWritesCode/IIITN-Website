import React from "react";

const BuildingWorksCommittee = () => {
  return (
    <div className="bg-orange-50 text-gray-800 min-h-screen flex items-center justify-center p-6">
      <div className="container mx-auto px-6 py-8 max-w-6xl bg-white shadow-xl rounded-lg p-8 border border-orange-200">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-orange-600">Building Works Committee</h1>
          <p className="text-lg text-gray-700 mt-2">(As on Dt. 01/10/2024)</p>
        </header>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md text-lg">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="border border-gray-300 px-6 py-3">Sl. No</th>
                <th className="border border-gray-300 px-6 py-3">Names</th>
                <th className="border border-gray-300 px-6 py-3">Position</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Professor (Dr) Prem Lal Patel, Director, IIIT Nagpur", "Chairman"],
                ["2", "Dr. Sachin V. Solanki, Joint Director, Technical Education Regional Office, DTE, Nagpur", "Member"],
                ["3", "Dr. Praful Gharpure, Head (Infrastructure Planning & Development) Representative of TCS", "Member"],
                ["4", "Dr. Dilip Lataye, Prof. & HOD, Civil Engg. Dept. VNIT, Nagpur", "Member"],
                ["5", "Mrs. Varsha Ghushe, Executive Engineer (Civil), Representative of Chief Engineer (Civil) PWD, Nagpur", "Member"],
                ["6", "Shri R.W. Banait, Asst. Superintending Engineer (Electrical), PWD, Nagpur", "Member"],
                ["7", "Dr. Tausif Diwan, Associate Dean, IIIT Nagpur", "Member"],
                ["8", "Shri Kailas N. Dakhale, Registrar, IIIT, Nagpur", "Member Secretary"],
              ].map(([sl, name, position], index) => (
                <tr key={index} className="even:bg-orange-100 hover:bg-orange-200 transition-all">
                  <td className="border border-gray-300 px-6 py-3 text-center font-semibold">{sl}</td>
                  <td className="border border-gray-300 px-6 py-3 text-left font-medium">{name}</td>
                  <td className="border border-gray-300 px-6 py-3 text-center font-semibold text-orange-700">{position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BuildingWorksCommittee;
