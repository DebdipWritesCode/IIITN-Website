import React from "react";

const phdAdmissions = [
    {
        title: "Schedule of Written Test and Interview",
        link: "https://iiitn.ac.in/Downloads/phd/AdmissionW24-II/Schedule%20for%20Written%20Test%20and%20Interview%20for%20PhD%20Admission%20VS%20FULL%20TIME%20FEB%202025.pdf",
    },
    {
        title: "Provisionally Shortlisted Candidates for Written Test (CSE & ECE)",
        link: "https://iiitn.ac.in/Downloads/phd/AdmissionW24-II/PhD%20VS%20FT%20FEB%202025%20SHORLISTED%20FOR%20WT%20CSE%20ECE%20UPLOAD%20COPY.pdf",
    },
    {
        title: "Revised Admission Schedule",
        link: "https://iiitn.ac.in/Downloads/phd/AdmissionW24-II/REVISED%20DATES-PhD%20advt%2017-2-25.pdf",
    },
    {
        title: "Notification",
        link: "https://iiitn.ac.in/Downloads/phd/AdmissionW24-II/PhD%20Notification%20Visvesvaraya%20Scheme.pdf",
    },
];

const Postgraduate = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Header */}
            <header className="bg-orange-600 text-white py-16 text-center shadow-lg">
                <h1 className="text-5xl font-extrabold">🎓 Postgraduate</h1>
            </header>

            {/* Ph.D. Admissions Notification Heading */}
            <section className="max-w-5xl mx-auto px-6 py-10 text-center">
                <h2 className="text-3xl font-bold text-orange-700">
                    Ph.D. Admissions Notification Winter 2024-2025
                </h2>
                <p className="mt-2 text-lg font-medium text-gray-700">
                    (Visvesvaraya Full-time Ph.D. Scheme for Electronics and IT: Phase II)
                </p>
            </section>

            {/* Admissions Details */}
            <section className="max-w-6xl mx-auto px-6 py-8">
                <h2 className="text-4xl font-bold text-orange-700 text-center mb-8">
                    Important Links
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {phdAdmissions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-orange-100 shadow-md rounded-xl p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-orange-200"
                        >
                            <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <button className="mt-4 bg-orange-600 text-white font-semibold py-2 px-5 rounded-lg transition duration-300 hover:bg-orange-700">
                                    View Details
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Postgraduate;
