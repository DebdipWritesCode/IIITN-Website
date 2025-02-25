import React from "react";

const researchData = {
    researchDomains: [
        "Communication, Wireless Sensor Network, and IoT",
        "Design and Development of different Smart Systems using Sensors and Boards",
        "Smart surveillance application development",
        "Development of Health tracking devices using IoT and AI",
        "5G Network",
        "MIMO Systems",
        "Industry 4.0",
        "Data analytics",
        "Microwave and Antennas",
        "Reconfigurable antenna",
        "Directive antenna, Planar antenna",
        "High-gain antenna, Printed-circuit antenna",
        "Microstrip antenna and arrays",
        "High gain antenna",
        "FSS resonator antenna",
        "Signal, Image & Video Processing",
        "Expression recognition",
        "Biomedical signal processing: detection and feature extraction",
        "Computer Vision and Object Tracking",
        "Pattern Recognition and Machine Learning",
        "Signal processing for condition monitoring",
        "Document Image Analysis",
        "Process Control system",
        "Control Systems",
        "Modeling and Simulation",
        "Model Reference Adaptive Controller (MRAC)",
        "Conventional PID Tuning",
        "Artificial Intelligent (AI) based PID Tuning and hybrid combination of AI and Conventional PID Controller",
        "Intelligent Systems",
        "Machine learning/data analysis",
        "Development of Health tracking devices using IoT and AI",
        "Application AI to various problems in Image and Video Processing",
        "Biomedical systems",
        "Smart surveillance"
    ],
    conferencePapers: {
        // Add conference papers data here if available
    },
    journalPapers: {
        // Add journal papers data here if available
    }
};

const Research_ECE: React.FC = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">ECE Research</h1>
            <div className="max-w-4xl mx-auto">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Research Domains</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {researchData.researchDomains.map((domain, index) => (
                            <li key={index} className="mb-2">{domain}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Conference Papers</h2>
                    {Object.entries(researchData.conferencePapers).map(([year, papers]) => (
                        <div key={year} className="mb-4">
                            <h3 className="text-xl font-medium text-orange-500">{year}</h3>
                            <ul className="list-disc ml-6 text-gray-800">
                                {papers.map((paper, index) => (
                                    <li key={index} className="mb-2">
                                        <strong>{paper.title}</strong> - {paper.authors ? `${paper.authors}, ` : ""}
                                        {paper.conference || paper.journal}.
                                        {paper.doi && (
                                            <a
                                                href={paper.doi}
                                                className="text-orange-600 underline ml-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                DOI Link
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Journal Papers</h2>
                    {Object.entries(researchData.journalPapers).map(([year, papers]) => (
                        <div key={year} className="mb-4">
                            <h3 className="text-xl font-medium text-orange-500">{year}</h3>
                            <ul className="list-disc ml-6 text-gray-800">
                                {papers.map((paper, index) => (
                                    <li key={index} className="mb-2">
                                        <strong>{paper.title}</strong> - {paper.authors}, {paper.journal}, {paper.date}.
                                        {paper.doi && (
                                            <a
                                                href={paper.doi}
                                                className="text-orange-600 underline ml-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                DOI Link
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Research_ECE;