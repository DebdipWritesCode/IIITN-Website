import React from "react";
import { FaYoutube, FaNewspaper, FaImages, FaFilePdf } from "react-icons/fa";

interface ConvocationItem {
  title: string;
  links: { name: string; icon: JSX.Element; url: string }[];
}

const convocationData: ConvocationItem[] = [
  {
    title: "3rd Convocation - 2023",
    links: [
      { name: "Watch on YouTube", icon: <FaYoutube />, url: "https://youtube.com/yourlink" },
      { name: "UCN News", icon: <FaNewspaper />, url: "#" },
      { name: "24 INDIA News", icon: <FaNewspaper />, url: "#" },
      { name: "MISSION INDIA News", icon: <FaNewspaper />, url: "#" },
      { name: "Invitation", icon: <FaFilePdf />, url: "https://yourinvitationlink.com" },
    ],
  },
  {
    title: "1st Convocation",
    links: [
      { name: "Watch on YouTube", icon: <FaYoutube />, url: "https://youtube.com/yourlink" },
      { name: "UCN News", icon: <FaNewspaper />, url: "#" },
      { name: "DD Sahyadri News", icon: <FaNewspaper />, url: "#" },
      { name: "Invitation", icon: <FaFilePdf />, url: "https://yourinvitationlink.com" },
    ],
  },
];

const Convocation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-monsterrat">
      {/* Page Header */}
      <header className="bg-orange-600 text-white py-10 text-center shadow-md">
        <h1 className="text-4xl font-bold">🎓 Convocation</h1>
        <p className="mt-2 text-lg">Celebrate our graduates' remarkable achievements!</p>
      </header>

      {/* Convocation Cards */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {convocationData.map((convocation, index) => (
            <div
              key={index}
              className="p-6 border border-orange-300 rounded-2xl shadow-lg bg-orange-50 hover:bg-orange-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Title */}
              <h2 className="text-2xl font-semibold text-orange-700 text-center">{convocation.title}</h2>

              {/* Links */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {convocation.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white border border-orange-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-orange-600 text-2xl">{link.icon}</span>
                    <span className="text-gray-800 font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default Convocation;
