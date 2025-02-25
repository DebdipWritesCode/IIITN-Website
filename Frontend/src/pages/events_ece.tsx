import React from "react";

const ECEEvents = () => {
  const events = [
    {
      year: "2020",
      details: [
        "Tantrafiesta 2020",
        "AICTE - ATAL One Week Online Faculty Development Program (FDP) on 'Control Systems and Neuro-Fuzzy Applications' from 21st September to 25th September 2020 - Coordinator Dr. C. M. Sakode",
        "7th Online Workshop (in India) for One Week on 'Internet of Things' from 7th May to 11th May 2020 - Sponsored by AICTE Under ATAL Workshop Scheme - Coordinator Dr. Tapan Kumar Jain",
        "6th Online Workshop (in India) for One Week on 'Internet of Things' from 30th April to 4th May 2020 - Sponsored by AICTE Under ATAL Workshop Scheme - Coordinator Dr. Tapan Kumar Jain",
        "5th Online Workshop (in India) for One Week on 'Internet of Things' from 25th April to 29th April 2020 - Sponsored by AICTE Under ATAL Workshop Scheme - Coordinator Dr. Tapan Kumar Jain",
        "3rd Online Workshop (in India) for One Week on 'Data Science' from 18th April to 22nd April, 2020 - Sponsored by AICTE Under ATAL Workshop Scheme - Coordinator Dr. Tapan Kumar Jain",
        "1st Online Workshop (in India) for One Week on 'Internet of Things' from 6th April to 10th April 2020 - Sponsored by AICTE Under ATAL Workshop Scheme - Coordinator Dr. Tapan Kumar Jain"
      ]
    },
    {
      year: "2019",
      details: [
        "One Week Workshop on 'Internet of Things' from 16th December to 20th December 2019 - Sponsored by AICTE Under ATAL Workshop Scheme - Coordinator Dr. Tapan Kumar Jain"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 lg:px-20">
      <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-10">ECE Events</h1>
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

export default ECEEvents;
