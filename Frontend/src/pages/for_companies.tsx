import React from "react";
import { motion } from "framer-motion";

const links = [
  { text: "📩 Invitation for Campus Placements", href: "#" },
  { text: "📑 Placement Policy", href: "#" },
  { text: "📘 Placement Brochure", href: "#" },
  { text: "📜 Guidelines for Companies", href: "#" },
  { text: "📝 Job Announcement Form", href: "#" },
];

const CompanyGuidelines: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-8 flex justify-center">
      <div className="max-w-4xl w-full bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-6">Guidelines for Companies</h2>
        
        <p className="text-center text-gray-600 mb-6">Companies can refer to the following documents for recruitment and placement processes.</p>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="block bg-orange-100 p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 text-center text-black-700 font-semibold"
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

export default CompanyGuidelines;
