import React from "react";
import { FaRegClock, FaEnvelope, FaPhoneAlt, FaUserMd } from "react-icons/fa";

const ClinicalCounseling: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-orange-600 text-white py-14 text-center shadow-md">
        <h1 className="text-5xl font-extrabold">🩺 Clinical Counseling</h1>
        <p className="mt-2 text-lg font-medium">
          Mental well-being matters. Get the support you need!
        </p>
      </header>

      {/* Counseling Details */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-orange-700 text-center mb-6">
          Counseling Availability
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4">
            <FaRegClock className="text-orange-600 text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">In-Person Sessions</h3>
              <p className="text-lg text-gray-600 mt-2">
                <strong>Time:</strong> 4:30 PM - 6:30 PM <br />
                <strong>Days:</strong> Tuesday, Wednesday & Thursday
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4">
            <FaUserMd className="text-orange-600 text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Online Counseling</h3>
              <p className="text-lg text-gray-600 mt-2">
                Available anytime via email or phone for support and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-orange-700 mb-6">Get in Touch</h2>
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-orange-600 text-3xl" />
            <p className="text-lg text-gray-700 font-medium">counselor@iiitn.ac.in</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-orange-600 text-3xl" />
            <p className="text-lg text-gray-700 font-medium">+91 9970303386</p>
          </div>
          <p className="text-sm text-orange-600 font-semibold mt-4">
            📌 Note: This number is for clinical counseling only, not for admission-related inquiries.
          </p>
        </div>
      </section>

    </div>
  );
};

export default ClinicalCounseling;
