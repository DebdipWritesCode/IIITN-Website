import React from "react";

const importantProformas = [
    "Progress Form",
    "Ph.D. Pre-Submission Seminar Report",
    "No Dues Form for PhD Student",
    "Checklist for verification at the time of PhD Thesis Submission",
    "Documents for PhD Thesis Submission"
];

const ImportantProformas = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Important Proformas</h1>
            <div className="max-w-4xl mx-auto">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">List of Important Proformas</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {importantProformas.map((proforma, index) => (
                            <li key={index} className="mb-2">{proforma}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default ImportantProformas;