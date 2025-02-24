import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaBookOpen, FaFlask, FaIndustry, FaUniversity } from "react-icons/fa";

interface Highlight {
  title: string;
  description: string;
  details: string;
  icon: JSX.Element;
}

const highlights: Highlight[] = [
  {
    title: "Exclusive Admissions",
    description:
      "IIIT Nagpur admits only the top 2% of JEE Mains candidates, ensuring a high-caliber student body.",
    details:
      "IIIT Nagpur is an Institution of National Importance established by the Ministry of Education, Govt. of Maharashtra, and industry partners. Admissions are conducted through JoSAA, making it one of the most competitive institutes for engineering aspirants.",
    icon: <FaUniversity className="text-orange-600 text-3xl" />, 
  },
  {
    title: "Strong Industry Collaboration",
    description:
      "IIIT Nagpur collaborates with top companies like TCS and ESIEE Paris for industry exposure and internships.",
    details:
      "With strategic tie-ups with Tata Consultancy Services (TCS) and ESIEE Paris, students benefit from hands-on industry exposure, internships, and exchange programs. This ensures they graduate with practical experience and global insights.",
    icon: <FaIndustry className="text-orange-600 text-3xl" />,
  },
  {
    title: "Dynamic Curriculum",
    description:
      "Industry-relevant curriculum with core subjects from the first semester and certification options.",
    details:
      "IIIT Nagpur follows a dynamic, industry-focused curriculum designed by experts from IT industries. The Choice-Based Credit System allows students to customize their learning paths, including Coursera, Udacity, and Google Certifications.",
    icon: <FaBookOpen className="text-orange-600 text-3xl" />,
  },
  {
    title: "Cutting-Edge Research",
    description:
      "IIITN focuses on AI, IoT, Wireless Networks, and more, enabling companies to hire highly skilled professionals.",
    details:
      "The institute has a strong research environment across various domains such as Deep Learning, IoT, High-Performance Computing, and Bioinformatics. Collaboration with industries allows professionals to pursue research in real-world problems.",
    icon: <FaFlask className="text-orange-600 text-3xl" />,
  },
  {
    title: "Institution of National Importance",
    description:
      "IIIT Nagpur, established by MHRD, is a premier institute producing top-tier tech talent.",
    details:
      "Recognized as an Institution of National Importance by an Act of Parliament, IIIT Nagpur is backed by government and industry partnerships, ensuring state-of-the-art facilities, an advanced curriculum, and a strong placement network.",
    icon: <FaBuilding className="text-orange-600 text-3xl" />,
  },
];

const WhyRecruitIIITN: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-8 flex justify-center">
      <div className="max-w-5xl w-full bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-6">
          Why Recruit from IIIT Nagpur?
        </h2>

        <p className="text-center text-gray-600 mb-6">
          IIIT Nagpur produces industry-ready graduates with strong technical and problem-solving skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition transform hover:scale-105"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600 mt-2 ml-8">{item.description}</p>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-700 mt-2 ml-8 text-sm border-t pt-2"
                >
                  {item.details}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyRecruitIIITN;
