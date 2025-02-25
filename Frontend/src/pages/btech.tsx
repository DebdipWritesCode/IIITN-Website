import React from "react";

const BTechPrograms = () => {
  const programs = [
    {
      department: "Computer Science & Engineering",
      courses: [
        {
          title: "B.Tech. Computer Science & Engineering",
          description:
            "Bachelor of Technology in Computer Science & Engineering is provided at IIIT Nagpur. Students follow an integrated curriculum that includes topics such as programming languages, computer architecture, operating systems, and theoretical foundations of computer science and mathematics. Upper-level courses cover AI, NLP, databases, computational complexity, algorithm analysis, and more."
        },
        {
          title: "B.Tech. CSE (Artificial Intelligence & Machine Learning)",
          description:
            "A prestigious degree building a solid foundation in AI concepts like logic, knowledge representation, probabilistic models, and machine learning. Students learn to create AI-driven solutions, build expert systems, and develop neural networks. AI is increasingly used in B2B markets, making this field highly in demand."
        },
        {
          title: "B.Tech. CSE (Data Science & Analytics)",
          description:
            "This curriculum teaches fundamentals of computer science and data analytics. It includes problem-solving, computational approaches, data visualization, and statistical analysis. Students gain programming, machine learning, and mathematical reasoning skills. The department offers cutting-edge labs and industry-relevant coursework."
        },
        {
          title: "B.Tech. CSE (Human Computer Interaction & Gaming Technology)",
          description:
            "HCI focuses on designing interactive systems, emphasizing usability, psychology, and engineering. Gaming technology has expanded into education, healthcare, and simulation applications. HCI specialists design better games and study user interaction to enhance gaming experiences."
        }
      ]
    },
    {
      department: "Electronics & Communication Engineering",
      courses: [
        {
          title: "B.Tech. Electronics & Communication Engineering",
          description:
            "This program covers Embedded Systems, IoT, Communication Technologies, Control Systems, Computer Vision, CMOS Design, Machine Learning, and AI. The curriculum is updated every semester to match industry advancements. Rigorous lab sessions and projects ensure hands-on learning."
        },
        {
          title: "B.Tech. ECE (Internet of Things)",
          description:
            "IoT connects devices globally, impacting urban transport, healthcare, smart homes, and industrial automation. This program builds expertise in electronic engineering, wireless communication, computer networks, sensors, chip design, and IoT security. Graduates will be industry-ready with strong IoT and embedded systems knowledge."
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 lg:px-20">
      <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-10">B.Tech Programs</h1>
      {programs.map((dept, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-bold text-orange-700 mb-6">{dept.department}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dept.courses.map((course, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border border-orange-200 hover:shadow-2xl transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BTechPrograms;
