const sponsoredProjects = [
  {
    faculty: "Dr. Nishat A. Ansari, Dr. Aatish Daryapurkar",
    title: "Printing Automation",
    year: "2024",
    agency: "IIIT Nagpur",
    amount: "₹20,000",
  },
  {
    faculty: "Dr. Pooja Jain (PI)",
    title: "Processing Voice Signals",
    year: "2024-25",
    agency: "Ministry of Home Affairs",
    amount: "₹1,000,000",
  },
];

const completedProjects = [
  {
    faculty: "Dr. Mayuri A. Digalwar",
    title:
      "Design and Development of a Mobile App Interface and a Smart Wearable Device for Awareness, Tracking and Alerting the Citizens to inculcate Improved Risk Understanding",
    year: "2021-2022",
    agency: "DST",
    amount: "₹1,382,400",
  },
  {
    faculty: "Dr. Nishat A. Ansari",
    title: "Smart Face Mask Detection System",
    year: "2021-2022",
    agency: "IIIT Nagpur",
    amount: "₹28,000",
  },
  {
    faculty: "Dr. Pooja Jain",
    title:
      "Comparison of Transfer Alignment Algorithms for Inertial Navigation Systems and Augmenting these Algorithms using AI/ML",
    year: "2021-2022",
    agency: "DRDO",
    amount: "₹450,000",
  },
  {
    faculty: "Dr. Jitendra Tembhurne",
    title: "New Authentication Techniques for Telecare Medicine Information System",
    year: "2020-2021",
    agency: "SERB India",
    amount: "₹1,259,600",
  },
];

const consultancyProjects = [
  {
    faculty: "Dr. Nileshchandra Pikle",
    title: "CUDA Programming Training",
    year: "06/06/2023",
    agency: "PORT 23 Pvt. Ltd.",
    amount: "₹135,682",
  },
  {
    faculty: "Dr. Nileshchandra Pikle",
    title: "CUDA Programming Training",
    year: "15/06/2024",
    agency: "Mercedes-Benz Research & Development India (Through Alchemy Solutions)",
    amount: "₹224,200",
  },
  {
    faculty: "Dr. Nileshchandra Pikle",
    title: "CUDA Programming Training",
    year: "16/09/2024",
    agency: "Mercedes-Benz Research & Development India (Through Alchemy Solutions)",
    amount: "₹362,351",
  },
];

const Projects = () => {
  return (
    <div className="pt-24 px-10 font-montserrat">
      <h1 className="text-5xl font-semibold pb-6 text-center text-orange-700">
        Projects
      </h1>

      <p className="text-center text-lg text-gray-600 mb-6">
        The department of CSE is dedicated to executing projects in various domains.
      </p>

      {/* Sponsored Projects */}
      <section>
        <h2 className="text-3xl font-semibold pb-3 text-orange-600">
          Sponsored Projects
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-orange-300">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="px-4 py-3 border border-orange-300">Sr. No</th>
                <th className="px-4 py-3 border border-orange-300">Faculty</th>
                <th className="px-4 py-3 border border-orange-300">Project Title</th>
                <th className="px-4 py-3 border border-orange-300">Year</th>
                <th className="px-4 py-3 border border-orange-300">Sponsoring Agency</th>
                <th className="px-4 py-3 border border-orange-300">Funding (₹)</th>
              </tr>
            </thead>
            <tbody>
              {sponsoredProjects.map((project, index) => (
                <tr key={index} className="bg-orange-50 even:bg-white hover:bg-orange-100">
                  <td className="px-4 py-3 border border-orange-300 text-center">{index + 1}</td>
                  <td className="px-4 py-3 border border-orange-300">{project.faculty}</td>
                  <td className="px-4 py-3 border border-orange-300">{project.title}</td>
                  <td className="px-4 py-3 border border-orange-300 text-center">{project.year}</td>
                  <td className="px-4 py-3 border border-orange-300">{project.agency}</td>
                  <td className="px-4 py-3 border border-orange-300 text-right pr-4">{project.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold pb-3 text-green-600">
          Completed Projects
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-green-300">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3 border border-green-300">Sr. No</th>
                <th className="px-4 py-3 border border-green-300">Faculty</th>
                <th className="px-4 py-3 border border-green-300">Project Title</th>
                <th className="px-4 py-3 border border-green-300">Year</th>
                <th className="px-4 py-3 border border-green-300">Sponsoring Agency</th>
                <th className="px-4 py-3 border border-green-300">Funding (₹)</th>
              </tr>
            </thead>
            <tbody>
              {completedProjects.map((project, index) => (
                <tr key={index} className="bg-green-50 even:bg-white hover:bg-green-100">
                  <td className="px-4 py-3 border border-green-300 text-center">{index + 1}</td>
                  <td className="px-4 py-3 border border-green-300">{project.faculty}</td>
                  <td className="px-4 py-3 border border-green-300">{project.title}</td>
                  <td className="px-4 py-3 border border-green-300 text-center">{project.year}</td>
                  <td className="px-4 py-3 border border-green-300">{project.agency}</td>
                  <td className="px-4 py-3 border border-green-300 text-right pr-4">{project.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Consultancy Projects */}
      <section className="mt-10 mb-16">
        <h2 className="text-3xl font-semibold pb-3 text-purple-600">
          Consultancy Projects
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-purple-300">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="px-4 py-3 border border-purple-300">Sr. No</th>
                <th className="px-4 py-3 border border-purple-300">Faculty</th>
                <th className="px-4 py-3 border border-purple-300">Project Title</th>
                <th className="px-4 py-3 border border-purple-300">Year</th>
                <th className="px-4 py-3 border border-purple-300">Sponsoring Agency</th>
                <th className="px-4 py-3 border border-purple-300">Funding (₹)</th>
              </tr>
            </thead>
            <tbody>
              {consultancyProjects.map((project, index) => (
                <tr key={index} className="bg-purple-50 even:bg-white hover:bg-purple-100">
                  <td className="px-4 py-3 border border-purple-300 text-center">{index + 1}</td>
                  <td className="px-4 py-3 border border-purple-300">{project.faculty}</td>
                  <td className="px-4 py-3 border border-purple-300">{project.title}</td>
                  <td className="px-4 py-3 border border-purple-300 text-center">{project.year}</td>
                  <td className="px-4 py-3 border border-purple-300">{project.agency}</td>
                  <td className="px-4 py-3 border border-purple-300 text-right pr-4">{project.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Projects;