import React from "react";

const BasicSciencesDepartment = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#CE5923] mb-6">
            Department of Basic Sciences
          </h1>
          <p className="text-lg text-gray-700 mt-8">
            Our faculty members have extensive expertise in diverse research
            fields.
          </p>
        </header>

        {/* Faculty List */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#CE5923] mb-4">
            Faculty Members
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-medium text-blue-800">
                  {faculty.name}
                </h3>
                <p className="text-gray-600">{faculty.specialization}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Publications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#CE5923] mb-4">
            Research Publications
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            {researchAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </section>

        {/* Patents */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#CE5923] mb-4">
            Patents
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {patents.map((patent, index) => (
              <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-medium text-blue-800">
                  {patent.title}
                </h3>
                <p className="text-gray-600">Inventor: {patent.inventor}</p>
                <p className="text-gray-500">Status: {patent.status}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const facultyMembers = [
  {
    name: "Dr. Prasad V. Joshi",
    specialization: "Solid Mechanics/Vibration/Robotics",
  },
  {
    name: "Dr. Kirti Dorshetwar",
    specialization: "Literature/Communication/Humanities",
  },
  { name: "Dr. Charu Goel", specialization: "Mathematics" },
  { name: "Dr. Aatish Daryapurkar", specialization: "Applied Sciences" },
  {
    name: "Dr. Chandrashekhar Sakode",
    specialization: "Electrical Engineering",
  },
  { name: "Dr. Kamaljeet", specialization: "Mathematics" },
  { name: "Dr. Ujwal Warbe", specialization: "Mathematics" },
  { name: "Dr. Naresh Kumar", specialization: "Mathematics" },
  {
    name: "Dr. Madhuri Tayade",
    specialization: "Literature/Communication/Humanities",
  },
  { name: "Dr. Vikrant Dhenge", specialization: "Social Sciences" },
  { name: "Dr. Anup Kumar Rajak", specialization: "Mechanical" },
  { name: "Dr. Nishant Namdev", specialization: "Mathematics" },
  { name: "Dr. Pradeep Shende", specialization: "Mathematics" },
  { name: "Dr. Preeti", specialization: "Mathematics" },
  { name: "Dr. Shailesh Janbandhu", specialization: "Applied Sciences" },
];

const researchAreas = [
  "Applied Mathematics, Algebra, Numerical Analysis",
  "Material Science, Nanoscience and Nanotechnology",
  "Technology and culture intervention",
  "Solid Mechanics, Vibration, Computer Graphics, Robotics",
];

const patents = [
  {
    inventor: "Dr. Aatish Daryapurkar",
    title: "Automated Irrigation System",
    status: "Published",
  },
  {
    inventor: "Dr. Kirti Dorshetwar",
    title: "Integrating Social Media and Commerce",
    status: "Published",
  },
  {
    inventor:
      "Dr. Madhuri Tayade, Dr. Nirzar Kulkarni, Dr. Dinesh Kumar Mirkute, Dr Sujit Metre",
    title: "Device for Effective Supply Chain and Logistics Management",
    status: "Filed",
  },
  {
    inventor: "Prasad V. Joshi",
    title:
      "Flexible Boundary Condition Setup for Vibration of Rectangular Plates for All Sizes and Edge Conditions",
    status: "Granted",
  },
  {
    inventor:
      "Dr. Shaileshkumar Y. Janbandhu, Rupesh S. Gedam, Mrs. Shilpa R. Gedam",
    title:
      "Borosilicate Glass Composition Embedded with Cds/Tio2 Composites Forindigo Carmine Dye Degradation",
    status: "Granted",
  },
];

export default BasicSciencesDepartment;
