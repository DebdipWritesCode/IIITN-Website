import React from "react";

const researchAreas = {
    cse: {
        title: "Computer Science and Engineering (for more details: Click Here)",
        areas: [
            "Machine Learning",
            "Artificial Intelligence",
            "Big Data Analytics",
            "Natural Language Processing",
            "RTOS and Embedded Systems",
            "High Performance Computing",
            "Bio-informatics",
            "Parallel Computing",
            "Distributed Computing"
        ]
    },
    ece: {
        title: "Electronics and Communication Engineering (for more details: Click Here)",
        areas: [
            "Communication, Wireless Sensor Network, and IoT",
            "Microwave and Antennas",
            "Signal, Image & Video Processing",
            "Process Control system",
            "Intelligent Systems"
        ]
    }
};

const RA_PhD = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Research Areas for PhD</h1>
            <div className="max-w-4xl mx-auto">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">{researchAreas.cse.title}</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {researchAreas.cse.areas.map((area, index) => (
                            <li key={index} className="mb-2">{area}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">{researchAreas.ece.title}</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {researchAreas.ece.areas.map((area, index) => (
                            <li key={index} className="mb-2">{area}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default RA_PhD;