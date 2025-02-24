import React from "react";

const AAbout = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-left mb-12">
          <h1 className="text-4xl font-bold" style={{ color: "#CE5923" }}>
            About Us
          </h1>
        </header>

        <section className="mb-8">
          <p className="mb-4">
            The Indian Institute of Information Technology, Nagpur (IITN) is an
            institute of National importance established in 2016 under the
            Public-Private Partnership (PPP) model. Located in Nagpur,
            Maharashtra, IITN is dedicated to providing quality education and
            fostering research in Information Technology and allied fields.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#CE5923" }}
          >
            Academic Programs
          </h2>
          <p className="mb-4">
            IITN offers a range of Bachelor of Technology (B.Tech.) programs,
            including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Computer Science and Engineering (CSE)</li>
            <li>
              CSE with specializations in:
              <ul className="list-disc list-inside ml-8">
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Data Science and Analytics</li>
                <li>Human Computer Interface and Gaming</li>
              </ul>
            </li>
            <li>Electronics and Communication Engineering (ECE)</li>
            <li>ECE with specialization in Internet of Things</li>
          </ul>
          <p className="mb-4">
            The institute plans to introduce Master of Technology (M.Tech.) and
            Doctor of Philosophy (Ph.D.) programs in the near future.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#CE5923" }}
          >
            Campus Facilities
          </h2>
          <p className="mb-4">
            Situated on a 100-acre campus in Waranaga, Nagpur, IITN provides
            state-of-the-art facilities, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Well-equipped hostels with spacious rooms</li>
            <li>
              Indoor sports facilities like table tennis, chess, and carrom
            </li>
            <li>
              Outdoor sports amenities such as badminton, cricket, volleyball,
              and basketball courts
            </li>
            <li>A canteen offering a variety of Indian cuisines</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "#CE5923" }}
          >
            Institute Profile
          </h2>
          <div className="mb-8">
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#CE5923" }}
            >
              A. Institute Profile
            </h3>
            <p className="mb-4">
              Indian Institute of Information Technology, Nagpur (IITN) is one
              of the 20 Indian Institutes of Information Technology established
              under the Public-Private Partnership Scheme by the Ministry of
              Education (erstwhile Ministry of Human Resource Development),
              Government of India. IITN has been declared as an "Institution of
              National Importance" under the provisions of the Indian Institute
              of Information Technology (Public-Private Partnership) Act, 2017.
            </p>
          </div>
          <div className="mb-8">
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#CE5923" }}
            >
              B. Institute's Mandate
            </h3>
            <p className="mb-4">
              One of the main objectives of the Institute is to develop
              competent and capable youth imbued with the spirit of innovation
              and entrepreneurship with the social and environmental orientation
              to meet the knowledge needs of the country and provide Global
              Leadership in Information Technology & Allied Fields.
            </p>
          </div>
          <div className="mb-8">
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#CE5923" }}
            >
              C. Institute's Vision
            </h3>
            <p className="mb-4">
              The Institute aspires to attain the status of a top-notch
              institution in Information Technology and Allied Fields and to
              emerge as an elite Research institution by imparting futuristic
              quality education of Global Standards to corroborate the status of
              an "Institution of National Importance".
            </p>
          </div>
          <div className="mb-8">
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#CE5923" }}
            >
              D. Institute's Mission
            </h3>
            <p className="mb-4">
              To undertake socially relevant, industry-oriented in-House
              Research & Development Programmes as well as to undertake
              cutting-edge research through Public-Private Participation in
              Information Technology & Allied Fields. The Institute shall
              endeavor to develop innovation and entrepreneurship with social
              and environmental orientation.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#CE5923" }}
          >
            MOU
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              IIT Nagpur signed the MOU with Swargiya Dadasahab Kalmapin Smrud
              Dental College & Hospital/Wanadongari.Nagpur dated on 28th June
              2022.
            </li>
            <li>
              IIT Nagpur signed the MOU with Central India Institute of Medical
              Sciences (CIMS), Nagpur on 5th January 2022
            </li>
            <li>
              IIT Nagpur signed the MOU with E-Spin Nanotech Pvt Ltd., IIT
              Kanpur on 27th January 2021
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AAbout;
