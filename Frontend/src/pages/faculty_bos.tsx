import React, { useState } from "react";
import Prasad_Joshi from "../assets/faculty/Prasad_Joshi.jpeg";

interface Faculty {
  id: number;
  name: string;
  photo: string;
  designation: string;
  education: string;
  experience: string;
  subjects: string;
  research: string;
  publication: string;
  supervision: string;
  responsibility: string;
  other: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const facultyMembers: Faculty[] = [
  {
    id: 1,
    name: "Dr.Prasad Joshi",
    photo: Prasad_Joshi,
    designation:"Head of Department",
    education: "Ph. D. Solid Mechanics NIT Raipur (2015)",
    experience:
      "2018 to till date – Assistant Professor IIIT Nagpur.",
    subjects:
      "1st /2nd  Sem CSE/ECE – Mechanics & Graphics (2018-19, 2019-20)",
    research: "Link to IRINS/Vidwan Research Profile",
    publication:
      "Analytical modeling and vibration analysis of internally cracked rectangular plates – Journal of Sound and Vibration, Elsevier, Authors Name: - P.V.Joshia, N.K.Jainb, G.D.Ramtekkarc Vol.333, Issue 22, (2014),pp.5851–5864.http://dx.doi.org/10.1016/j.jsv.2014.06.028 SCI JOURNAL",
    supervision: "M.E. / M. Tech  More than 15 Mtech Thesis",
    responsibility: "Working as a Institute Exam Controller, IIITN",
    other: "In-house Design & Fabrication of Coal Fired Open Hearth Furnace.",
    social: {
      linkedin: "https://linkedin.com/in/nishantnamdev",
      twitter: "https://twitter.com/nishantnamdev",
      github: "https://github.com/nishantnamdev",
    },
  },
  
  // Add 12 more faculty members here with similar structure
];

const FacultyPage: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  return (
    <div className="bg-orange-50 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-5xl font-extrabold text-orange-600 mb-8 text-center">Our Faculty</h1>
      {selectedFaculty ? (
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-orange-200 max-w-3xl w-full">
          <button
            onClick={() => setSelectedFaculty(null)}
            className="text-orange-600 font-bold text-lg mb-6 hover:underline"
          >
            ← Back
          </button>
          <div className="flex flex-col items-center">
            <img
              src={selectedFaculty.photo}
              alt={selectedFaculty.name}
              className="w-64 h-64 object-contain rounded-xl shadow-md mb-6 border border-gray-300"
            />
            <h2 className="text-3xl font-bold text-gray-800 text-center">{selectedFaculty.name}</h2>
            <p className="text-xl text-gray-600 text-center mb-4">{selectedFaculty.designation}</p>
            <div className="text-gray-700 text-left w-full space-y-2">
              <p><span className="font-bold">Education:</span> {selectedFaculty.education}</p>
              <p><span className="font-bold">Experience:</span> {selectedFaculty.experience}</p>
              <p><span className="font-bold">Subjects:</span> {selectedFaculty.subjects}</p>
              <p><span className="font-bold">Research:</span> {selectedFaculty.research}</p>
              <p><span className="font-bold">Publication:</span> {selectedFaculty.publication}</p>
              {selectedFaculty.supervision && <p><span className="font-bold">Supervision:</span> {selectedFaculty.supervision}</p>}
              {selectedFaculty.responsibility && <p><span className="font-bold">Responsibility:</span> {selectedFaculty.responsibility}</p>}
              {selectedFaculty.other && <p><span className="font-bold">Other:</span> {selectedFaculty.other}</p>}
            </div>
            <div className="flex space-x-4 mt-6">
              {selectedFaculty.social.linkedin && (
                <a href={selectedFaculty.social.linkedin} target="_blank" className="text-blue-600 font-bold hover:underline">
                  LinkedIn
                </a>
              )}
              {selectedFaculty.social.twitter && (
                <a href={selectedFaculty.social.twitter} target="_blank" className="text-blue-400 font-bold hover:underline">
                  Twitter
                </a>
              )}
              {selectedFaculty.social.github && (
                <a href={selectedFaculty.social.github} target="_blank" className="text-gray-800 font-bold hover:underline">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold text-orange-700 mb-6">Head of Department</h2>
          <div className="flex justify-center mb-10">
            {facultyMembers.filter(faculty => faculty.id === 1).map((faculty) => (
              <div
                key={faculty.id}
                className="bg-white p-8 rounded-lg shadow-lg border border-orange-200 cursor-pointer hover:shadow-2xl transition flex flex-col items-center w-96"
                onClick={() => setSelectedFaculty(faculty)}
              >
                <img
                  src={faculty.photo}
                  alt={faculty.name}
                  className="w-48 h-48 object-contain rounded-xl mb-4 border border-gray-300"
                />
                <h2 className="text-xl font-bold text-gray-800 text-center">{faculty.name}</h2>
                <p className="text-gray-600 text-center">{faculty.designation}</p>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold text-orange-700 mb-6">Faculty Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.filter(faculty => faculty.id !== 1).map((faculty) => (
              <div
                key={faculty.id}
                className="bg-white p-8 rounded-lg shadow-lg border border-orange-200 cursor-pointer hover:shadow-2xl transition flex flex-col items-center"
                onClick={() => setSelectedFaculty(faculty)}
              >
                <img
                  src={faculty.photo}
                  alt={faculty.name}
                  className="w-48 h-48 object-contain rounded-xl mb-4 border border-gray-300"
                />
                <h2 className="text-xl font-bold text-gray-800 text-center">{faculty.name}</h2>
                <p className="text-gray-600 text-center">{faculty.designation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyPage;
