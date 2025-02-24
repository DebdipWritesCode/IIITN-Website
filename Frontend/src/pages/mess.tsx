import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Sample Mess Images (Replace with real images)
import mess1 from "../assets/mess/mess1.jpg";
import mess2 from "../assets/mess/mess2.jpg";
import mess3 from "../assets/mess/mess3.jpg";
import nightCanteen1 from "../assets/mess/night1.jpg";
import nightCanteen2 from "../assets/mess/night2.jpg";
import nightCanteen3 from "../assets/mess/night3.jpg";
import messMenuImg from "../assets/mess/mess_menu.jpg";

const StudentMess: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-monsterrat">
      {/* Header */}
      <header className="bg-orange-600 text-white py-10 text-center shadow-md">
        <h1 className="text-4xl font-bold">🍽️ Student Mess</h1>
        <p className="mt-2 text-lg">Delicious & Nutritious Meals Served Daily!</p>
      </header>

      {/* Mess Details */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-orange-700 text-center">Mess Facilities</h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          The student mess provides **hygienic and tasty meals** with a **varied menu** ensuring nutritional balance.
          Open for breakfast, lunch, and dinner. Enjoy **weekend specials** and **occasional festive meals**!
        </p>
      </section>

      {/* Mess Photo Carousel */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold text-orange-700 text-center">Mess Gallery</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="mt-6 shadow-lg rounded-xl overflow-hidden">
          <div><img src={mess1} alt="Mess Hall" className="rounded-lg" /></div>
          <div><img src={mess2} alt="Food Serving" className="rounded-lg" /></div>
          <div><img src={mess3} alt="Dining Area" className="rounded-lg" /></div>
        </Carousel>
      </section>

      {/* Mess Menu Image */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-orange-700 text-center">Weekly Mess Menu</h2>
        <div className="flex justify-center mt-6">
          <img src={messMenuImg} alt="Mess Menu" className="shadow-lg rounded-lg w-full max-w-3xl" />
        </div>
      </section>

      {/* Night Canteen */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-orange-700 text-center">🌙 Night Canteen</h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          Open from **10 PM to 2 AM**, offering **snacks, beverages, and late-night meals** for students burning the midnight oil.
        </p>

        {/* Night Canteen Carousel */}
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="mt-6 shadow-lg rounded-xl overflow-hidden">
            <div><img src={nightCanteen1} alt="Night Canteen Area" className="rounded-lg" /></div>
            <div><img src={nightCanteen2} alt="Students at Night Canteen" className="rounded-lg" /></div>
            <div><img src={nightCanteen3} alt="Food at Night Canteen" className="rounded-lg" /></div>
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-orange-600 text-white mt-10">
        <p>© {new Date().getFullYear()} IIIT Nagpur | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default StudentMess;
