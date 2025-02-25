import React from "react";

const CSEEvents = () => {
  const events = [
    {
      year: "2024",
      details: [
        "AICTE Sponsored QIP PG Certification Program in AIML from July-December 2024. (Total of 66 participants)",
        "Two-week Certification in Python: Basic and Advanced conducted in Jan- 2024. (Total of 37 participants)"
      ]
    },
    {
      year: "2023",
      details: [
        "RBI Certification Program for UCB (Urban Cooperative Bank) employees – Feb 2023 to June 2023 (Total of 271 participants trained)",
        "One day seminar on 'Art of Entrepreneurship' on 18th May 2023 - Coordinator Dr. Mayuri Digalwar",
        "Three Day Workshop on 'Internet of Things – A Prototype Designing using Embedded Development Boards' from 9th to 11th May 2023 - Coordinator Dr. Mayuri Digalwar",
        "Two Day Workshop on 'Linux Operating Systems: Basic Commands and Shell Programming' from 28th to 29th Oct 2023 - Coordinator Dr. Mayuri Digalwar",
        "Five Day Workshop on 'Blockchain Technology and Innovation' from 13th to 17th Mar 2023 - Coordinator Dr. Vrinda Yadav",
        "One Day Workshop (Online) on 'How to Plan a Startup-Legal and Ethical Steps' on 5th April 2023 - Coordinator Dr. Richa Makhijani"
      ]
    },
    {
      year: "2022",
      details: [
        "STTP on 'Fundamental of Deep Learning: Dive into Deep Learning' from 14th to 21st March 2022 - Sponsored by AICTE-QIP Scheme - Coordinator Dr. Jitendra Tembhurne",
        "One Day Seminar on 'Practical Aspects of Distributed Computing in Industry' on 4th Nov 2022 - Coordinator Dr. Milind Penurkar"
      ]
    },
    {
      year: "2021",
      details: [
        "Five Day Seminar on 'Parallel and Distributed Deep Learning' from 28th June to 2nd July 2021 - Coordinator Dr. Milind Penurkar"
      ]
    },
    {
      year: "2020",
      details: [
        "FDP on 'Data Science & Analytics Using Python' from 30th Nov to 4th Dec 2020 - Sponsored by AICTE Under ATAL Workshop Scheme - Coordinator Dr. Jitendra Tembhurne",
        "9th Online Workshop (in India) for One Week on 'Data Science' from 25th May to 29th May 2020 - Sponsored by AICTE Under ATAL Workshop Scheme - Coordinator Dr. Pooja Jain",
        "8th Online Workshop (in India) for One Week on 'Artificial Intelligence' from 16th May to 20th May 2020 - Sponsored by AICTE Under ATAL Workshop Scheme - Coordinator Dr. Pooja Jain"
      ]
    },
    {
      year: "2019",
      details: [
        "One Week Workshop on 'Artificial Intelligence & Machine Learning' from 9th December to 13th December 2019 - Sponsored by AICTE Under ATAL Workshop Scheme - Coordinator Dr. Pooja Jain"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 lg:px-20">
      <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-10">CSE Events</h1>
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

export default CSEEvents;
