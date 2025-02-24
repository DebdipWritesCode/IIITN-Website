import React from "react";

const AiforMh = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="text-center mt-6 mb-8">
          <h1 className="text-4xl font-bold" style={{ color: "#CE5923" }}>
            AI for Maharashtra
          </h1>
        </header>

        {/* IIITN Image - Full width for better positioning */}
        <div className="flex justify-center mb-12">
          <img
            src="src\assets\IMG_5657.PNG"
            alt="IIITN Campus"
            className="w-[1200px] h-[650px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* AI Center of Excellence Section */}
        <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "#CE5923" }}
            >
              AI Center of Excellence (CoE)
            </h2>
            <p>
              In collaboration with the Maharashtra government and Google, IIITN
              is establishing a state-of-the-art AI Center of Excellence. This
              CoE aims to position Maharashtra as a leader in AI-driven
              innovation by focusing on sectors such as agriculture, healthcare,
              sustainability, education, and startups. The partnership will
              provide mentorship, networking opportunities, and demo sessions
              with Google experts and industry leaders, fostering a thriving AI
              ecosystem in the state.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="\assets\IMG_5784.JPG"
              alt="AI Center of Excellence"
              className="w-[306px] h-[408px] object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Generative AI Certification Program Section */}
        <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "#CE5923" }}
            >
              Generative AI Certification Program
            </h2>
            <p>
              IIITN offers a five-month online certification program in
              Generative AI, designed for IT professionals, computer science
              graduates, researchers, and educators. The program, commencing on
              January 10, 2025, encompasses 80 hours of live interactive
              sessions led by esteemed speakers from academia and industry.
              Participants will engage in hands-on learning, covering topics
              such as neural networks, transformers, large language models, and
              diffusion models. The curriculum includes 10 assignments, 5
              industry-relevant projects, and a capstone project, equipping
              learners with practical skills in AI innovation.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="assets\IMG_1436.JPG"
              alt="Generative AI Certification"
              className="w-[306px] h-[408px] object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Collaborative Research and Development Section */}
        <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "#CE5923" }}
            >
              Collaborative Research and Development
            </h2>
            <p>
              IIITN is involved in various collaborative projects aimed at
              leveraging AI for societal benefits. For instance, the Institute
              is a key participant in the Intelligent Solutions for Road Safety
              through Technology and Engineering (IRASTE) project in Nagpur.
              Launched in September 2021, this initiative focuses on enhancing
              road safety by utilizing AI to analyze vehicle safety, mobility
              patterns, and infrastructure integrity. Partners in this project
              include Intel, the International Institute of Information
              Technology Hyderabad, and the Nagpur Municipal Corporation.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="\assets\IMG_5784.JPG"
              alt="Collaborative Research and Development"
              className="w-[306px] h-[408px] object-cover rounded-lg shadow-md"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiforMh;
