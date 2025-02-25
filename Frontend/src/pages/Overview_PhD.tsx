import React from "react";

const phdProgram = {
    categories: [
        {
            title: "Industry Candidates",
            types: [
                "Extern Candidate from Industry (EX-I)",
                "Intern Sponsored Candidate from Industry (IN-IS)"
            ]
        },
        {
            title: "Academic Institution(s) Candidates",
            types: [
                "Extern Self-financed candidates from Academic Institutions (Ex-A)",
                "Intern Sponsored Candidate from Academic Institutions (IN-AS)"
            ]
        },
        {
            title: "Other Candidates",
            types: [
                "Intern Self Sponsored Candidates (IN-U)",
                "Intern externally funded or sponsored or Project Staff Candidates (IN-ES)"
            ]
        }
    ],
    admissionModality: [
        "Admission to the Ph.D. programme is made once a year against the advertisement, which can be checked at Click here. Candidates have to apply through the online application form.",
        "A candidate is normally admitted to the Ph.D. programme after passing the Ph.D. qualifying/entrance examination followed by an interview.",
        "The Entrance Examination tests the student's knowledge, grasp of fundamentals, and ability to apply them in novel situations. The exam is designed to be equivalent to the standard, content, and intent of the comprehensive examination of the named courses."
    ],
    applicationProcedure: [
        "The applications are to be filled in online mode with all relevant documents attached. A separate hard copy of the same application filled online must be sent by post along with documents. A Gmail account is essential to avail the online form.",
        "Applicants are advised to note that they have to submit the online application as well as send the hard copy to the Institute. The hard copy of the application received at the Institute shall be considered for processing.",
        "All applications which are not in the prescribed form / without relevant supporting enclosures / received after the last date / without application fees will be outrightly rejected. No correspondence shall be entertained in this regard. Interim correspondence will also not be entertained or replied to.",
        "The Institute will not be responsible under any circumstances for any sort of postal delay/loss of the application form."
    ],
    examinationPattern: {
        sections: [
            {
                title: "Section-1",
                description: "Common for all categories and comprises questions on General Ability and Communication Skills."
            },
            {
                title: "Section-2",
                description: "Questions based on the syllabus for respective categories as under:",
                categories: [
                    {
                        title: "For Candidates from Industry (EX-I & IN-IS)",
                        syllabus: [
                            "Basic Engineering Maths",
                            "Basic Programming and Engineering Knowledge and Skills",
                            "Engineering Logical Analysis, Arithmetic, Industry Standards"
                        ]
                    },
                    {
                        title: "For all remaining category Candidates (EX-A, IN-AS, IN-U, IN-ES)",
                        streams: [
                            {
                                title: "Electronics and Communication Engineering",
                                syllabus: [
                                    "Engineering Mathematics",
                                    "Networks, Signals and Systems",
                                    "Electronic Devices",
                                    "Analog Circuits",
                                    "Digital Circuits",
                                    "Control Systems",
                                    "Communications",
                                    "Electromagnetic"
                                ]
                            },
                            {
                                title: "Computer Science and Engineering and Information Technology",
                                syllabus: [
                                    "Engineering Mathematics",
                                    "Digital Logic",
                                    "Computer Organization and Architecture",
                                    "Programming and Data Structures",
                                    "Algorithms",
                                    "Theory of Computation",
                                    "Compiler Design",
                                    "Operating System",
                                    "Databases",
                                    "Computer Networks"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    selectionProcess: [
        {
            title: "Stage 1: Entrance Test",
            description: "Eligible candidates are required to appear physically at the Institute Permanent Campus for the Entrance Test to be held in the Computer Labs of the Institute.",
            qualifyingScore: "The minimum qualifying score shall be a normalized score decided taking into account the number of candidates to be called for the interview. But in no case, it will be less than 40%. The normalization will be done by considering the topmost score to be 100% and scaling the scores of other candidates accordingly."
        },
        {
            title: "Stage 2: Interview",
            description: "Candidates qualifying the Entrance Test shall be eligible to appear for a Personal Interview through Offline Mode."
        },
        {
            title: "Stage 3: Calculation of Combined Score",
            description: "A Combined Score shall be calculated on the basis of the score in the Entrance Test, the score in the Personal Interview, and GATE qualification as under:",
            weightage: [
                {
                    category: "EX-I & IN-IS",
                    totalMarks: 100,
                    entranceTest: 40,
                    interview: 50,
                    gate: 10
                },
                {
                    category: "EX-A, IN-AS, IN-U & IN-ES",
                    totalMarks: 100,
                    entranceTest: 40,
                    interview: 50,
                    gate: 10
                }
            ]
        }
    ],
    duration: [
        "Three (3) years from the date of joining the programme till the date of Submission of Thesis for candidates of Ex-A, IN-AS, IN-U, IN-ES.",
        "For Industry candidates, three years if possessing a Master’s Degree; otherwise, four years for candidates with a Bachelor’s Degree."
    ]
};

const PhD_Overview = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Overview of PhD Programme</h1>
            <div className="max-w-4xl mx-auto">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Categories</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {phdProgram.categories.map((category, index) => (
                            <li key={index} className="mb-2">
                                <strong>{category.title}</strong>
                                <ul className="list-disc ml-6">
                                    {category.types.map((type, i) => (
                                        <li key={i} className="mb-1">{type}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Admission Modality</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {phdProgram.admissionModality.map((point, index) => (
                            <li key={index} className="mb-2">{point}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Application Procedure</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {phdProgram.applicationProcedure.map((point, index) => (
                            <li key={index} className="mb-2">{point}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Examination Pattern</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {phdProgram.examinationPattern.sections.map((section, index) => (
                            <li key={index} className="mb-2">
                                <strong>{section.title}</strong>: {section.description}
                                {section.categories && (
                                    <ul className="list-disc ml-6">
                                        {section.categories.map((category, i) => (
                                            <li key={i} className="mb-2">
                                                <strong>{category.title}</strong>
                                                <ul className="list-disc ml-6">
                                                    {category.syllabus && category.syllabus.map((topic, j) => (
                                                        <li key={j} className="mb-1">{topic}</li>
                                                    ))}
                                                    {category.streams && category.streams.map((stream, j) => (
                                                        <li key={j} className="mb-2">
                                                            <strong>{stream.title}</strong>
                                                            <ul className="list-disc ml-6">
                                                                {stream.syllabus.map((topic, k) => (
                                                                    <li key={k} className="mb-1">{topic}</li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Selection Process</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {phdProgram.selectionProcess.map((stage, index) => (
                            <li key={index} className="mb-2">
                                <strong>{stage.title}</strong>: {stage.description}
                                {stage.qualifyingScore && (
                                    <p className="ml-6">{stage.qualifyingScore}</p>
                                )}
                                {stage.weightage && (
                                    <ul className="list-disc ml-6">
                                        {stage.weightage.map((weight, i) => (
                                            <li key={i} className="mb-2">
                                                <strong>{weight.category}</strong>: Total Marks - {weight.totalMarks}, Entrance Test - {weight.entranceTest}, Interview - {weight.interview}, GATE - {weight.gate}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Duration of PhD</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {phdProgram.duration.map((point, index) => (
                            <li key={index} className="mb-2">{point}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default PhD_Overview;