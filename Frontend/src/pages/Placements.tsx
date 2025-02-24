import Companies from "../assets/academics/Companies.jpg";
import PlacementGraphs from "../components/PlacementGraphs";

const Placements = () => {
  const placementData2024 = {
    batchYear: 2024,
    highestPackage: 47,
    secondHighest: 45,
    thirdHighest: 44.92,
    above20LpaCount: 18,
    totalCompanies: 154,
    branches: [
      { name: "CSE", percentage: 80, color: "#007bff" },
      { name: "ECE", percentage: 20, color: "#c084fc" },
    ],
  };

  const placementData2023 = {
    batchYear: 2023,
    highestPackage: 42,
    secondHighest: 40,
    thirdHighest: 39.5,
    above20LpaCount: 12,
    totalCompanies: 140,
    branches: [
      { name: "CSE", percentage: 75, color: "#007bff" },
      { name: "ECE", percentage: 25, color: "#c084fc" },
    ],
  };

  const placementData2022 = {
    batchYear: 2022,
    highestPackage: 38,
    secondHighest: 35,
    thirdHighest: 34.2,
    above20LpaCount: 9,
    totalCompanies: 130,
    branches: [
      { name: "CSE", percentage: 70, color: "#007bff" },
      { name: "ECE", percentage: 30, color: "#c084fc" },
    ],
  };

  return (
    <div className="pt-24 font-montserrat px-20 mb-26">
      <h1 className="text-5xl font-semibold pb-2 text-left relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50%] after:h-1 after:bg-orange-600">
        Placements
      </h1>

      <div className="flex gap-20">
        <p className="mt-6 text-lg text-gray-600 text-justify">
          At IIITN, the Training & Placement Office is of strategic importance.
          It takes various initiatives to transform the students into smart
          workforce. The T&P Office believes in providing quality internships
          and placements to all its students. Consistent efforts are made to
          collaborate with the leading organizations for joint technological
          development and research initiatives, internships and placements. It
          acts as a Resource Centre, where students get information about
          various training programmes, online courses, internships and projects
          at various Govt Organizations in India. The T&P office is headed by
          the Sr. Office Associate T&P  Dr. Meera Jgadale, and supported by
          faculty In-charge Dr. Paritosh Peshwe and student representatives.
        </p>
        <img src="" alt="" />
      </div>

      <h2 className="font-bold text-center mb-20 text-4xl mt-20">
        Our Recruiters
      </h2>

      <div className="flex justify-center items-center">
        <img
          src={Companies}
          alt="Companies"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <h2 className="font-bold text-center mb-20 text-4xl mt-20">
        Placement Statistics
      </h2>

      <div className="space-y-16">
        <PlacementGraphs data={placementData2024} />

        <PlacementGraphs data={placementData2023} />

        <PlacementGraphs data={placementData2022} />
      </div>
    </div>
  );
};

export default Placements;