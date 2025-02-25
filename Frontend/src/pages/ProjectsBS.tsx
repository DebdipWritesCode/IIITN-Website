const projects = [
    {
      faculty: "Dr. Aatish S. Daryapurkar",
      title: "Electrospinning of lead free NBTBT6 based materials for sensors and energy harvesting applications",
      agency: "SERB-DST",
      amount: "₹27.26 Lakh",
    },
    {
      faculty: "Dr. Aatish S. Daryapurkar",
      title: "Synthesis of Curcumin-PLGA Nanofiber using Electrospinning techniques and to evaluate the efficacy of CU-PLGA nanofiber mat in GAgP patient",
      agency: "New Gen IEDC, DMIMS",
      amount: "₹2.50 Lakh",
    },
    {
      faculty: "Prasad V. Joshi",
      title: "Analytical and experimental studies on the dynamic characteristics of submerged perforated plates",
      agency: "DST SERB",
      amount: "₹35.46 Lakh",
    },
    {
      faculty: "Prasad V. Joshi",
      title: "Modernization of IC engines lab with experiments on data acquisition",
      agency: "AICTE - Completed",
      amount: "₹12.0 Lakh",
    },
    {
      faculty: "Prasad V. Joshi",
      title: "Upgradation of Vibration lab using FFT analyser",
      agency: "AICTE - Completed",
      amount: "₹7.0 Lakh",
    },
  ];
  
  const Projects = () => {
    return (
      <div className="pt-24 px-10 font-montserrat mb-16">
        <h1 className="text-5xl font-semibold pb-6 text-center text-orange-700">Projects</h1>
        <p className="text-center text-lg text-gray-600 mb-6">
          The department is actively involved in research and modernization projects funded by various agencies.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-orange-300">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="px-4 py-3 border border-orange-300">Sr. No</th>
                <th className="px-4 py-3 border border-orange-300">Faculty</th>
                <th className="px-4 py-3 border border-orange-300">Project Title</th>
                <th className="px-4 py-3 border border-orange-300">Funding Agency</th>
                <th className="px-4 py-3 border border-orange-300">Funding (₹)</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className="bg-orange-50 even:bg-white hover:bg-orange-100">
                  <td className="px-4 py-3 border border-orange-300 text-center">{index + 1}</td>
                  <td className="px-4 py-3 border border-orange-300">{project.faculty}</td>
                  <td className="px-4 py-3 border border-orange-300">{project.title}</td>
                  <td className="px-4 py-3 border border-orange-300">{project.agency}</td>
                  <td className="px-4 py-3 border border-orange-300 text-right pr-4">{project.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Projects;
      
  