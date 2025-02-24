import React from "react";

const scholarships = [
  { state: "Maharashtra", name: "Government of India Post-Matric Scholarship", department: "Social Justice and Special Assistance", link: "#" },
  { state: "Maharashtra", name: "Post-Matric Tuition Fee and Examination Fee (Freeship)", department: "Social Justice and Special Assistance", link: "#" },
  { state: "Maharashtra", name: "Post Matric Scholarship Scheme (Government Of India)", department: "Tribal Development Department", link: "#" },
  { state: "Maharashtra", name: "Tuition Fee & Exam Fee for Tribal Students (Freeship)", department: "Tribal Development Department", link: "#" },
  { state: "Maharashtra", name: "Post Matric Scholarship to VJNT Students", department: "VJNT, OBC and SBC Welfare Department", link: "#" },
  { state: "Madhya Pradesh", name: "Mukhya Mantri Medhavi Vidyarthi Yojana - MMVY", department: "Technical Education & Skill Development", link: "#" },
  { state: "Uttar Pradesh", name: "Post matric Other State Scholarship for General Category", department: "Social Welfare Department", link: "#" },
  { state: "Rajasthan", name: "Dr. Ambedkar Post Matric Scholarship for EBC Students", department: "Social Justice and Empowerment Department", link: "#" },
  { state: "Telangana", name: "Post-Matric (Outside State) Scholarship for ST/ SC/ BC/EBC/Disabled", department: "Government of Telangana", link: "#" },
  { state: "Andhra Pradesh", name: "Post-Matric (Outside State) Scholarship for ST/ SC", department: "Government of Andhra Pradesh", link: "#" },
  { state: "National", name: "Post Matric Scholarships Scheme for Minorities", department: "Ministry of Minority Affairs", link: "#" },
  { state: "National", name: "Merit Cum Means Scholarship For Professional and Technical Courses", department: "Ministry of Minority Affairs", link: "#" },
  { state: "National", name: "Post-matric Scholarship for Students with Disabilities", department: "Department of Empowerment of Persons with Disabilities", link: "#" },
  { state: "National", name: "Top Class Education Scheme for SC Students", department: "Ministry of Social Justice and Empowerment", link: "#" },
  { state: "National", name: "Central Sector Scheme Of Scholarships for Colleges and University Students", department: "Department of Higher Education", link: "#" },
  { state: "National", name: "Prime Minister's Scholarship Scheme For Central Armed Police Forces And Assam Rifles", department: "Ministry of Tribal Affairs", link: "#" },
  { state: "National", name: "National Fellowship and Scholarship for Higher Education of ST Students", department: "Ministry of Tribal Affairs", link: "#" },
  { state: "National", name: "PM Scholarship Scheme For Wards of States/UTs Police personnel Martyrdom during Terror/NAXAL Attacks", department: "WARB Ministry of Home Affairs", link: "#" },
  { state: "National", name: "Prime Minister's Scholarship Scheme For RPF/RPSF", department: "Ministry of Railway", link: "#" }
];

const Scholarships: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-orange-600 text-white py-14 text-center shadow-md">
        <h1 className="text-5xl font-extrabold">🎓 Scholarships</h1>
        <p className="mt-2 text-lg font-medium">Find financial aid opportunities available for students.</p>
      </header>

      {/* Notices */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-orange-700">Notices</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 mt-4">
          <li><a href="#" className="text-black-500">National Overseas Scholarship Scheme (Hindi Version)</a></li>
          <li><a href="#" className="text-black-500">National Overseas Scholarship Scheme (English Version)</a></li>
          <li><a href="#" className="text-black-500">Instruction Manual for NOS Schemes</a></li>
        </ul>
      </section>

      {/* Scholarships Table */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-orange-700 text-center mb-6">State-wise Scholarships</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-orange-600 text-white text-left">
                <th className="p-4">State</th>
                <th className="p-4">Scholarship Name</th>
                <th className="p-4">Department</th>
                <th className="p-4">Website</th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((scholarship, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-4">{scholarship.state}</td>
                  <td className="p-4 font-semibold">{scholarship.name}</td>
                  <td className="p-4">{scholarship.department}</td>
                  <td className="p-4">
                    <a href={scholarship.link} className="text-blue-500 underline">Apply Here</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-orange-600 text-white mt-10 shadow-md">
        <p className="text-lg font-medium">© {new Date().getFullYear()} IIIT Nagpur | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Scholarships;
