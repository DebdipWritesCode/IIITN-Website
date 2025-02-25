import React from "react";
import director from "../assets/Director.jpg"

const Director = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold" style={{ color: "#CE5923" }}>
            Director
          </h1>
        </header>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={director}
            alt="Dr. Prem Lal Patel"
            className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold" style={{ color: "#CE5923" }}>
              Dr. Prem Lal Patel
            </h2>
            <h3 className="text-xl font-medium">Director, IIIT Nagpur</h3>
            <p className="mt-4 font-semibold">Email: <a href="mailto:director@iiitn.ac.in" className="text-blue-600 hover:underline">director@iiitn.ac.in</a></p>
            <p className="mt-4 text-justify">
              Professor Prem Lal Patel, Director, VNIT, Nagpur took over the additional charge as
              Director of IIIT, Nagpur on 1st October, 2024. He is Professor (HAG) of Hydraulics and
              Water Resources in Department of Civil Engineering, Sardar Vallabhbhai National
              Institute of Technology (SVNIT), Surat. He served as Deputy Director of the Institute
              (SVNIT) during Sept 17, 2019 to Sept. 16, 2022. He worked as Dean (PG), Dean (R&C), Dean
              (Academic) and the Head, Dept. of Civil Engineering at SVNIT Surat. Prior to joining
              SVNIT in 2007, he served as Associate Professor, Civil Engineering Department in Delhi
              College of Engineering (now DTU) for eight years. Prior to working at DCE, he served as
              Assistant Executive Engineer (Civil) in Border Roads Organization (BRO), Ministry of Road
              Transport and Highways of India, Govt. of India from 1995-1999.
            </p>
            <p className="mt-4 text-justify">
              He did his Bachelors in Civil Engineering from Government Engineering College, Rewa,
              Madhya Pradesh, India and then, pursued his Master and Doctoral Degrees in Civil
              Engineering from Indian Institute of Technology Roorkee, India (the then University of Roorkee).
            </p>
            <p className="mt-4 text-justify">
              His research areas include River Mechanics and Flood Control; Hydrological Modelling and
              optimization of water systems; and Impact of climate change on water resources system.
              He guided 14 Doctoral Theses, 49 Master Theses and executed more than six high-value
              sponsored research projects and more than 25 Consultancy Projects. He has more than 260
              papers in peer-reviewed journals and conferences of repute. He is a member of various
              Technical Societies and Expert Committees. Prof. Patel visited various countries like the
              United States of America, Netherlands, China, Italy, Japan, and Dubai for presenting his research work.
            </p>
            <p className="mt-4 text-justify">
              He was earlier in the climate change working group of IAHR dealing with Fluvial
              Mechanism. He is also a Fellow member of the Indian Society for Hydraulics, Indian Water
              Resources Society, and Institution of Civil Engineers, India. He has been instrumental in
              setting up a Centre of Excellence (CoE) on Water Resources & Flood Management in SVNIT Surat
              through research grants from the World Bank-sponsored TEQIP-II.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
