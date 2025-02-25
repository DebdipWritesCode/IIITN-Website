import React from "react";

interface SenateMember {
  srNo: number;
  name: string;
  position: string;
}

const senateMembers: SenateMember[] = [
  { srNo: 1, name: "Professor (Dr) Prem Lal Patel, Director, IIIT Nagpur", position: "Chairman" },
  { srNo: 2, name: "Dr A.G. Keskar, Professor VNIT, Nagpur", position: "Member" },
  { srNo: 3, name: "Dr Arvind Kumar (Centre Head) TATA Consultancy Services, MIHAN, Nagpur", position: "Member" },
  { srNo: 4, name: "Shri Bhaskar Sharma, TATA Consultancy Services, MIHAN, Nagpur", position: "Member" },
  { srNo: 5, name: "Dr. (Mrs) Aparajeeta Ojha, Professor (CSE), IIITDM, Jabalpur", position: "Member" },
  { srNo: 6, name: "Dr. (Ms) Pushpa Trivedi, Professor (Humanities), IIT Bombay", position: "Member" },
  { srNo: 7, name: "Dr (Mrs) B. Padma S. Rao, Chief Scientist, CSIR-NEERI, Nagpur", position: "Member" },
  { srNo: 8, name: "Dr. Tausif Diwan, Associate Dean, IIIT Nagpur", position: "Member" },
  { srNo: 9, name: "Dr. Nishat Afshan Ansari, HOD, CSE, IIIT Nagpur", position: "Member" },
  { srNo: 10, name: "Dr. Harsh Goud, HOD, ECE, IIIT Nagpur", position: "Member" },
  { srNo: 11, name: "Dr. Prasad Joshi, HOD, BS, IIIT Nagpur", position: "Member" },
  { srNo: 12, name: "Shri Kailas N. Dakhale, Registrar, IIIT Nagpur", position: "Member Secretary" },
];

const SenateTable: React.FC = () => {
  return (
    <div className="bg-orange-50 text-gray-800 min-h-screen flex items-center justify-center p-6">
      <div className="container mx-auto px-6 py-8 max-w-6xl bg-white shadow-xl rounded-lg p-8 border border-orange-200">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-orange-600">SENATE MEMBER DETAILS</h1>
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
              {senateMembers.map((member, index) => (
                <tr key={member.srNo} className={index % 2 === 0 ? "bg-orange-100" : "bg-white hover:bg-orange-200"}>
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

export default SenateTable;