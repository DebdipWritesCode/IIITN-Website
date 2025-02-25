import React, { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Indian Institute of Information Technology, Nagpur",
    content: "Established in 2016, IIIT Nagpur is an institute of national importance under the PPP model, dedicated to advancing education and research in Information Technology and allied fields.",
    expandedContent: "IIIT Nagpur collaborates with industry leaders to provide hands-on learning experiences and has partnerships with research institutions worldwide. The institute is committed to fostering a culture of innovation and excellence."
  },
  {
    title: "Academic Programs",
    content: "IIITN offers B.Tech programs in Computer Science and Engineering (CSE) and Electronics and Communication Engineering (ECE), with specializations in AI/ML, Data Science, IoT, and more.",
    expandedContent: "Future plans include the introduction of M.Tech and Ph.D. programs. The curriculum is designed to keep pace with emerging trends in technology and industry demands."
  },
  {
    title: "Campus Facilities",
    content: "Spanning 100 acres, the IIITN campus offers modern hostels, sports facilities, dining options, and research labs to support student life and learning.",
    expandedContent: "The campus includes fully equipped computer labs, a library with a vast collection of resources, and innovation hubs that support student-led projects and startups."
  },
  {
    title: "Vision and Mission",
    content: "IIITN aspires to be a premier institution in IT & allied fields, fostering innovation, entrepreneurship, and globally relevant research.",
    expandedContent: "The mission is to develop competent professionals with strong ethical values and a commitment to technological advancement. The institute aims to bridge the gap between academia and industry by promoting research-driven education."
  }
];

const AAbout = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mt-6 mb-8">
          <h1 className="text-5xl font-bold" style={{ color: "#CE5923" }}>
            About Us
          </h1>
        </header>

        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => toggleExpand(index)}
            className="mb-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto cursor-pointer transition-transform"
          >
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#CE5923" }}>
              {section.title}
            </h2>
            <p className="text-lg">{section.content}</p>
            {expandedIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-gray-700"
              >
                {section.expandedContent}
              </motion.div>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default AAbout;
