import React from "react";

const BasicScienceEvents = () => {
  const events = [
    {
      year: "2024",
      details: [
        "Teacher’s Enrichment Workshops (TEW) will be conducted by IIIT Nagpur with financial support from the National Centre for Mathematics (A joint centre of IIT Bombay and TIFR, Mumbai) from 09 December 2024 to 14 December 2024. [More Info](https://www.atmschools.org/school/2024/TEW/laia).",
        "Seminar on 'Skills sculpt: Crafting Excellence Through Soft Skills Mastery' organized by Dr. Madhuri Tayade on August 07, 2024.",
        "Seminar on 'Uttishth Bharat: Role of Leadership and Social Entrepreneurship in Amrit Kaal' organized by Mr. Vikrant Dhenge, Dr. Pradeep Shende, and Dr. Shailesh Janbandhu on January 12, 2024."
      ]
    },
    {
      year: "2023",
      details: [
        "Seminar on 'Celebration of World Intellectual Property Day' organized by Dr. Kamaljeet on April 26, 2023.",
        "Seminar on 'Celebration of National Science Day' organized by Dr. Kamaljeet on February 28, 2023.",
        "Seminar on 'India's G20 presidency highlighting the role of innovation, entrepreneurship, and startups' organized by Dr. Kamaljeet on May 02, 2023.",
        "International event - Celebrating Women in Mathematics (online mode) organized by Dr. Charu Goel on May 05, 2023.",
        "5-day short-term training program on 'Gender Discrimination and Equality Promotion at Workplace' organized by Dr. Kirti Dorshetwar, Dr. Madhuri Tayade, and Mr. Vikrant Dhenge from September 19-23, 2023."
      ]
    },
    {
      year: "2022",
      details: [
        "Seminar on 'Celebration of World Entrepreneur’s Day' organized by Dr. Charu Goel on August 22, 2022.",
        "Celebrated World Environment Day on the theme of 'Only One Earth' on 8th June 2022 - Organized by the Department of Basic Sciences, IIIT Nagpur, Coordinators: Dr. Aatish S. Daryapurkar and Dr. Shruti Ralegaonkar.",
        "Online International Event - Celebrating Women in Mathematics from May 31 - June 01, 2022 - Organized by the Department of Basic Sciences, IIIT Nagpur - Coordinator: Dr. Charu Goel."
      ]
    },
    {
      year: "2021",
      details: [
        "National Level Awareness Program 'Sambhav' in association with MSME-Development Institute Nagpur, Ministry of Micro, Small, and Medium Enterprises on 11th November 2021, coordinated by Dr. Aatish Daryapurkar.",
        "One-week online Faculty Development Program [FDP] on 'Electrospinning Nanofibers: Science, Technology, and Applications' sponsored by AICTE Training and Learning (ATAL) Academy from 12th July – 16th July 2021, organized by Dr. Aatish Daryapurkar."
      ]
    },
    {
      year: "2020",
      details: [
        "One Week National Workshop on 'Innovation and Entrepreneurship Acumen in Engineering Education' from 5th to 9th October 2020.",
        "One Week Online Short-Term Training Program (STTP) on 'Gender Bias & Stereotyping, Gender Equality & Women's Rights' from 22nd June to 26th June 2020, Coordinators: Dr. Anuradha Singh & Dr. Kirti Dorshetwar.",
        "International Webinar - Celebrating Women in Mathematics on May 29, 2020, sponsored by the Committee of Women in Mathematics (CWM) - Coordinated by Dr. Charu Goel."
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 lg:px-20">
      <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-10">Basic Science Events</h1>
      <div className="flex flex-col items-center gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white w-full md:w-3/4 lg:w-1/2 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 border-l-4 border-orange-500"
          >
            <h2 className="text-3xl font-bold text-orange-700 mb-4 text-center">{event.year}</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              {event.details.map((detail, idx) => (
                <li key={idx} className="hover:text-orange-500 transition duration-300">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicScienceEvents;