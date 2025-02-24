import React from "react";
import elevate from "../assets/club_logos/elevate_logo.png";
import dotslash from "../assets/club_logos/DotSlash_logo.png";
import crispr from "../assets/club_logos/crispr_logo.png";
import iotics from "../assets/club_logos/iotics_logo.png";
import strokes from "../assets/club_logos/strokes_logo.png";
import udyam from "../assets/club_logos/elevate_logo.png";
import orator from "../assets/club_logos/orator_logo black.png";
import dimensions from "../assets/club_logos/dimensions_logo.png";
import estoria from "../assets/club_logos/elevate_logo.png";
import dtaraxia from "../assets/club_logos/dtraxia_logo black.png";
import crescendo from "../assets/club_logos/crescendo_logo black.png";
import probe from "../assets/club_logos/probe_logo.png";

interface Club {
  name: string;
  description: string;
  logo: string;
}

const clubsData: Club[] = [
  { name: "Elevate", description: "Development and Tech Innovations Club", logo: elevate },
  { name: "Dotslash", description: "Coding and Competitive Programming Club", logo: dotslash },
  { name: "Crispr", description: "Technical Club of college focusing on cybersecurity", logo: crispr },
  { name: "Iotics Club", description: "Building and programming intelligent robots", logo: iotics },
  { name: "Strokes", description: "Creative design, UI/UX, and digital arts.", logo: strokes },
  { name: "Udyam", description: "Entrepreneurship and startup ecosystem.", logo: udyam },
  { name: "Orator Club", description: "Public speaking, debates, and communication.", logo: orator },
  { name: "Dimensions", description: "Game Development Club", logo: dimensions },
  { name: "Estoria", description: "Drama Club", logo: estoria },
  { name: "D-Taraxia", description: "Dance Club", logo: dtaraxia },
  { name: "Crescendo", description: "Music Club", logo: crescendo },
  { name: "Probe", description: "Photograpy and Videography Club", logo: probe },
];

const Clubs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-monsterrat">
      {/* Page Header */}
      <header className="bg-orange-600 text-white py-10 text-center shadow-md">
        <h1 className="text-4xl font-bold">Explore Our Clubs</h1>
        <p className="mt-2 text-lg">Find your passion and connect with like-minded individuals!</p>
      </header>

      {/* Club Cards Section */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubsData.map((club, index) => (
            <div
              key={index}
              className="p-6 border border-orange-300 rounded-2xl shadow-lg bg-orange-50 hover:bg-orange-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Club Logo */}
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  src={club.logo}
                  alt={`${club.name} Logo`}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              {/* Club Info */}
              <h2 className="text-2xl font-semibold text-orange-700 text-center">{club.name}</h2>
              <p className="mt-2 text-gray-700 text-center">{club.description}</p>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default Clubs;