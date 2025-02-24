import React, { useState } from "react";

// Keeping Original Logos as Requested
import mess1 from "../assets/club_logos/elevate_logo.png";
import mess2 from "../assets/club_logos/elevate_logo.png";
import mess3 from "../assets/club_logos/elevate_logo.png";
import nightCanteen1 from "../assets/club_logos/elevate_logo.png";
import nightCanteen2 from "../assets/club_logos/elevate_logo.png";
import nightCanteen3 from "../assets/club_logos/elevate_logo.png";
import messMenuImg from "../assets/club_logos/elevate_logo.png";

const StudentMess: React.FC = () => {
  const messImages = [mess1, mess2, mess3];
  const nightCanteenImages = [nightCanteen1, nightCanteen2, nightCanteen3];

  const [messIndex, setMessIndex] = useState(0);
  const [nightIndex, setNightIndex] = useState(0);

  const nextMessImage = () => setMessIndex((prev) => (prev + 1) % messImages.length);
  const prevMessImage = () => setMessIndex((prev) => (prev - 1 + messImages.length) % messImages.length);

  const nextNightImage = () => setNightIndex((prev) => (prev + 1) % nightCanteenImages.length);
  const prevNightImage = () => setNightIndex((prev) => (prev - 1 + nightCanteenImages.length) % nightCanteenImages.length);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-montserrat">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-10 text-center shadow-lg">
        <h1 className="text-5xl font-bold">🍽️ Student Mess</h1>
        <p className="mt-2 text-lg font-medium">Delicious & Nutritious Meals Served Daily!</p>
      </header>

      {/* Mess Details */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-extrabold text-orange-700">Mess Facilities</h2>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          The student mess provides <strong>hygienic and tasty meals</strong> with a <strong>varied menu</strong> ensuring nutritional balance.  
          Open for **breakfast, lunch, supper, and dinner**. Enjoy <strong>weekend specials</strong> and <strong>festive meals</strong>!
        </p>
      </section>

      {/* Mess Image Gallery */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-4xl font-extrabold text-orange-700 text-center">Mess Gallery</h2>
        <div className="relative flex justify-center items-center mt-6 group">
          <button onClick={prevMessImage} className="absolute left-0 bg-gray-800 text-white px-4 py-3 rounded-full opacity-75 hover:opacity-100 transition">
            ◀
          </button>
          <img 
            src={messImages[messIndex]} 
            alt="Mess Image" 
            className="rounded-xl shadow-xl w-full max-w-lg transition-transform duration-500 hover:scale-105" 
          />
          <button onClick={nextMessImage} className="absolute right-0 bg-gray-800 text-white px-4 py-3 rounded-full opacity-75 hover:opacity-100 transition">
            ▶
          </button>
        </div>
      </section>

      {/* Mess Menu */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-orange-700 text-center">Weekly Mess Menu</h2>
        <div className="flex justify-center mt-6">
          <img 
            src={messMenuImg} 
            alt="Mess Menu" 
            className="shadow-xl rounded-lg w-full max-w-3xl transition duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Night Canteen */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-orange-700 text-center">🌙 Night Canteen</h2>
        <p className="text-lg text-gray-700 mt-4 text-center leading-relaxed">
          Open from <strong>11 PM to 3 AM</strong>, offering <strong>snacks, beverages, and late-night meals</strong> for students burning the midnight oil.
        </p>

        {/* Night Canteen Image Gallery */}
        <div className="relative flex justify-center items-center mt-6 group">
          <button onClick={prevNightImage} className="absolute left-0 bg-gray-800 text-white px-4 py-3 rounded-full opacity-75 hover:opacity-100 transition">
            ◀
          </button>
          <img 
            src={nightCanteenImages[nightIndex]} 
            alt="Night Canteen Image" 
            className="rounded-xl shadow-xl w-full max-w-lg transition-transform duration-500 hover:scale-105"
          />
          <button onClick={nextNightImage} className="absolute right-0 bg-gray-800 text-white px-4 py-3 rounded-full opacity-75 hover:opacity-100 transition">
            ▶
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gradient-to-r from-orange-600 to-orange-500 text-white mt-10 shadow-md">
        <p className="text-lg font-medium">© {new Date().getFullYear()} IIIT Nagpur | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default StudentMess;
