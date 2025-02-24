import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import tnp1 from "../assets/tnp/paritosh.jpeg";
import tnp2 from "../assets/tnp/meera.jpeg";
import tnp3 from "../assets/tnp/mahesh.jpg";

const facultyData = [
  {
    name: "Dr. Paritosh Peshwe",
    role: "Faculty Co-ordinator Training & Placement",
    phone: "9975104323",
    email: "paritoshpeshwe@iiitn.ac.in",
    image: tnp1,
  },
  {
    name: "Dr. Meera Jagdale",
    role: "Training & Placement Officer",
    phone: "+91 9764490050",
    email: "tnp@iiitn.ac.in",
    image: tnp2,
  },
  {
    name: "Dr. Mahesh Shukla",
    role: "Officer (Training & Placement)",
    phone: "+91 9890070945",
    email: "otp@iiitn.ac.in",
    image: tnp3,
  },
];

const TnPCell = () => {
  return (
    <div className="min-h-screen bg-orange p-6 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-8">Training & Placement Cell</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {facultyData.map((faculty, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-orange-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex flex-col items-center">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-48 h-48 object-contain rounded-full border-4 border-orange-500 mb-4"
                />
                <h3 className="text-2xl font-semibold text-center text-gray-800">{faculty.name}</h3>
                <p className="text-center text-gray-600 text-lg">{faculty.role}</p>
                <div className="flex gap-4 mt-4">
                  <a href={`tel:${faculty.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
                    <FaPhoneAlt className="text-orange-600" /> {faculty.phone}
                  </a>
                </div>
                <div className="flex gap-4 mt-2">
                  <a href={`mailto:${faculty.email}`} className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition">
                    <FaEnvelope className="text-orange-600" /> {faculty.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TnPCell;
