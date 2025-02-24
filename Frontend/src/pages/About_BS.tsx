import React from "react";

const About_BasicScience: React.FC = () => {
    return (
        <div className="bg-gray-100 pt-10">
            {/* Header */}
            <header className="bg-orange-600 text-white py-4 px-6 flex justify-center items-center w-full top-0 z-50 shadow-md">
                <h1 className="text-center text-3xl font-bold">IIIT Nagpur - Basic Sciences Department</h1>

            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto py-28 px-6">
                <section id="about" className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">About Department</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The Department of Basic Sciences at Indian Institute of Information Technology Nagpur was established in 2016 and is currently headed by Dr. Prasad V. Joshi. It integrates multiple disciplines, including Mathematics, Applied Sciences, Humanities, Social Sciences, Mechanical Engineering, and Electrical Engineering.
                    </p>
                    <p className="text-gray-700 mt-4">
                        This department provides a strong foundation for all core Information Technology branches, offering essential courses such as Applied Sciences, Applied Mathematics, Communication Skills, Environmental Studies, Mechanics and Graphics, and Electrical Engineering.
                    </p>
                </section>

                <section id="education" className="bg-white p-6 mt-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Education & Curriculum</h2>
                    <p className="text-gray-700">
                        The department supports IT disciplines by offering specialized electives like Robotics, Technical Communication, Professional Ethics, Policy Governance, and Neuro-fuzzy techniques. Its 15 distinguished faculty members specialize in interdisciplinary research aligned with NEP 2020.
                    </p>
                    <p className="text-gray-700 mt-4">
                        The curriculum blends contemporary Basic Sciences and Engineering, ensuring students are well-versed in human values, applied science, and technology. The department integrates software tools such as MATLAB, AutoCAD, and 3Ds Max, enhancing applied learning.
                    </p>
                </section>

                <section id="labs" className="bg-white p-6 mt-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Laboratories & Research</h2>
                    <p className="text-gray-700">
                        The department offers hands-on learning through five well-equipped laboratories:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mt-4">
                        <li>Applied Sciences Lab</li>
                        <li>Mechanics & Graphics Lab</li>
                        <li>Robotics Lab</li>
                        <li>Language Lab</li>
                        <li>Electrical Engineering Lab</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Programming applications in C/C++ are embedded within Mathematics, Graphics, and other subjects. Additionally, Modeling and Simulation tools like Webots, Robot Operating System, and RVC Toolbox enrich the curriculum for Electronics and Computer Science students.
                    </p>
                </section>

                <section id="faculty" className="bg-white p-6 mt-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Faculty & Excellence</h2>
                    <p className="text-gray-700">
                        The department boasts a team of highly qualified faculty members, all holding Ph.D. degrees from prestigious institutions across India and abroad. Their interdisciplinary expertise enables cutting-edge research and high-quality education in science and technology.
                    </p>
                    <p className="text-gray-700 mt-4">
                        With a strong emphasis on academic integrity, creativity, and intellectual excellence, the department continues to contribute significantly to the advancement of research and education at IIIT Nagpur.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default About_BasicScience;
