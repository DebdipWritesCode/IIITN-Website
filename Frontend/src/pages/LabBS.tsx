
const basicScienceLabs = [
  "Applied Science Lab",
  "Elements of Electrical Engineering Lab",
  "Nano SciTech Lab",
  "Graphics & Mechanics Lab",
  "Communication Lab",
  "Robotics Lab",
];

const Laboratory = () => {
  return (
    <div className="pt-24 px-10 font-montserrat mb-16">
      <h1 className="text-5xl font-semibold pb-6 text-center text-orange-800 hover:text-orange-900 transition-colors duration-300">
        Laboratory
      </h1>
      <p className="text-center text-lg text-gray-600 mb-6 hover:text-gray-700 transition-colors duration-300">
        The Laboratories of Basic Sciences provide a foundation for research, experimentation, and innovation. These labs are equipped with state-of-the-art facilities to support academic and research activities.
      </p>

      {/* Basic Sciences Labs Section */}
      <div className="mb-12 p-6 bg-orange-50 rounded-2xl shadow-md border border-orange-200 hover:shadow-lg hover:border-orange-300 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-orange-800 mb-4 text-center hover:text-orange-900 transition-colors duration-300">
          List of Laboratories of Basic Sciences
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {basicScienceLabs.map((lab, idx) => (
            <li key={idx} className="hover:text-gray-800 transition-colors duration-300">
              {lab}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Laboratory;