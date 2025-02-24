import React from "react";

const achievements = [
    {
        year: "2024",
        details: [
            "Dr. Charu Goel, and Dr. Kamaljeet coordinated Teacher’s Enrichment Workshops (TEW) conducted by IIIT Nagpur with financial support from the National Centre for Mathematics from 09-14 December 2024.",
            "Dr. Preeti delivered a keynote session on Introduction to MATLAB and Basic Operations at the FDP titled 'Scientific Computing Essentials with MATLAB' held from 24-28 June 2024.",
            "Dr. Preeti delivered a keynote session on Publishing and Peer Review Process at the 'Faculty Development Programme on Enhancing Research Paper Writing and Publication Skills' held from 06-10 May 2024.",
            "Dr. Madhuri Tayade's system for 'Efficient Supply Chain and Logistic Management' was published on November 15, 2024.",
            "Dr. Madhuri Tayade was invited as a guest speaker at Bajaj Institute of Technology, Wardha on 13th December 2024 to deliver a session on 'Lessons from Ancient India: Cultivating the Right Mindset in Engineering Students (IKS)'.",
            "Dr. Madhuri Tayade was invited as a judge for the Cultural Fest 'AURA' on 14th February 2024 at LAD College Nagpur.",
            "An article by Dr. Madhuri Tayade titled 'Gen Z and Indian Knowledge System' was published in the Hitavada newspaper on December 23, 2024.",
            "Dr. Madhuri Tayade was invited as a judge for Icebreaker Marathon on 9th February 2024 at G.H. Raisoni College of Arts, Commerce, and Science, Nagpur."
        ]
    },
    {
        year: "2022",
        details: [
            "Dr. Aatish S. Daryapurkar received research funding from DST-NewGen IEDC DMIMS 2022-23.",
            "Dr. Aatish S. Daryapurkar delivered an invited talk on 'Innovative Ideas for Development of Green Campus for Sustainable Environmental Development' in an AICTE and ISTE Sponsored STTP.",
            "Dr. Aatish S. Daryapurkar was invited as a Special Guest and Keynote Speaker at G. H. Raisoni Institute of Engineering and Technology on 24th February 2022.",
            "An impact lecture series was organized under the Institution's Innovation Council (IIC), Ministry of Education, coordinated by Dr. Aatish S. Daryapurkar and Dr. Paritosh Peshwe.",
            "Dr. Aatish S. Daryapurkar was invited as a speaker for the session on 'Adoption of National Innovation and Start-up (NISP) policy' at the Regional Meet at G. H. Raisoni College of Engineering, Nagpur on 29th July 2022.",
            "Dr. Aatish S. Daryapurkar was invited as a resource person for a 5-day faculty development program on 'Quantum Physics leading way to Photonics' organized by Te-Searchers at G. H. Raisoni College Engineering, Nagpur from 10th-14th October 2022."
        ]
    },
    {
        year: "2021",
        details: [
            "Harshal Khandait, a final-year undergraduate from CSE, was selected among 106 finalists for the ASEAN-INDIA Hackathon-2021 under the mentorship of Dr. Aatish Daryapurkar."
        ]
    },
    {
        year: "2020",
        details: [
            "Dr. Aatish S. Daryapurkar was a Keynote Speaker in a RUSA-sponsored National Level Webinar organized by Patkar-Varde College, Mumbai on 17th June 2020.",
            "Dr. Aatish S. Daryapurkar was invited as a Special Guest and Keynote Speaker for a free online revision course for MH-CET, IIT-JEE, and NEET Examinations in association with the Additional Tribal Commissioner, Amravati.",
            "Dr. Aatish S. Daryapurkar was a member of the Advisory Committee and Guest of Honor at the International Interdisciplinary E-Conference on 'Computer Technology, Commerce, and Management Studies - 2020'.",
            "Dr. Anuradha Singh developed an NCERT book entitled 'Development of Mathematics Practical Manual for B.SC. B.ED. Level'.",
            "Dr. Charu Goel received an 'Oberwolfach Leibnitz Fellowship' grant from Germany to visit MFO as a Fellow for 3 months.",
            "Dr. Anuradha Singh and Dr. Richa Makhijani secured approval for a COVID-19 Research Project from IIT Delhi under 'COVID 19 Research at IIT Delhi Supercomputer'.",
            "Dr. Charu Goel delivered a talk in the workshop 'Real Algebraic Geometry with a view toward Hyperbolic Programming & Free Probability' in Germany (March 2020).",
            "Dr. Anuradha Singh and Dr. Kirti Dorshetwar developed an android app 'COVID CARE'."
        ]
    }
];

const Achievements_BS = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Basic Sciences Achievements</h1>
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

export default Achievements_BS;