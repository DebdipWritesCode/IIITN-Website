import React from "react";

const ruleBook = {
    title: "B. Tech Rule Book",
    link: "https://iiitn.ac.in/Downloads/AcademicRuleBook/Academic%20Rule%20Book_B.Tech_2024-25%20Onwards.pdf",
};

const UGRule = () => {
    return (
        <div className="bg-gray-50 text-gray-900 font-sans min-h-screen flex flex-col">
            {/* Header with extra padding to move it downward */}
            <header className="bg-orange-600 text-white py-16 text-center shadow-lg">
                <h1 className="text-5xl font-extrabold">📘 UG Academic Rule Book</h1>
            </header>

            {/* Content Section */}
            <section className="max-w-5xl mx-auto px-6 py-12 flex-grow">
                <h2 className="text-3xl font-bold text-orange-700 border-b pb-2">
                    UG ACADEMIC RULE BOOK
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                    The academic rule book for B. Tech CSE and ECE are as follows:
                </p>

                {/* Rule Book Link */}
                <div className="mt-6">
                    <a
                        href={ruleBook.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:bg-orange-700">
                            {ruleBook.title}
                        </button>
                    </a>
                </div>
            </section>

            {/* Adds balanced spacing before the footer */}
            <div className="py-8"></div>
        </div>
    );
};

export default UGRule;
