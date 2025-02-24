import React from "react";

const About_CSE = () => {
    return (
        <div className="bg-gray-100 pt-10">
            {/* Header */}
            <header className="bg-orange-600 text-white py-4 px-6 flex justify-center items-center w-full top-0 z-50 shadow-md">
                <h1 className="text-center text-3xl font-bold">IIIT Nagpur - CSE Department</h1>

            </header>

            {/* Push content down to avoid overlap */}

            {/* Main Content */}
            <main className="max-w-5xl mx-auto py-10 px-6">
                <section id="about" className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">About Department</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The Department of Computer Science and Engineering at IIIT Nagpur was established in 2016. Since then, it has grown into a center of excellence for innovation and research, equipped with dedicated faculty, motivated students, and state-of-the-art facilities.
                    </p>
                    <p className="text-gray-700 mt-4">
                        The department offers four undergraduate programs:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>B. Tech. in Computer Science and Engineering (Intake: 223)</li>
                        <li>B. Tech. in CSE with specialization in Artificial Intelligence & Machine Learning (Intake: 66)</li>
                        <li>B. Tech. in CSE with specialization in Data Science & Analytics (Intake: 66)</li>
                        <li>B. Tech. in CSE with specialization in Human-Computer Interaction & Gaming Technology (Intake: 66)</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        A Ph.D. program was introduced in 2018-19 for research enthusiasts.
                    </p>
                </section>

                <section id="research" className="bg-white p-6 mt-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Research Areas</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Artificial Intelligence and Machine Learning</li>
                        <li>Deep Learning</li>
                        <li>Natural Language Processing</li>
                        <li>Parallel Computing</li>
                        <li>High-Performance Computing</li>
                        <li>Bioinformatics</li>
                        <li>IoT</li>
                        <li>Pattern Recognition</li>
                    </ul>
                </section>

                <section id="faculty" className="bg-white p-6 mt-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Faculty</h2>
                    <p className="text-gray-700">
                        The department is led by Dr. Nishat Afshan Ansari and features faculty members with PhDs from prestigious institutions such as IITs, NITs, IIITs, and renowned universities across India and abroad.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default About_CSE;