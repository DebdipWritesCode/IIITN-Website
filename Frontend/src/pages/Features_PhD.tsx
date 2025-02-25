import React from "react";

const doctoralProgramme = {
    courseWork: [
        {
            title: "Course Work Requirements",
            description: [
                "All registered Ph.D. students need to complete the coursework requirement of 6 credits by M.Tech degree holders and 12 credits by B.Tech degree holders in either of the following modes:",
                "1. Courses offered by the institute.",
                "2. Credits can be earned through successful completion of online courses available on MOOC platforms like NPTEL, MIT-OCW, Coursera, edX, etc. (The total minimum course hours for an online course should be 40.)"
            ]
        },
        {
            title: "Assessment Mechanics for Online/MOOC Courses",
            steps: [
                {
                    step: "1. Course Accomplishment (25% weightage)",
                    description: "The candidate must successfully complete the registered online course as per the respective course evaluation criteria."
                },
                {
                    step: "2. Institute-level Assessment (75% weightage)",
                    description: "An additional 100 Marks institute-level assessment will be conducted and evaluated by the supervisor/course instructor for each such online course registered by the candidate."
                },
                {
                    step: "3. Final Score",
                    description: "The final score of the online courses is evaluated on the basis of a combined weighted score secured in both online assessment and institute-level assessment as follows:",
                    formula: "Final Score = 0.25 (Score obtained through online assessment) + 0.75 (Score obtained through institute-level assessment)"
                },
                {
                    step: "4. Gradation",
                    description: "The following table can be used for the award of grades for all the online courses:",
                    gradingTable: [
                        { range: "81-100", grade: "AA" },
                        { range: "71-80", grade: "AB" },
                        { range: "61-70", grade: "BB" },
                        { range: "56-60", grade: "BC" },
                        { range: "51-55", grade: "CC" },
                        { range: "46-50", grade: "CD" },
                        { range: "40-45", grade: "DD" }
                    ]
                }
            ]
        }
    ],
    progressSeminars: [
        {
            title: "Progress Seminars",
            description: [
                "1. A scholar is required to give a progress seminar on his/her project work every six months in the concerned department.",
                "2. A brief write-up outlining the work previously done in the semester, the current status, and the future plans should also be submitted to the RPC members.",
                "3. A candidate is supposed to earn a satisfactory remark from the RPC after presenting the progress seminar. On getting two consecutive unsatisfactory remarks, the candidate may be liable for registration cancellation if the explanation and undertaking submitted by him/her are not satisfactory."
            ]
        }
    ]
};

const DoctoralProgrammeFeatures = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Doctoral Programme Features</h1>
            <div className="max-w-4xl mx-auto">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Course Work</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {doctoralProgramme.courseWork.map((section, index) => (
                            <li key={index} className="mb-4">
                                <strong>{section.title}</strong>
                                <ul className="list-disc ml-6">
                                    {section.description && section.description.map((point, i) => (
                                        <li key={i} className="mb-2">{point}</li>
                                    ))}
                                    {section.steps && section.steps.map((step, i) => (
                                        <li key={i} className="mb-2">
                                            <strong>{step.step}</strong>: {step.description}
                                            {step.formula && (
                                                <p className="ml-6">{step.formula}</p>
                                            )}
                                            {step.gradingTable && (
                                                <table className="ml-6 border-collapse border border-gray-400 mt-2">
                                                    <thead>
                                                        <tr>
                                                            <th className="border border-gray-400 p-2">Range of Marks</th>
                                                            <th className="border border-gray-400 p-2">Grade</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {step.gradingTable.map((row, j) => (
                                                            <tr key={j}>
                                                                <td className="border border-gray-400 p-2">{row.range}</td>
                                                                <td className="border border-gray-400 p-2">{row.grade}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Progress Seminars</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {doctoralProgramme.progressSeminars.map((section, index) => (
                            <li key={index} className="mb-4">
                                <strong>{section.title}</strong>
                                <ul className="list-disc ml-6">
                                    {section.description.map((point, i) => (
                                        <li key={i} className="mb-2">{point}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default DoctoralProgrammeFeatures;