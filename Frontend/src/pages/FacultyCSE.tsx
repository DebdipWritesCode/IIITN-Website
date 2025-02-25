import { useState } from "react";

const facultyList = [
  {
    name: "Dr. John Doe",
    designation: "Professor, CSE Department",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Jane Smith",
    designation: "Assistant Professor, CSE Department",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Alan Brown",
    designation: "Professor, AI & ML",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Emily White",
    designation: "Head of Department, Data Science",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Michael Green",
    designation: "Professor, Cybersecurity",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Sophia Martinez",
    designation: "Associate Professor, Software Engineering",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Daniel Lee",
    designation: "Assistant Professor, Cloud Computing",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Olivia Brown",
    designation: "Professor, Blockchain Technology",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. William Taylor",
    designation: "Head of Department, Artificial Intelligence",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Ava Wilson",
    designation: "Professor, Human-Computer Interaction",
    image: "https://via.placeholder.com/150",
  },
];

const FacultyCSE = () => {
  return (
    <div className="pt-24 px-20 font-montserrat">
      <h1 className="text-5xl font-semibold pb-2 text-left relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50%] after:h-1 after:bg-orange-600">
        Our Faculty - CSE
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {facultyList.map((faculty, index) => (
          <div
            key={index}
            className="bg-orange-50 p-6 rounded-2xl shadow-md border border-orange-200 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-105"
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-32 h-32 object-cover mx-auto rounded-full border-4 border-orange-500"
            />
            <h3 className="text-xl font-bold text-orange-700 text-center mt-4">
              {faculty.name}
            </h3>
            <p className="text-gray-600 text-center mt-2">{faculty.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyCSE;