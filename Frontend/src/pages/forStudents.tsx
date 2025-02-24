import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaIdCard, FaFilePdf, FaCamera, FaUserGraduate } from "react-icons/fa";

// Define a TypeScript interface for document items
interface DocumentItem {
  title: string;
  details: string;
  icon: JSX.Element;
}

// Document checklist array with type safety
const documents: DocumentItem[] = [
  {
    title: "ID Proof",
    details: "Aadhaar Card (mandatory) / PAN Card / Driving License / Voter ID card",
    icon: <FaIdCard className="text-orange-600 text-xl" />,
  },
  {
    title: "Address Proof (Any One)",
    details: "Electricity bill / Bank Passbook / Aadhaar card / Rent agreement",
    icon: <FaFileAlt className="text-orange-600 text-xl" />,
  },
  {
    title: "Self-attested Mark Sheets",
    details: "10th, 12th, and all B.Tech semester marksheets. Also include Course & Internship certificates.",
    icon: <FaUserGraduate className="text-orange-600 text-xl" />,
  },
  {
    title: "Passport Size Photographs",
    details: "Recent Passport size Photos with white background – 10 copies",
    icon: <FaCamera className="text-orange-600 text-xl" />,
  },
  {
    title: "Updated CV",
    details: "Updated CV in prescribed format – 2 copies",
    icon: <FaFilePdf className="text-orange-600 text-xl" />,
  },
];

const links = [
  { text: "📄 CV Format", href: "#" },
  { text: "📑 Placement Policy", href: "#" },
  { text: "📜 Internship Instructions & Guidelines", href: "#" },
  { text: "📘 Semester Internship Evaluation", href: "#" },
];

const StudentGuidelines: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number): void => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-8 flex justify-center">
      <div className="max-w-4xl w-full bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-6">Guidelines for Students</h2>
        
        <p className="text-center text-gray-600 mb-6">Students must keep these documents ready for all internship & placement selection processes.</p>
        
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {doc.icon}
                  <h3 className="text-lg font-semibold">{doc.title}</h3>
                </div>
                <span className="text-orange-600 font-bold">{expandedIndex === index ? "▲" : "▼"}</span>
              </div>
              {expandedIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mt-2 ml-8"
                >
                  {doc.details}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="block bg-orange-100 p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 text-center text-orange-700 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.text}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentGuidelines;