import React from "react";
import registrar_img from "../assets/registrar.jpg"

const Registrar = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold" style={{ color: "#CE5923" }}>
            Registrar
          </h1>
        </header>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={registrar_img} 
            alt="Shri Kailas N. Dakhale"
            className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold" style={{ color: "#CE5923" }}>
              Shri Kailas N. Dakhale
            </h2>
            <h3 className="text-xl font-medium">Registrar, IIIT Nagpur</h3>
            <p className="mt-4 font-semibold">Email: <a href="mailto:registrar@iiitn.ac.in" className="text-blue-600 hover:underline">registrar@iiitn.ac.in</a></p>
            <p className="mt-2 font-semibold">Contact No: 9421995010</p>
            <p className="mt-4 text-justify">
              An engineer by education and an able administrator with more than 30 years of experience,
              Shri Kailas N. Dakhale has significantly contributed to Central Autonomous Bodies (CABs) like
              Indian Institute of Technology, Kanpur, Visvesvaraya National Institute of Technology, Nagpur,
              and Indian Institute of Information Technology, Nagpur for the last two decades.
            </p>
            <p className="mt-4 text-justify">
              He has vast experience in the administration of Higher Educational Institutions under the
              Ministry of Education, Government of India. His expertise in identifying and resolving academic
              and administrative issues has been recognized on multiple occasions.
            </p>
            <p className="mt-4 text-justify">
              Throughout his career, he has worked in various departments, including Stores Purchase,
              Personnel Administration, Estate Management, Training & Placement, Hostel Management,
              Academic and Examination Departments, and more. His liaison with Central/State Government
              Authorities and Industry has been invaluable.
            </p>
            <p className="mt-4 text-justify">
              After serving IIT Kanpur for 14 years as Deputy Registrar, he joined VNIT Nagpur as Joint
              Registrar, where he was recognized for his excellent communication and interpersonal skills.
              He also worked in the industry for about seven years, handling various matters related to
              industrial workers.
            </p>
            <p className="mt-4 text-justify">
              He later joined IIIT Nagpur as I/c Registrar and became Registrar on 7th October 2020.
              He continues to contribute to the management of Higher Educational Institutions as a
              member of various Selection, Review, and Scrutiny Committees across institutions like IIT
              Jodhpur, IISER Bhopal, Central University Hyderabad, and many others.
            </p>
            <p className="mt-4 text-justify">
              Additionally, he has contributed to the establishment of IIITDM Jabalpur and IIT Jodhpur,
              further strengthening his legacy in the academic administration domain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrar;