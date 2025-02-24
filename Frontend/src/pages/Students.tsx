import { useState } from "react";
import {
  FaRunning,
  FaPalette,
  FaLanguage,
  FaMicrochip,
  FaMusic,
} from "react-icons/fa";

interface Event {
  id: number;
  title: string;
  date: string;
  category: "upcoming" | "past" | "all";
  image: string;
}

const eventsData: Event[] = [
  {
    id: 1,
    title: "Tech Fest",
    date: "29 March",
    category: "upcoming",
    image: "/images/techfest.jpg",
  },
  {
    id: 2,
    title: "Cultural Night",
    date: "15 April",
    category: "upcoming",
    image: "/images/cultural.jpg",
  },
  {
    id: 3,
    title: "Hackathon",
    date: "5 Feb",
    category: "past",
    image: "/images/hackathon.jpg",
  },
  {
    id: 4,
    title: "Music Concert",
    date: "22 Jan",
    category: "past",
    image: "/images/concert.jpg",
  },
];

const Students = () => {
  const [activeCategory, setActiveCategory] = useState<
    "upcoming" | "past" | "all"
  >("upcoming");
  const filteredEvents =
    activeCategory === "all"
      ? eventsData
      : eventsData.filter((event) => event.category === activeCategory);

  return (
    <div className="pt-24 font-montserrat px-20 mb-26">
      <h1 className="text-5xl font-semibold pb-2 text-left relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50%] after:h-1 after:bg-orange-600">
        Student Life
      </h1>

      <div className="flex gap-20">
        <p className="mt-6 text-lg text-gray-600">
          Explore a vibrant student life filled with engaging extracurricular
          activities and exciting events!
        </p>
        <img src="" alt="" />
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold">
          Extracurricular <span className="text-orange-600">Activities</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "Sports & Athletics",
              icon: <FaRunning />,
              color: "text-yellow-500",
            },
            {
              title: "Creative Clubs",
              icon: <FaPalette />,
              color: "text-pink-500",
            },
            {
              title: "Language Club",
              icon: <FaLanguage />,
              color: "text-purple-500",
            },
            {
              title: "Tech Clubs",
              icon: <FaMicrochip />,
              color: "text-blue-500",
            },
            {
              title: "Music & Performance",
              icon: <FaMusic />,
              color: "text-indigo-500",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
              <div className={`text-4xl ${activity.color} mb-4`}>
                {activity.icon}
              </div>
              <h3 className="text-xl font-semibold">{activity.title}</h3>
              <p className="text-gray-600 mt-2">
                Engage in various clubs and activities to enhance your skills.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-4xl font-bold">
          Events & <span className="text-blue-600">Celebrations</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Stay updated with the latest events and past celebrations.
        </p>

        <div className="flex justify-center gap-6 mt-8">
          {["upcoming", "past", "all"].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 text-lg font-semibold cursor-pointer ${
                activeCategory === category
                  ? "text-orange-600 border-b-4 border-orange-600"
                  : "text-gray-600"
              }`}
              onClick={() =>
                setActiveCategory(category as "upcoming" | "past" | "all")
              }>
              {category.charAt(0).toUpperCase() + category.slice(1)} Events
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-purple-800 text-white rounded-lg overflow-hidden shadow-lg w-80">
              <img
                src={event.image}
                alt={event.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm mt-1">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
