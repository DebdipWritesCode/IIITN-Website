import React from "react";

const operationalDetails = {
    validityOfRegistration: [
        {
            title: "Validity of Registration",
            points: [
                "The registration will be valid for a period of 6 years for M.Tech. degree holders and 7 years for B.Tech. degree holders from the date of registration and no further extension will be granted under normal circumstances.",
                "After 6/7 years, if a candidate wishes to continue research, he/she will be required to register again. A candidate should apply for re-registration before completion of 6/7 years of the registration period. Failure to do so will require the candidate to register again following the procedure for fresh candidates."
            ]
        }
    ],
    durationOfPhD: [
        {
            title: "Duration of Ph.D. Programme",
            points: [
                "Three (3) years from the date of joining the programme till the date of Submission of Thesis for candidates of Ex-A, IN-AS, IN-U, IN-ES.",
                "For Industry candidates, three years if possessing a Master’s Degree; otherwise, four years for candidates with a Bachelor’s Degree."
            ]
        }
    ]
};

const OperationalDetails = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Operational Details</h1>
            <div className="max-w-4xl mx-auto">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">{operationalDetails.validityOfRegistration[0].title}</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {operationalDetails.validityOfRegistration[0].points.map((point, index) => (
                            <li key={index} className="mb-2">{point}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">{operationalDetails.durationOfPhD[0].title}</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {operationalDetails.durationOfPhD[0].points.map((point, index) => (
                            <li key={index} className="mb-2">{point}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default OperationalDetails;