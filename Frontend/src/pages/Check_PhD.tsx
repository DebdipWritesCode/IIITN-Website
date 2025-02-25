import React from "react";

const checklists = [
    "Checklist for verification at the time of PhD Thesis Submission"
];

const Checklists = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Checklists</h1>
            <div className="max-w-4xl mx-auto">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">List of Checklists</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {checklists.map((checklist, index) => (
                            <li key={index} className="mb-2">{checklist}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Checklists;