const ongoingProjects = [
    {
      faculty: "Dr. Rashmi A. Pandhare",
      title: "Design and Development of Broadband Radome for high temperature and Pressure with low insertion losses for Airborne application",
      amount: "₹6,087,000",
      endDate: "April-2026",
      agency: "DRDO",
    },
    {
      faculty: "Dr. Nikhil Agrawal",
      title: "Development of a two-stage e-waste segregation system using transfer learning",
      amount: "₹1,183,000",
      endDate: "December-2026",
      agency: "Ministry of Mine",
    },
    {
      faculty: "Dr. Nikhil Agrawal and Dr. Sushmita Dandeliya",
      title: "Advanced Hilbert Transformer Design for High-Fidelity Real-Time Signal Analysis",
      amount: "₹2,559,000",
      endDate: "January-2027",
      agency: "SERB-DST",
    },
  ];
  
  const completedProjects = [
    {
      faculty: "Dr. Mayur R. Parate",
      title: "Development of The Device “Drishtidarpan” to Screen Diabetic Patient Using Pupillometry",
      amount: "₹250,000",
      endDate: "December-2023",
      agency: "NewGen IEDC, NSTEDB, DST",
    },
    {
      faculty: "Dr. Tapan Kumar Jain",
      title: "Comparison of TA Algorithm for INS and Augmenting these algorithms using AI/ML",
      amount: "₹750,000",
      endDate: "September-2023",
      agency: "DRDO",
    },
    {
      faculty: "Dr. Rashmi A. Pandhare",
      title: "Design and Development of High Gain Reconfigurable wideband Printed Antennas",
      amount: "₹3,442,000",
      endDate: "March-2022",
      agency: "SERB",
    },
    {
      faculty: "Dr. Rashmi A. Pandhare",
      title: "Design and Development of a Mobile App Interface and a Smart Wearable Device for Awareness, Tracking and Smart Wearable Device for Awareness, Tracking and Alerting the Citizens to Inculcate Improved Risk Understanding",
      amount: "₹1,382,000",
      endDate: "September-2023",
      agency: "DST",
    },
  ];
  
  const Projects = () => {
    return (
      <div className="pt-24 px-10 font-montserrat">
        <h1 className="text-5xl font-semibold pb-6 text-center text-orange-700">
          Projects
        </h1>
  
        <p className="text-center text-lg text-gray-600 mb-6">
          The department of ECE is dedicated to executing projects in various domains.
        </p>
  
        {/* Ongoing Projects */}
        <section>
          <h2 className="text-3xl font-semibold pb-3 text-blue-600">Ongoing Projects</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-blue-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3 border border-blue-300">Sr. No</th>
                  <th className="px-4 py-3 border border-blue-300">Faculty</th>
                  <th className="px-4 py-3 border border-blue-300">Project Title</th>
                  <th className="px-4 py-3 border border-blue-300">End Date</th>
                  <th className="px-4 py-3 border border-blue-300">Funding Organization</th>
                  <th className="px-4 py-3 border border-blue-300">Funding (₹)</th>
                </tr>
              </thead>
              <tbody>
                {ongoingProjects.map((project, index) => (
                  <tr key={index} className="bg-blue-50 even:bg-white hover:bg-blue-100">
                    <td className="px-4 py-3 border border-blue-300 text-center">{index + 1}</td>
                    <td className="px-4 py-3 border border-blue-300">{project.faculty}</td>
                    <td className="px-4 py-3 border border-blue-300">{project.title}</td>
                    <td className="px-4 py-3 border border-blue-300 text-center">{project.endDate}</td>
                    <td className="px-4 py-3 border border-blue-300">{project.agency}</td>
                    <td className="px-4 py-3 border border-blue-300 text-right pr-4">{project.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
  
        {/* Completed Projects */}
        <section className="mt-10 mb-16">
          <h2 className="text-3xl font-semibold pb-3 text-green-600">Completed Projects</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-green-300">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-3 border border-green-300">Sr. No</th>
                  <th className="px-4 py-3 border border-green-300">Faculty</th>
                  <th className="px-4 py-3 border border-green-300">Project Title</th>
                  <th className="px-4 py-3 border border-green-300">End Date</th>
                  <th className="px-4 py-3 border border-green-300">Funding Organization</th>
                  <th className="px-4 py-3 border border-green-300">Funding (₹)</th>
                </tr>
              </thead>
              <tbody>
                {completedProjects.map((project, index) => (
                  <tr key={index} className="bg-green-50 even:bg-white hover:bg-green-100">
                    <td className="px-4 py-3 border border-green-300 text-center">{index + 1}</td>
                    <td className="px-4 py-3 border border-green-300">{project.faculty}</td>
                    <td className="px-4 py-3 border border-green-300">{project.title}</td>
                    <td className="px-4 py-3 border border-green-300 text-center">{project.endDate}</td>
                    <td className="px-4 py-3 border border-green-300">{project.agency}</td>
                    <td className="px-4 py-3 border border-green-300 text-right pr-4">{project.amount}</td>
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