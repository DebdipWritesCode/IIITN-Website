import { useState } from "react";
import Director from "../assets/Director.jpg";

const msg = `Professor Prem Lal Patel, Director, VNIT, Nagpur, took over the additional charge as Director of IIIT, Nagpur on 1st October, 2024.\n\n

He is Professor (HAG) of Hydraulics and Water Resources in the Department of Civil Engineering, Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat. He served as Deputy Director of SVNIT from September 17, 2019, to September 16, 2022. Additionally, he has held key positions such as Dean (PG), Dean (R&C), Dean (Academic), and Head of the Civil Engineering Department at SVNIT Surat.\n\n

Prior to joining SVNIT in 2007, he served as Associate Professor in the Civil Engineering Department at Delhi College of Engineering (now DTU) for eight years. Before that, from 1995 to 1999, he worked as Assistant Executive Engineer (Civil) in the Border Roads Organization (BRO), Ministry of Road Transport and Highways, Government of India.\n\n

Dr. Patel completed his Bachelor's degree in Civil Engineering from Government Engineering College, Rewa, Madhya Pradesh. He then pursued his Master’s and Doctoral degrees in Civil Engineering from the Indian Institute of Technology Roorkee (formerly the University of Roorkee).\n\n

His research areas include:\n
- River Mechanics and Flood Control\n
- Hydrological Modeling and Optimization of Water Systems\n
- Impact of Climate Change on Water Resource Systems\n\n

He has guided 14 Doctoral Theses and 49 Master’s Theses and has successfully executed more than six high-value sponsored research projects and over 25 consultancy projects.\n\n

Dr. Patel has published over 260 papers in peer-reviewed journals and reputed conferences. He has been a member of various technical societies and expert committees and has represented India at conferences in countries like the United States, Netherlands, China, Italy, Japan, and Dubai.\n\n

Dr. Patel was previously part of the Climate Change Working Group of IAHR, dealing with Fluvial Mechanics.\n\n

He is a Fellow Member of:\n
- Indian Society for Hydraulics\n
- Indian Water Resources Society\n
- Institution of Civil Engineers, India\n\n

He played a crucial role in establishing a Centre of Excellence (CoE) on Water Resources & Flood Management at SVNIT Surat, funded by a research grant from the World Bank-sponsored TEQIP-II.\n\n

Dr. Prem Lal Patel\n
Director, IIIT Nagpur`;

const msgParagraphs = msg.split("\n\n");

const DirectorMessage = () => {
  const [showFull, setShowFull] = useState(false);
  const displayedParagraphs = showFull ? msgParagraphs : msgParagraphs.slice(0, 7);

  return (
    <div className="flex font-montserrat gap-16 mt-10 px-20">
      <div className="flex flex-col gap-5 w-[70%]">
        <h1 className="text-4xl font-semibold pb-2 text-left relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40%] after:h-1 after:bg-orange-600">
          Director's Message
        </h1>
        <div className="text-justify">
          {displayedParagraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
              {index === displayedParagraphs.length - 1 && !showFull && (
                <button
                  className="text-orange-600 font-semibold hover:underline inline cursor-pointer ml-1"
                  onClick={() => setShowFull(true)}
                >
                  Read More
                </button>
              )}
              {index === msgParagraphs.length - 1 && showFull && (
                <button
                  className="text-orange-600 font-semibold hover:underline inline cursor-pointer ml-1"
                  onClick={() => setShowFull(false)}
                >
                  Read Less
                </button>
              )}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-semibold pb-2 text-left relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40%] after:h-1 after:bg-orange-600">
          Director of IIITN
        </h1>
        <img src={Director} alt="Director" className="h-[400px]" />
        <h4 className="text-center font-semibold text-lg">
          Dr. Prem Lal Patel
        </h4>
      </div>
    </div>
  );
};

export default DirectorMessage;
