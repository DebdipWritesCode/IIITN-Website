import React from "react";

const labs = [
  "Databases & Data Cluster Lab",
  "Project Lab",
  "Programming & Data Structure Lab",
  "Computer Networking Lab",
  "Distributed & Cloud Computing Lab",
  "Artificial Intelligence & Machine Learning Lab",
  "Data Science & Big Data Lab",
  "High Performance Computing & Bioinformatics Lab",
  "Computer Programming Lab",
  "Algorithm Design Lab",
  "Operating Systems Lab",
];

const softwareList = [
  "Microsoft Visual Studio Code 1.75",
  "WPS Office (12.2.0.13431)",
  "WinRAR 6.10",
  "Code Blocks 20.03",
  "Oracle VM Virtual Box 7.0.10",
  "Python 3.10.8 (64Bit)",
  "Java 8.0.2",
  "Packet Racer",
  "Anaconda 3 2022.10 (python3.9.13 64Bit)",
  "Android Studio 2023.2",
  "Dev C++ 5.0 (4.9.9.2)",
  "MySQL Workbench 8.0",
];

const hardwareList = [
  "Machines: 283, 32 GB RAM, i7 Processor",
  "Machines: 137, GPU machines Nvidia RTX 4000, 4 GB",
];

const Laboratory = () => {
  return (
    <div className="pt-24 px-10 font-montserrat mb-16">
      <h1 className="text-5xl font-semibold pb-6 text-center text-orange-800 hover:text-blue-900 transition-colors duration-300">
        Laboratory
      </h1>
      <p className="text-center text-lg text-gray-600 mb-6 hover:text-gray-700 transition-colors duration-300">
        Indian Institute of Information Technology, Nagpur offers an outstanding Computer Lab, which provides students access to computer – software for both Academics and Research.
      </p>
      <p className="text-center text-lg text-gray-600 mb-6 hover:text-gray-700 transition-colors duration-300">
        In the institute, a more than 420 Desktop are placed which is divided into different Labs. These desktops in the labs, run on a 150 KVA UPS plus DG supply that is available 24x7. All the desktops in the computer labs are connected with a 1024 Mbps Wireless network and the Internet and also have a backup connection running in failover mode. The Computer Lab is equipped with modern and automated equipment in an air-conditioned environment. Additionally, students will be provided access to a Campus-Network, which can be accessed from the Computer Lab or from personal Laptops, Tablets, and Mobiles.
      </p>

      {/* Laboratory Names Section */}
      <div className="mb-12 p-6 bg-blue-50 rounded-2xl shadow-md border border-blue-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4 text-center hover:text-blue-900 transition-colors duration-300">
          Laboratory Names
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {labs.map((lab, idx) => (
            <li key={idx} className="hover:text-gray-800 transition-colors duration-300">
              {lab}
            </li>
          ))}
        </ul>
      </div>

      {/* Software Section */}
      <div className="mb-12 p-6 bg-blue-50 rounded-2xl shadow-md border border-blue-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4 text-center hover:text-blue-900 transition-colors duration-300">
          Software
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {softwareList.map((soft, idx) => (
            <li key={idx} className="hover:text-gray-800 transition-colors duration-300">
              {soft}
            </li>
          ))}
        </ul>
      </div>

      {/* Hardware Section */}
      <div className="mb-12 p-6 bg-blue-50 rounded-2xl shadow-md border border-blue-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4 text-center hover:text-blue-900 transition-colors duration-300">
          Hardware
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {hardwareList.map((hardware, idx) => (
            <li key={idx} className="hover:text-gray-800 transition-colors duration-300">
              {hardware}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Laboratory;
  