import React from "react";
import { motion } from "framer-motion";

const AiforMh = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="text-center mt-6 mb-8">
          <h1 className="text-5xl font-bold" style={{ color: "#CE5923" }}>
            AI for Maharashtra
          </h1>
        </header>

        {/* IIITN Image */}
        <div className="flex justify-center mb-12">
          <img
            src="src/assets/IMG_5657.PNG"
            alt="IIITN Campus"
            className="w-[1000px] h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* AI Center of Excellence Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="mb-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto flex items-center gap-6 cursor-pointer transition-transform"
        >
          <img
            src="src/assets/IMG_5784.jpg"
            alt="AI Center of Excellence"
            className="w-1/3 h-60 object-cover rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#CE5923" }}>
              AI Center of Excellence (CoE)
            </h2>
            <p className="text-lg">
              In collaboration with the Maharashtra government and Google, IIITN
              is establishing a state-of-the-art AI Center of Excellence. This
              CoE aims to position Maharashtra as a leader in AI-driven
              innovation by focusing on sectors such as agriculture, healthcare,
              sustainability, education, and startups.
            </p>
          </div>
        </motion.section>

        {/* Generative AI Certification Program Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="mb-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto flex items-center gap-6 cursor-pointer transition-transform"
        >
          <img
            src="src/assets/IMG_1436.JPG"
            alt="Generative AI Certification"
            className="w-1/3 h-60 object-cover rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#CE5923" }}>
              Generative AI Certification Program
            </h2>
            <p className="text-lg">
              IIITN offers a five-month online certification program in
              Generative AI, designed for IT professionals, computer science
              graduates, researchers, and educators. The program provides
              hands-on training in advanced AI techniques and industry-relevant
              applications.
            </p>
          </div>
        </motion.section>

        {/* Collaborative Research and Development Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="mb-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto flex items-center gap-6 cursor-pointer transition-transform"
        >
          <img
            src="src/assets/IMG_5658.PNG"
            alt="Collaborative Research and Development"
            className="w-1/3 h-60 object-cover rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#CE5923" }}>
              Collaborative Research and Development
            </h2>
            <p className="text-lg">
              IIITN is involved in various collaborative projects aimed at
              leveraging AI for societal benefits, including road safety
              initiatives and smart city projects. The institute plays a key role
              in AI-driven research and innovation.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AiforMh;
