import { useState } from "react";
import { CiCircleChevRight } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "../assets/heroImg.png";

const eventList = [
  { date: "FEB 26th" },
  { date: "FEB 27th" },
  { date: "FEB 28th" },
  { date: "MAR 24th" },
];

const eventCards = [
  { date: "Thu Oct 18, 2024", img: "https://via.placeholder.com/300" },
  { date: "Thu Oct 19, 2024", img: "https://via.placeholder.com/300" },
  { date: "Thu Oct 20, 2024", img: "https://via.placeholder.com/300" },
  { date: "Thu Oct 21, 2024", img: "https://via.placeholder.com/300" },
  { date: "Thu Oct 22, 2024", img: "https://via.placeholder.com/300" },
  { date: "Thu Oct 23, 2024", img: "https://via.placeholder.com/300" },
];

const Events = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNextEvents = () => {
    if (startIndex + 2 < eventCards.length) {
      setStartIndex(startIndex + 2);
    } else {
      setStartIndex(0);
    }
  };

  return (
    <div className="px-18 font-montserrat mt-[100px] mb-20">
      <h1 className="text-4xl font-semibold pb-2 text-left relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40%] after:h-1 after:bg-orange-600">
        Upcoming Events
      </h1>
      <div className="flex flex-col lg:flex-row gap-12 mt-4">
        <div className="w-full lg:w-1/3 mt-6">
          {eventList.map((event, index) => (
            <div key={index} className="flex items-center space-x-4 mb-4 gap-3">
              <div className="bg-gray-900 text-white px-4 py-2 rounded-md text-center w-36">
                <span className="block font-bold">
                  {event.date.split(" ")[0]}
                </span>
                <span className="block text-sm">
                  {event.date.split(" ")[1]}
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/3 flex gap-6 relative">
          <AnimatePresence mode="wait">
            {eventCards.slice(startIndex, startIndex + 2).map((event) => (
              <motion.div
                key={event.date}
                className="bg-white rounded-lg shadow-lg overflow-hidden w-[400px]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={heroImg}
                  alt="Event"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">{event.date}</p>
                  <h2 className="text-lg font-bold">EVENT NAME</h2>
                  <p className="text-gray-700 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <a
                    href="#"
                    className="text-red-500 text-sm font-semibold mt-3 inline-flex items-center"
                  >
                    Read more <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <button
            onClick={handleNextEvents}
            className="cursor-pointer max-h-max absolute right-0 top-1/2 transform -translate-y-1/2"
          >
            <CiCircleChevRight size={36} className="hover:bg-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
