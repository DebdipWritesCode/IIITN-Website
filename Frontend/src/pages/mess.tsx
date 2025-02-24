import React from "react";
import messMenuImg from "../assets/mess/mess_menu.png";
import messPhoto1 from "../assets/mess/mess1.jpeg";
import messPhoto2 from "../assets/mess/mess2.jpg";
import messPhoto3 from "../assets/mess/mess3.jpg";
import nightCanteenPhoto1 from "../assets/mess/night_canteen1.jpg";
import nightCanteenPhoto2 from "../assets/mess/night_canteen2.jpg";

const StudentMess: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Header */}
            <header className="bg-orange-600 text-white py-14 text-center shadow-md">
                <h1 className="text-5xl font-extrabold">🍽️ Student Dining Hall</h1>
                <p className="mt-2 text-lg font-medium">
                    Healthy, delicious, and diverse meals served daily!
                </p>
            </header>

            {/* Mess Details */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-orange-700 text-center mb-6">
                    Our Dining Experience
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-800">🍛 Quality Meals</h3>
                        <p className="text-lg text-gray-600 mt-2">
                            Our dining hall serves breakfast, lunch, supper, and dinner with
                            a well-balanced menu, ensuring proper nutrition and variety.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-800">🌿 Healthy & Hygienic</h3>
                        <p className="text-lg text-gray-600 mt-2">
                            Meals are prepared with high hygiene standards and fresh
                            ingredients, promoting student well-being.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-800">🍽️ Diverse Menu</h3>
                        <p className="text-lg text-gray-600 mt-2">
                            Enjoy weekend specials and festive meals inspired by
                            diverse cuisine.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-800">🥗 Dietary Preferences</h3>
                        <p className="text-lg text-gray-600 mt-2">
                            Vegetarian, Jain, and other dietary options are available to cater
                            to everyone's needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mess Photos */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-orange-700 text-center">
                    Mess Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                    <img
                        src={messPhoto1}
                        alt="Mess Hall 1"
                        className="rounded-lg shadow-lg w-96 h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                    <img
                        src={messPhoto2}
                        alt="Mess Hall 2"
                        className="rounded-lg shadow-lg w-96 h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                    <img
                        src={messPhoto3}
                        alt="Mess Hall 3"
                        className="rounded-lg shadow-lg w-96 h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </section>

            {/* Mess Menu */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-orange-700 text-center">
                    Weekly Mess Menu
                </h2>
                <div className="flex justify-center mt-6">
                    <img
                        src={messMenuImg}
                        alt="Mess Menu"
                        className="shadow-lg rounded-lg h-[600px] object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </section>

            {/* Night Canteen */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-orange-700 text-center mb-6">
                    🌙 Night Canteen
                </h2>
                <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">Late Night Meals</h3>
                    <p className="text-lg text-gray-600 mt-2">
                        Open from <strong>11 PM to 3 AM</strong>, serving snacks, beverages, and meals for
                        students studying late.
                    </p>
                </div>
            </section>

            {/* Night Canteen Photos */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-orange-700 text-center">
                    Night Canteen Gallery
                </h2>
                <div className="flex flex-wrap justify-center gap-20 mt-6">
                    <img
                        src={nightCanteenPhoto1}
                        alt="Night Canteen 1"
                        className="rounded-lg shadow-lg w-96 h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                    <img
                        src={nightCanteenPhoto2}
                        alt="Night Canteen 2"
                        className="rounded-lg shadow-lg w-96 h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                </div>

            </section>
        </div>
    );
};

export default StudentMess;