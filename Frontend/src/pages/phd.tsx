import React from "react";

const PhDPrograms = () => {
  const programs = [
    {
      department: "Computer Science & Engineering",
      researchAreas:
        "Deep Learning, Machine Learning, Data Science, Parallel Computing, Information Security, IoT, Artificial Intelligence, Computer Networks, Wireless Sensor Networks."
    },
    {
      department: "Electronics & Communication Engineering",
      researchAreas:
        "Image Processing, Signal Processing, Wireless Sensor Networks, Biomedical Applications, IoT, Microwave and Antennas, Communication, Embedded Systems, Object Tracking, Optimal Control and Optimization, Analytical Modeling."
    }
  ];

  const coordinators = [
    {
      department: "CSE Department",
      name: "Dr. Mayuri Digalwar",
      position: "Assistant Professor, CSE, IIIT Nagpur",
      email: "mayuri@iiitn.ac.in"
    },
    {
      department: "ECE Department",
      name: "Dr. Rashmi Pandhare",
      position: "Assistant Professor, ECE, IIIT Nagpur",
      email: "rpandhare@iiitn.ac.in"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 lg:px-20">
      <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-10">Ph.D. Programs</h1>
      {programs.map((program, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-bold text-orange-700 mb-4">{program.department}</h2>
          <p className="text-gray-700 text-lg">{program.researchAreas}</p>
        </div>
      ))}

      <h2 className="text-3xl font-bold text-orange-700 mt-10 mb-6">Ph.D. Coordinators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coordinators.map((coordinator, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-orange-200 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-gray-800">{coordinator.department}</h3>
            <p className="text-gray-700">{coordinator.name}</p>
            <p className="text-gray-500">{coordinator.position}</p>
            <p className="text-orange-500">{coordinator.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhDPrograms;
