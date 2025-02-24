import React from "react";

const About_ECE: React.FC = () => {
    return (
        <div className="bg-gray-100 pt-10">
            {/* Header */}
            <header className="bg-orange-600 text-white py-4 px-6 flex justify-center items-center w-full top-0 z-50 shadow-md">
                <h1 className="text-center text-3xl font-bold">IIIT Nagpur - ECE Department</h1>

            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto py-28 px-6">
                <section id="about" className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">About Department</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The Department of Electronics & Communication Engineering (ECE) was established in 2016 and is currently headed by Dr. Harsh Goud. The department offers two undergraduate programs:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mt-4">
                        <li>B.Tech in Electronics & Communication Engineering</li>
                        <li>B.Tech in Electronics & Communication Engineering with a specialization in Internet of Things (IoT)</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Additionally, the department offers a Ph.D. program in various streams of ECE, with 32 research scholars currently enrolled. It is dedicated to innovation and interdisciplinary research, specializing in areas such as signal processing, embedded systems, antenna design, and VLSI design.
                    </p>
                </section>

                <section id="research" className="bg-white p-6 mt-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Research & Achievements</h2>
                    <p className="text-gray-700">
                        The department has extensive research contributions, including:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mt-4">
                        <li>7 patents filed by faculty</li>
                        <li>120+ research papers published in journals</li>
                        <li>55+ conference publications</li>
                        <li>13+ book chapters of international repute</li>
                        <li>Projects with total funding of over ₹1.5 Cr</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        The department also engages in industry collaboration, consultancy, and training programs while regularly organizing AICTE-sponsored workshops, FDPs, STTPs, and expert lectures.
                    </p>
                </section>

                <section id="btech-ece" className="bg-white p-6 mt-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">B.Tech. in Electronics & Communication Engineering</h2>
                    <p className="text-gray-700">
                        The ECE department offers a well-rounded curriculum covering Embedded Systems, IoT, Communication Technologies, Machine Learning, and more. It ensures industry relevance by frequently updating its syllabus and providing hands-on learning through labs and mini-projects.
                    </p>
                    <p className="text-gray-700 mt-4">
                        The program includes advanced experimental labs, high-end computational facilities, and interdisciplinary courses that overlap with CSE. Currently, **over 480 students** are enrolled in this program.
                    </p>
                    <h3 className="text-xl font-semibold text-orange-600 mt-4">Key Career Areas:</h3>
                    <ul className="list-disc pl-5 text-gray-700 mt-2">
                        <li>Wireless Communication & Sensor Networks</li>
                        <li>Image & Video Processing</li>
                        <li>Biomedical Signal Processing</li>
                        <li>IoT and Artificial Intelligence</li>
                        <li>Computer Vision</li>
                        <li>Antenna & VLSI Design</li>
                        <li>Embedded System Design</li>
                    </ul>
                </section>

                <section id="btech-iot" className="bg-white p-6 mt-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">B.Tech. in ECE (Internet of Things)</h2>
                    <p className="text-gray-700">
                        IoT is a rapidly growing field that connects smart devices across industries. The ECE IoT specialization equips students with expertise in:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mt-4">
                        <li>Wireless communication & networks</li>
                        <li>Sensors & instrumentation</li>
                        <li>Chip design</li>
                        <li>Privacy & security of IoT systems</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        The program ensures hands-on learning and a strong theoretical foundation. Currently, **over 645 students** are enrolled in this specialization.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default About_ECE;
