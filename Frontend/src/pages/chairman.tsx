import React from "react";
import chairman from "../assets/chairman.jpeg"
const Chairman = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold" style={{ color: "#CE5923" }}>
            Chairman
          </h1>
        </header>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={chairman}
            alt="Shri Ravi Sharma"
            className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold" style={{ color: "#CE5923" }}>
              Shri Ravi Sharma
            </h2>
            <h3 className="text-xl font-medium">Chairman, BoG IIIT Nagpur</h3>
            <p className="mt-4 font-semibold">Email: <a href="mailto:chairman@iiitn.ac.in" className="text-blue-600 hover:underline">chairman@iiitn.ac.in</a></p>
            <p className="mt-4 text-justify">
              An accomplished former CEO, Ravi Sharma is now a mentor & philanthropist with a mission of “Spreading Goodness” by supporting initiatives towards Sustainable Society, inclusive Education, and Spirituality.
            </p>
            <p className="mt-4 text-justify">
              Coming from a modest and rural background, Ravi Sharma, intrigued by the diminishing goodness in society, felt compelled to enhance it in the world. Today, as a leading philanthropist, he supports & rewards goodness—a unique trait that defines him.
            </p>
            <p className="mt-4 text-justify">
              A distinguished Alumni of IIT Roorkee and one of the youngest CEOs of Telecom MNC in India, Ravi reached the pinnacle of the corporate sector and served as CEO for 13 years for companies like Alcatel Lucent South Asia, Videocon Telecom, and Adani Power. Tagged as a transformational leader with an out-of-box approach, he is known for performance culture and growth.
            </p>
            <p className="mt-4 text-justify">
              At the peak of his career @50, Ravi left corporate and fully immersed himself in philanthropy. He established an eco-system and self-propagating mechanism for multiple NGOs under "Mission Chetna," that created & nurtured 50 NGOs across India having over 10 million beneficiaries today in 11 states of India. He also founded the Prama Jyoti Foundation, adopting schools in the hinterland of India and upgrading them with teachers, infrastructure & computers thus transforming them into modern centers of learning.
            </p>
            <p className="mt-4 text-justify">
              A true believer in science and Vedic knowledge, Ravi embraced spirituality as a way of life and established Subodhanand Foundation, in memory of his spiritual Guru, to spread the knowledge of Vedas.
            </p>
            <p className="mt-4 text-justify">
              Passionate about the intersection of technology and infrastructure in India, Ravi is leading the IIT Alumni Council as its President, with a network of over 50,000 IITians across the globe dedicated to volunteering for India’s challenges and sustainability.
            </p>
            <p className="mt-4 text-justify">
              In addition, Ravi is Chairman of Telecom Equipment Manufacturing Association (TEMA); Chairperson - Board of Governors for Indian Institute of Information Technology Una (HP) and Nagpur (Maharashtra).
            </p>
            <p className="mt-4 text-justify">
              As the owner of a multidimensional personality, he isn't just a successful professional and philanthropist; but also published poet of Hindi poems - Bheegi Ret (भीगी रेत), Model / Actor for brands like Raymond’s & Mitsubishi and lyricist of an album “Moonlight Whispers” by Times Music. In his youth, he also excelled as a state-level sportsman and a presenter on national television.
            </p>
            <p className="mt-4 text-justify">
              With a clear vision, positive energy, and a constructive nation-building approach, Ravi inspires his network to become positive change-makers and catalysts for spreading goodness in the world!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairman;