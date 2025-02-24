import React from "react";

const achievements = [
    {
        year: "2021",
        details: [
            "Dr. Tapan Jain received a grant from DRDO India for the research project 'Comparison of TA Algorithm for INS and Augmenting these algorithms using AI/ML'.",
            "Patent granted: Dr. Tapan Jain, Dr. J.V. Tembhurne, Dr. P Jain and Dr. T. Diwan (Patent No.2021103138 Australia), Title: 'An IoT based Smart Food-Cold Chain Transportation System'.",
            "Dr. Vipin Kamble organized an ATAL Faculty Development Programme on Artificial Intelligence in Image Processing.",
            "Dr. Mayur Parate organized an ATAL Faculty Development Programme on IoT in Health Care.",
            "Varad Pimpalkhute, Rutvik Page, Dr. Ashwin Kothari, Dr. Kishor Bhurchandi, and Dr. Vipin Kamble published a research paper in IEEE Transactions on Image Processing.",
            "Varad Pimpalkhute, Prajwal Nakhate, and Dr. Tausif Diwan secured 3rd position in Social Media Mining for Health Applications Workshop (SMM4H).",
            "IIIT Nagpur students Hardik Jain (ECE) and Shrishti Shah (CSE) developed apps to fight against COVID-19.",
            "Sourav Singh (BT19ECE043) selected for Google Summer of Code as a Student Developer, working on OSGeo - Open Source Geospatial Foundation.",
            "Vivek Sharma published a paper 'LARNet: Real-Time Detection of Facial Micro Expression Using Lossless Attention Residual Network' in Sensors."
        ]
    },
    {
        year: "2020",
        details: [
            "Dr. Vipin Kamble selected as a mentor at GOAL (Going Online As Leaders) by the Ministry of Tribal Affairs and Facebook.",
            "Dr. Tapan Kumar Jain organized the first online ATAL FDP on 'Internet of Things'.",
            "Dr. Rashmi Pandhare received a DST India grant for the project 'Design and Development of a Mobile App Interface and a Smart Wearable Device for Awareness, Tracking, and Alerting Citizens'.",
            "Dr. Tapan Jain coordinated multiple AICTE Training And Learning (ATAL) Academy workshops on Data Science and IoT.",
            "Agnel Alappat and Dr. Vipin Kamble published a conference paper at ICCCNT at IIT Kharagpur.",
            "Shivani Dhok, Varad Pimpalkhute, and Ambarish Chandurkar published a research paper under faculty guidance.",
            "Sahil Kesharwani developed an android app 'COVID CARE' under faculty mentorship.",
            "Kartik Kinge developed SoDi App, an AR application for social distancing visualization.",
            "Kartik W. Kinge participated in MIT Reality Hack 2020 at MIT, USA."
        ]
    },
    {
        year: "2019",
        details: [
            "Patent publication by Dr. Mayur Rajaram Parate, Dr. Ankit Ashokrao Bhurane, and Dr. Ashwin G. Kothari on 'VIRTUAL SIGNATURE SYSTEM'.",
            "Dr. Rashmi Pandhare received an SERB India grant for the project 'Design and Development of High Gain Reconfigurable Wideband Printed Antennas'.",
            "Shivani Dhok published a research paper on Parkinson's Disease diagnosis in Expert Systems.",
            "Kritika Dhawale published a paper on Deep Learning Frameworks at I2CN-2019.",
            "Kartik W. Kinge interned at Fujitsu Ltd, Japan.",
            "Sahil S. Deshmukh interned at Ecole Centrale Supelec, Paris.",
            "Shivani Dhok, A. G. Kothari, and Ankit Bhurane published a research paper on Hyperspectral Image Classification."
        ]
    },
    {
        year: "2018",
        details: [
            "AR Vidhya – A startup founded by ECE student Kartik Kinge based on Augmented Reality and E-Learning.",
            "Team ARVidhya won 1st Prize in International IEEE SS12 Maker Fair 2018.",
            "Team ARVidhya won the Techstars Start-up weekend Hackathon at Microsoft Hyderabad campus.",
            "Aman Soni, Sahil Deshmukh, and Somesh Kumar published a paper on a Shortest Path Algorithm for 3D Integrated Circuit TSV Assignment."
        ]
    }
];

const Achievements_ECE = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">ECE Achievements</h1>
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

export default Achievements_ECE;
