import React, { useState } from "react";
import Prasad_Joshi from "../assets/faculty/Prasad_Joshi.jpeg";
import Charu_Goel from "../assets/faculty/charu_goel.jpeg";
import Aatish_daryapurkar from "../assets/faculty/aatish_daryapurkar.jpeg";
import chandrasekhar from "../assets/faculty/chandra.jpeg";
import nishant from "../assets/faculty/Nishant_Namdev.jpeg";
import anup from "../assets/faculty/anup.jpeg";
import madhri from "../assets/faculty/madhuri.jpeg";
import shailesh from "../assets/faculty/janbandhu.jpeg";
import vikrant from "../assets/faculty/vikrant.png";
import ujwal from "../assets/faculty/ujwal.jpg";
import preeti from "../assets/faculty/preeti.jpeg";
import naresh from "../assets/faculty/naresh.jpeg";
import kirti from "../assets/faculty/kirti.jpeg";
import kamaljeet from "../assets/faculty/kamaljeet.jpeg";


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
    name: "DR. PRASAD V. JOSHI",
    photo: Prasad_Joshi,
    designation:"Assistant Professor & HOD",
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
  {
    id: 2,
    name: "DR.CHARU GOEL",
    photo: Charu_Goel,
    designation: "Assistant Professor",
    education: "Ph.D. in Artificial Intelligence, IIT Bombay",
    experience: "2015 to till date – Associate Professor, IIIT Nagpur.",
    subjects: "Machine Learning, Deep Learning, Data Science",
    research: "AI-driven Predictive Analytics",
    publication: "Published in IEEE Transactions on Neural Networks",
    supervision: "Guided 10+ PhD students",
    responsibility: "Head of Research & Innovation",
    other: "Conducted 20+ AI workshops",
    social: {
      linkedin: "https://linkedin.com/in/rajeshsharma",
      twitter: "https://twitter.com/rajeshsharma",
      github: "https://github.com/rajeshsharma",
    },
  },
  {
    id: 3,
    name: "DR.AATISH S.DARYAPURKAR",
    photo: Aatish_daryapurkar,
    designation: "Assistant Professor",
    education: "Ph.D. in Cybersecurity, IISc Bangalore",
    experience: "2017 to till date – Assistant Professor, IIIT Nagpur.",
    subjects: "Cybersecurity, Cryptography",
    research: "Blockchain Security",
    publication: "Published in ACM Transactions on Information Systems",
    supervision: "Mentored multiple cybersecurity projects",
    responsibility: "Women in Tech Initiative Coordinator",
    other: "Organized national-level cybersecurity hackathons",
    social: {
      linkedin: "https://linkedin.com/in/anjaliverma",
      twitter: "https://twitter.com/anjaliverma",
      github: "https://github.com/anjaliverma",
    },
  },
  {
    id: 4,
    name: "Dr.CHANDRASHEKHAR SAKODE",
    photo: chandrasekhar,
    designation: "Assistant Professor",
    education: "Ph.D. in Data Science, IIT Madras",
    experience: "2010 to till date – Professor, IIIT Nagpur.",
    subjects: "Big Data Analytics, Cloud Computing",
    research: "Scalable Distributed Systems",
    publication: "Authored 3 books on Big Data & Cloud Computing",
    supervision: "15+ PhD students supervised",
    responsibility: "Placement Coordinator",
    other: "Industry collaborations with top IT firms",
    social: {
      linkedin: "https://linkedin.com/in/sureshpatil",
      twitter: "https://twitter.com/sureshpatil",
      github: "https://github.com/sureshpatil",
    },
  },
  {
    id: 5,
    name: "DR.KIRTI S.DORSHETWAR",
    photo: kirti,
    designation: "Assistant Professor",
    education: "Ph.D. in Computer Vision, IIIT Hyderabad",
    experience: "2016 to till date – Assistant Professor, IIIT Nagpur.",
    subjects: "Computer Vision, Image Processing",
    research: "AI for Healthcare Imaging",
    publication: "Published in CVPR, IEEE",
    supervision: "Multiple MSc thesis supervised",
    responsibility: "Head of AI & Robotics Club",
    other: "Developed AI models for medical diagnosis",
    social: {
      linkedin: "https://linkedin.com/in/kavitadesh",
      twitter: "https://twitter.com/kavitadesh",
      github: "https://github.com/kavitadesh",
    },
  },
  {
    id: 6,
    name: "DR.KAMALJEET",
    photo: kamaljeet,
    designation: "Assistant Professor",
    education: "Ph.D. in Computer Vision, IIIT Hyderabad",
    experience: "2016 to till date – Assistant Professor, IIIT Nagpur.",
    subjects: "Computer Vision, Image Processing",
    research: "AI for Healthcare Imaging",
    publication: "Published in CVPR, IEEE",
    supervision: "Multiple MSc thesis supervised",
    responsibility: "Head of AI & Robotics Club",
    other: "Developed AI models for medical diagnosis",
    social: {
      linkedin: "https://linkedin.com/in/kavitadesh",
      twitter: "https://twitter.com/kavitadesh",
      github: "https://github.com/kavitadesh",
    },
  },
  {
    id: 7,
    name: "DR.UJWAL SURESHRAO WARBHE",
    photo: ujwal,
    designation: "Assistant Professor",
    education: "Ph.D. in Cloud Computing, NIT Surat",
    experience: "2014 to till date – Assistant Professor, IIIT Nagpur.",
    subjects: "Cloud Computing, Distributed Systems",
    research: "Edge Computing, Serverless Architecture",
    publication: "Published in IEEE Cloud Computing",
    supervision: "Supervised 10+ M.Tech students",
    responsibility: "Coordinator - TechFest",
    other: "Developed cloud-based student management system",
    social: {
      linkedin: "https://linkedin.com/in/manojkulkarni",
      twitter: "https://twitter.com/manojkulkarni",
      github: "https://github.com/manojkulkarni",
    },
  },
  {
    id: 8,
    name: "DR.NARESH NEDUNURI",
    photo: naresh,
    designation: "Adjunct Assistant Professor",
    education: "Ph.D. in NLP, IIT Kanpur",
    experience: "2018 to till date – Assistant Professor, IIIT Nagpur.",
    subjects: "Natural Language Processing, AI Ethics",
    research: "Conversational AI, Bias in AI",
    publication: "Published in ACL, NeurIPS",
    supervision: "Guided multiple NLP projects",
    responsibility: "AI Ethics Committee Member",
    other: "Worked with Google AI Research Team",
    social: {
      linkedin: "https://linkedin.com/in/snehanair",
      twitter: "https://twitter.com/snehanair",
      github: "https://github.com/snehanair",
    },
  },
  {
    id: 9,
    name: "DR.MADHURI TAYADE",
    photo: madhri,
    designation: "Adjunct Assistant Professor",
    education: "Ph.D. in Computer Vision, IIIT Hyderabad",
    experience: "2016 to till date – Assistant Professor, IIIT Nagpur.",
    subjects: "Computer Vision, Image Processing",
    research: "AI for Healthcare Imaging",
    publication: "Published in CVPR, IEEE",
    supervision: "Multiple MSc thesis supervised",
    responsibility: "Head of AI & Robotics Club",
    other: "Developed AI models for medical diagnosis",
    social: {
      linkedin: "https://linkedin.com/in/kavitadesh",
      twitter: "https://twitter.com/kavitadesh",
      github: "https://github.com/kavitadesh",
    },
  },
  {
    id: 10,
    name: "DR.ANUP KUMAR RAJAK",
    photo: anup,
    designation: "Adjunct Assistant Professor",
    education: "Ph.D. in Cloud Computing, NIT Surat",
    experience: "2014 to till date – Assistant Professor, IIIT Nagpur.",
    subjects: "Cloud Computing, Distributed Systems",
    research: "Edge Computing, Serverless Architecture",
    publication: "Published in IEEE Cloud Computing",
    supervision: "Supervised 10+ M.Tech students",
    responsibility: "Coordinator - TechFest",
    other: "Developed cloud-based student management system",
    social: {
      linkedin: "https://linkedin.com/in/manojkulkarni",
      twitter: "https://twitter.com/manojkulkarni",
      github: "https://github.com/manojkulkarni",
    },
  },
  {
    id: 11,
    name: "DR.NISHANT NAMDEV",
    photo: nishant,
    designation: "Adjunct Assistant Professor",
    education: "Ph.D. in NLP, IIT Kanpur",
    experience: "2018 to till date – Assistant Professor, IIIT Nagpur.",
    subjects: "Natural Language Processing, AI Ethics",
    research: "Conversational AI, Bias in AI",
    publication: "Published in ACL, NeurIPS",
    supervision: "Guided multiple NLP projects",
    responsibility: "AI Ethics Committee Member",
    other: "Worked with Google AI Research Team",
    social: {
      linkedin: "https://linkedin.com/in/snehanair",
      twitter: "https://twitter.com/snehanair",
      github: "https://github.com/snehanair",
    },
  },
  {
    id: 12,
    name: "MR.VIKRANT DHENGE",
    photo: vikrant,
    designation: "Adjunct Assistant Professor",
    education: "Ph.D. in Computer Vision, IIIT Hyderabad",
    experience: "2016 to till date – Assistant Professor, IIIT Nagpur.",
    subjects: "Computer Vision, Image Processing",
    research: "AI for Healthcare Imaging",
    publication: "Published in CVPR, IEEE",
    supervision: "Multiple MSc thesis supervised",
    responsibility: "Head of AI & Robotics Club",
    other: "Developed AI models for medical diagnosis",
    social: {
      linkedin: "https://linkedin.com/in/kavitadesh",
      twitter: "https://twitter.com/kavitadesh",
      github: "https://github.com/kavitadesh",
    },
  },
  {
    id: 13,
    name: "DR.PREETI",
    photo: preeti,
    designation: "Adjunct Assistant Professor",
    education: "Ph.D. in Cloud Computing, NIT Surat",
    experience: "2014 to till date – Assistant Professor, IIIT Nagpur.",
    subjects: "Cloud Computing, Distributed Systems",
    research: "Edge Computing, Serverless Architecture",
    publication: "Published in IEEE Cloud Computing",
    supervision: "Supervised 10+ M.Tech students",
    responsibility: "Coordinator - TechFest",
    other: "Developed cloud-based student management system",
    social: {
      linkedin: "https://linkedin.com/in/manojkulkarni",
      twitter: "https://twitter.com/manojkulkarni",
      github: "https://github.com/manojkulkarni",
    },
  },
  {
    id: 14,
    name: "DR.SHAILESHKUMAR JANBANDHU",
    photo: shailesh,
    designation: "Adjunct Assistant Professor",
    education: "Ph.D. in Cloud Computing, NIT Surat",
    experience: "2014 to till date – Assistant Professor, IIIT Nagpur.",
    subjects: "Cloud Computing, Distributed Systems",
    research: "Edge Computing, Serverless Architecture",
    publication: "Published in IEEE Cloud Computing",
    supervision: "Supervised 10+ M.Tech students",
    responsibility: "Coordinator - TechFest",
    other: "Developed cloud-based student management system",
    social: {
      linkedin: "https://linkedin.com/in/manojkulkarni",
      twitter: "https://twitter.com/manojkulkarni",
      github: "https://github.com/manojkulkarni",
    },
  }

];

const FacultyPage: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  return (
    <div className="bg-orange-50 min-h-screen flex flex-col items-start p-8">
      <h1 className="text-5xl font-extrabold text-orange-600 mb-4 text-left">Our Faculty</h1>

      {/* MODAL FOR SELECTED FACULTY */}
      {selectedFaculty && (
        <div
          className="fixed inset-0 flex items-start justify-center bg-black/50 p-4 z-50 overflow-y-auto"
          onClick={() => setSelectedFaculty(null)} // Close when clicking outside
        >
          <div
            className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl w-full mt-20 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              onClick={() => setSelectedFaculty(null)}
              className="absolute top-4 right-4 text-orange-600 font-bold text-lg hover:underline"
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedFaculty.photo}
                alt={selectedFaculty.name}
                className="w-48 h-48 object-contain rounded-xl shadow-md mb-6"
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
            </div>
          </div>
        </div>
      )}

      {/* FACULTY LIST */}
      <div className="w-full">
        <h2 className="text-3xl font-bold text-orange-700 mb-4 text-left">Head of Department</h2>
        <div className="flex justify-start mb-4">
          {facultyMembers.filter(faculty => faculty.id === 1).map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center w-72"
              onClick={() => setSelectedFaculty(faculty)}
            >
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="w-40 h-40 object-contain rounded-xl mb-2"
              />
              <h2 className="text-lg font-bold text-gray-800 text-center">{faculty.name}</h2>
              <p className="text-gray-600 text-center">{faculty.designation}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-orange-700 mb-4 text-left">Faculty Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-2 justify-start">
          {facultyMembers.filter(faculty => faculty.id !== 1).map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center w-72"
              onClick={() => setSelectedFaculty(faculty)}
            >
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="w-40 h-40 object-contain rounded-xl mb-2"
              />
              <h2 className="text-lg font-bold text-gray-800 text-center">{faculty.name}</h2>
              <p className="text-gray-600 text-center">{faculty.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
