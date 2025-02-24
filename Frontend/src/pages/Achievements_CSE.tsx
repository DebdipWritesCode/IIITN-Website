import React from "react";

const achievements = [
    {
        year: "2024",
        details: [
            "Dr. Nileshchandra Pikle : Received Travel Grant of ~4 Lakh and Special Invitation to attend NVIDIA GPU Technology Conference 2024 at San Jose, California , 18-21 March 2024, organized by NVIDIA."
        ]
    },
    {
        year: "2023",
        details: [
            "Dr. Milind Penurkar : Coordinated RBI Training for the employees of UCBs under CAB, Pune (Jan to June 2023) organized at IIITN."
        ]
    },
    {
        year: "2022",
        details: [
            "Dr. Tausif Diwan received Platinum Tier Award as an NVIDIA DLI Instructor in December 2022 and 2023.",
            "Best paper Award to Shriram Dharwada for 'Multi-channel Deep Model for Classification of Alzheimer’s Disease Using Transfer Learning' at 18th International Conference on Distributed Computing and Intelligent Technology."
        ]
    },
    {
        year: "2021",
        details: [
            "Ankit Barai, CSE Student of Batch 2017-21 Received PPO From Amazon With A Salary Package of 32.16 Lpa.",
            "Dr. Tausif Diwan, Varad Pimpalkhute and Prajwal Nakhate secured 3rd position in Social Media Mining for Health Applications Workshop - 2021 (SMM4H).",
            "IIIT Nagpur students Atharva Nimbalkar from CSE final year selected for Google Summer of Code (GSoC) 2021.",
            "IIIT Nagpur students Hardik Jain from ECE and Shrishti Shah from CSE developed Apps to fight against COVID-19.",
            "Yashita Watchpillai, Student of CSE selected as a System Software Intern at Nvidia, India with a Monthly Stipend: 50,000 INR."
        ]
    },
    {
        year: "2020",
        details: [
            "Final year student Mr. Sunny Dhoke from CSE selected for Google Summer of Code – R Project for Statistical Computing - 2020.",
            "Dr. Jitendra V. Tembhurne along with Mr. Ankit Barai (Third-year student) Department of CSE selected for Stage- 2 of SAMHAR-COVID19 Hackathon 2020."
        ]
    },
    {
        year: "2019",
        details: [
            "The Team The Terrifying Nightmares won 1st Prize at Smart India Hackathon-2019, Agriculture Hardware Edition, and prize money of Rs. 1 Lakh.",
            "Mr. Ankit Barai from 4th Semester B. Tech. CSE is the recipient of the Summer Research Fellowship 2019 by the Indian Academy of Sciences at IISc, Bengaluru."
        ]
    }
];

const Achievements_CSE = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">CSE Achievements</h1>
            <div className="max-w-4xl mx-auto">
                {achievements.map((achievement, index) => (
                    <div key={index} className="mb-6 border-l-4 border-orange-600 pl-4">
                        <h2 className="text-2xl font-semibold text-orange-700 mb-2">{achievement.year}</h2>
                        <ul className="list-disc ml-6 text-gray-800">
                            {achievement.details.map((detail, i) => (
                                <li key={i} className="mb-2">{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements_CSE;
