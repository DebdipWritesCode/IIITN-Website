import React from "react";
import { Link } from "react-router-dom";
import TantraFiestaImg from "../assets/tf.jpg";
import AbhivyaktiImg from "../assets/ab.jpg";
import SportsImg from "../assets/kshitij.jpg";

const activities = [
  { name: "National Level Technical Event: TantraFiesta", link: "#", image: TantraFiestaImg },
  { name: "National Level Cultural Event: Abhivyakti", link: "#", image: AbhivyaktiImg },
  { name: "Institute Annual Sports Gathering (IG): Institute Gathering", link: "#", image: SportsImg }
];

const ActivitiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-orange-600 text-white py-14 text-center shadow-md">
        <h1 className="text-5xl font-extrabold">🏆 Activities</h1>
        <p className="mt-2 text-lg font-medium">
          Engage in diverse events and enhance your campus experience!
        </p>
      </header>
      
      <div className="p-10">
        <p className="text-lg text-orange-700 text-center max-w-4xl mx-auto mb-8">
          For the growth of students in all areas of their interest, IIIT Nagpur encourages students from CSE and ECE to participate in various activities such as technical events, workshops, social outreach, sports, Swachh Bharat, entrepreneurship, internships, and more.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity, index) => (
            <Link 
              key={index} 
              to={activity.link} 
              className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-orange-400 transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="w-full h-80 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${activity.image})` }}></div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-orange-900 to-transparent p-6">
                <h2 className="text-xl font-bold text-white">{activity.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;