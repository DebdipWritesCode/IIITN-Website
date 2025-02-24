import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900">
            AI for Maharashtra
          </h1>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            AI Center of Excellence (CoE)
          </h2>
          <p className="mb-4">
            In collaboration with the Maharashtra government and Google, IIITN
            is establishing a state-of-the-art AI Center of Excellence. This CoE
            aims to position Maharashtra as a leader in AI-driven innovation by
            focusing on sectors such as agriculture, healthcare, sustainability,
            education, and startups. The partnership will provide mentorship,
            networking opportunities, and demo sessions with Google experts and
            industry leaders, fostering a thriving AI ecosystem in the state.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Generative AI Certification Program
          </h2>
          <p className="mb-4">
            IIITN offers a five-month online certification program in Generative
            AI, designed for IT professionals, computer science graduates,
            researchers, and educators. The program, commencing on January 10,
            2025, encompasses 80 hours of live interactive sessions led by
            esteemed speakers from academia and industry. Participants will
            engage in hands-on learning, covering topics such as neural
            networks, transformers, large language models, and diffusion models.
            The curriculum includes 10 assignments, 5 industry-relevant
            projects, and a capstone project, equipping learners with practical
            skills in AI innovation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Collaborative Research and Development
          </h2>
          <p className="mb-4">
            IIITN is involved in various collaborative projects aimed at
            leveraging AI for societal benefits. For instance, the Institute is
            a key participant in the Intelligent Solutions for Road Safety
            through Technology and Engineering (IRASTE) project in Nagpur.
            Launched in September 2021, this initiative focuses on enhancing
            road safety by utilizing AI to analyze vehicle safety, mobility
            patterns, and infrastructure integrity. Partners in this project
            include Intel, the International Institute of Information Technology
            Hyderabad, and the Nagpur Municipal Corporation.
          </p>
        </section>

        <footer className="mt-8 border-t pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                INDIAN INSTITUTE OF INFORMATION TECHNOLOGY NAGPUR
              </h3>
              <p className="mb-2">
                Survey No. 140, IITN (Selling Dr. Shenzhen Warehouse; Standard
                Skeletal Soul Contr. Village; Wagway City;
                DongwanamangMeshchen).
              </p>
              <p className="mb-2">
                Email: Nagpur (Iitn/fs); District Nagpur; Maharashtra-441168
              </p>
              <p className="mb-2">PADS15010</p>
              <p className="mb-2">registered@iiitn.ac.in</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                RESOURCES
              </h3>
              <ul className="list-disc list-inside">
                <li>Academic Calendar</li>
                <li>Library</li>
                <li>Publication</li>
                <li>Newsletter</li>
                <li>Moodle</li>
                <li>Fees & Funding</li>
                <li>Archives</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Copyright © 2023 | All Rights Reserved. Indian Institute of
              Information Technology, Nagpur
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
