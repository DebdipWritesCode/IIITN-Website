import React from "react";

interface BoardMember {
  srNo: number;
  name: string;
  position: string;
}

const boardMembers: BoardMember[] = [
  { srNo: 1, name: "Shri Ravi Sharma, Chairperson -BoG, IIIT, Una. HP", position: "Chairperson" },
  { srNo: 2, name: "Ms Saumya Gupta, JS (Technical Education), MoE, New Delhi", position: "Member" },
  { srNo: 3, name: "Dr. Vinod Mohitkar, Director, DTE, Govt. of Maharashtra, Mumbai", position: "Member" },
  { srNo: 4, name: "Shri Ajay R. Bohora, Co-Founder, HDFC Credila Financial Services, Nashik", position: "Member" },
  { srNo: 5, name: "Dr. (Mrs). B. Padma S. Rao, Chief Scientist, CSIR-NEERI, Nagpur", position: "Member" },
  { srNo: 6, name: "Shri. V. Murlidharan, Founder & Managing Trustee, Sevalaya, Chennai", position: "Member" },
  { srNo: 7, name: "Prof Dr. Anupam Shukla, Director, SVNIT, Surat", position: "Member" },
  { srNo: 8, name: "Prof. Dr. Rajendra Patrikar, Professor (VLSI & Nanotech), VNIT, Nagpur", position: "Member" },
  { srNo: 9, name: "Dr. Sachin Lodha, Chief Scientist, Corporate Technology Office, TCS, Pune", position: "Member" },
  { srNo: 10, name: "Professor (Dr.) Prem Lal Patel, Director, VNIT, Nagpur", position: "Member" },
  { srNo: 11, name: "Dr. Tausif Diwan, Associate Dean, IIIT Nagpur", position: "Member" },
  { srNo: 12, name: "Dr. Aatish Daryapurkar, Assistant Professor, IIIT Nagpur", position: "Member" },
  { srNo: 13, name: "Professor (Dr) Prem Lal Patel, Director, IIIT Nagpur", position: "Member" },
  { srNo: 14, name: "Shri Kailas N. Dakhale, Registrar, IIIT, Nagpur", position: "Member Secretary" },
];

const BoardTable: React.FC = () => {
  return (
    <div className="bg-orange-50 text-gray-800 min-h-screen flex items-center justify-center p-6">
      <div className="container mx-auto px-6 py-8 max-w-6xl bg-white shadow-xl rounded-lg p-8 border border-orange-200">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-orange-600">BOARD OF GOVERNORS</h1>
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
              {boardMembers.map((member, index) => (
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

export default BoardTable;