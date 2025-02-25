import React from "react";

interface FinanceMember {
  srNo: number;
  name: string;
  position: string;
}

const financeMembers: FinanceMember[] = [
  {
    srNo: 1,
    name: "Shri Ravi Sharma, (Additional Charge) Chairperson - BoG, IIIT Una, HP. President - IIT Alumni Council. Chairman - Telecom Equipment Manufacturers Association of India (TEMA). Founder - Prama Jyoti Foundation / Mission Chetna / Subodhanand Foundation.",
    position: "Chairperson",
  },
  { srNo: 2, name: "Shri. N.S. Bisht, Dy. Secretary, IFD MOE, New Delhi", position: "Member" },
  { srNo: 3, name: "Professor (Dr) Prem Lal Patel, Director, IIIT Nagpur", position: "Member" },
  { srNo: 4, name: "Dr. Sachin Virsingh Solanki, Joint Director, Technical Education Regional Office, DTE, Nagpur", position: "Member" },
  { srNo: 5, name: "Shri Piyush Agrawal, Services Delivery Leader Tata Consultancy Services Industry Partner", position: "Member" },
  { srNo: 6, name: "Shri Kailas N. Dakhale, Registrar, IIIT, Nagpur.", position: "Member Secretary" },
];

const FinanceTable: React.FC = () => {
  return (
    <div className="bg-orange-50 text-gray-800 min-h-screen flex items-center justify-center p-6">
      <div className="container mx-auto px-6 py-8 max-w-6xl bg-white shadow-xl rounded-lg p-8 border border-blue-200">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-orange-600">FINANCE COMMITTEE MEMBERS</h1>
          <p className="text-lg text-gray-600">(As on Dt. 01/10/2024)</p>
        </header>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md text-lg">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="border border-gray-300 px-6 py-3">Sl. No</th>
                <th className="border border-gray-300 px-6 py-3">Name</th>
                <th className="border border-gray-300 px-6 py-3">Position</th>
              </tr>
            </thead>
            <tbody>
              {financeMembers.map((member, index) => (
                <tr key={member.srNo} className={index % 2 === 0 ? "bg-orange-100" : "bg-white hover:bg-blue-200"}>
                  <td className="border border-gray-300 px-6 py-3">{member.srNo}</td>
                  <td className="border border-gray-300 px-6 py-3">{member.name}</td>
                  <td className="border border-gray-300 px-6 py-3">{member.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinanceTable;