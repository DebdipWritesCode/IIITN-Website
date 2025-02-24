import One from "../assets/academics/1.png";
import Two from "../assets/academics/2.png";
import Three from "../assets/academics/3.png";
import Director from "../assets/Director.jpg";

const Academics = () => {
  return (
    <div className="pt-24 font-montserrat px-20 mb-26">
      <h1 className="text-5xl font-semibold pb-2 text-left relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50%] after:h-1 after:bg-orange-600">
        Academics
      </h1>

      <div className="grid grid-cols-2 gap-20 mt-10">
        <div className="flex flex-col gap-6">
          <div className="flex p-4 rounded-lg gap-10">
            <img
              src={Director}
              alt="Undergraduate"
              className="w-32 h-full shadow-lg object-cover mr-4"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-orange-600">
                Undergraduate Academics
              </h1>
              <p className="text-gray-600 text-md text-justify">
                Our undergraduate programs provide a strong foundation in
                technical and interdisciplinary domains, combining theoretical
                knowledge with hands-on experience. Through rigorous coursework,
                industry collaborations, internships, and research
                opportunities, students develop practical problem-solving skills
                and are prepared to tackle real-world challenges.
              </p>
            </div>
          </div>

          <div className="flex p-4 rounded-lg gap-10">
            <img
              src={Director}
              alt="Postgraduate"
              className="w-32 h-full shadow-lg object-cover mr-4"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-purple-600">
                Postgraduate Academics
              </h1>
              <p className="text-gray-600 text-md text-justify">
                The postgraduate programs at IIIT Nagpur focus on specialization
                and research-driven learning, fostering innovation and
                leadership. With access to state-of-the-art resources, expert
                faculty, and industry partnerships, students engage in
                cutting-edge research that contributes to advancements in
                science and technology.
              </p>
            </div>
          </div>

          <div className="flex p-4 rounded-lg gap-10">
            <img
              src={Director}
              alt="Doctorate"
              className="w-32 h-full shadow-lg object-cover mr-4"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-red-600">
                Doctorate Programs
              </h1>
              <p className="text-gray-600 text-md text-justify">
                The Ph.D. program at IIITN covers research areas like AI, ML,
                Data Science, Cybersecurity, IoT, Wireless Networks, Image
                Processing, Embedded Systems, and Microwave Engineering. It
                fosters innovation, preparing scholars for impactful
                contributions in technology and academia.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src={Director}
            alt="Academics"
            className=" h-[750px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mt-20 mb-20">
        <p className="text-gray-600 text-lg text-justify">
          At our institution, we offer a well-structured academic framework that
          balances foundational learning with advanced research, equipping
          students with the skills needed for successful careers in industry and
          academia. Our undergraduate programs provide a strong technical and
          interdisciplinary foundation, integrating theoretical knowledge with
          hands-on experience through coursework, industry collaborations,
          internships, and research opportunities. The postgraduate programs
          focus on specialization and research-driven learning, fostering
          innovation and leadership with access to expert faculty, advanced
          resources, and industry partnerships. Our doctoral programs cover
          diverse research areas, encouraging innovation and preparing scholars
          for impactful contributions to technology and academia. Committed to
          excellence, our institution nurtures skilled professionals and
          researchers who drive meaningful advancements in their fields.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center border-t-4 border-orange-500">
          <img src={One} alt="Scholarship" className="mx-auto h-20 mb-4" />
          <h1 className="text-3xl mt-10 font-semibold text-orange-600">
            Scholarship Facility
          </h1>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg text-center border-t-4 border-red-500">
          <img src={Two} alt="Lecture" className="mx-auto h-20 mb-4" />
          <h1 className="text-3xl mt-10 font-semibold text-red-600">
            Skilled Lecture
          </h1>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg text-center border-t-4 border-blue-500">
          <img src={Three} alt="Library" className="mx-auto h-20 mb-4" />
          <h1 className="text-3xl mt-10 font-semibold text-blue-600">
            Book Library
          </h1>
        </div>
      </div>

      <div className="w-4/5 md:w-3/4 mx-auto my-12 mt-28">
        <div className="flex flex-col md:flex-row items-center gap-20 mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Undergraduate Courses
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
              IIIT Nagpur offers a Bachelor of Technology (B.Tech.) degree with
              diverse specializations designed to equip students with
              industry-relevant skills in emerging technologies. The institute
              provides B.Tech. programs in Computer Science & Engineering (CSE)
              and Electronics & Communication Engineering (ECE), with
              specialized tracks in Artificial Intelligence & Machine Learning,
              Data Science & Analytics, Human-Computer Interaction & Gaming
              Technology, and the Internet of Things (IoT). The curriculum
              integrates hands-on learning, industry collaborations, and
              state-of-the-art lab work, preparing students for careers in
              tech-driven industries, research institutions, and academia.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="/undergrad.jpg"
              alt="Undergraduate Courses"
              className="w-full h-64 object-cover rounded-lg shadow-lg border border-orange-300"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-20 mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Postgraduate
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
              While IIIT Nagpur primarily focuses on undergraduate and doctoral
              education, it offers a Post Graduate Diploma in Information &
              Communication Technology (ICT) in collaboration with the Military
              College of Telecommunication Engineering (MCTE). This program is
              designed for military officers undergoing the Graduate Engineering
              Equipment Orientation (GEEO) Course, equipping them with expertise
              in ICT, telecommunications, and defense technology applications.
              By bridging academia with military applications, this program
              highlights IIIT Nagpur’s commitment to technological excellence.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="/postgrad.jpg"
              alt="Postgraduate Courses"
              className="w-full h-64 object-cover rounded-lg shadow-lg border border-orange-300"
            />
          </div>
        </div>
      </div>

      <h2 className=" text-center font-bold text-4xl my-10">Our Room Gallery</h2>

      <div className="flex flex-col items-center justify-center p-6 relative w-full md:w-full mx-auto my-10">
        <div className="relative flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 z-40">
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl shadow-lg overflow-hidden border border-orange-300">
            <img
              src="/classroom1.jpg"
              alt="Classroom 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl shadow-lg overflow-hidden border border-orange-300">
            <img
              src="/classroom2.jpg"
              alt="Classroom 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl shadow-lg overflow-hidden border border-orange-300">
            <img
              src="/classroom3.jpg"
              alt="Classroom 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative border border-orange-300 rounded-lg p-6 mt-[-96px] max-w-4xl text-center shadow-md bg-white z-0">
          <h2 className="text-2xl font-semibold mb-4 mt-20">Classrooms</h2>
          <p className="text-gray-600 text-sm md:text-base">
            IIIT Nagpur's classrooms are designed to foster an engaging learning
            environment, equipped with modern audiovisual aids, and ergonomic
            seating to enhance interactive teaching and discussions.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-6 relative w-full md:w-full mx-auto my-10">
        <div className="relative flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 z-40">
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl shadow-lg overflow-hidden border border-orange-300">
            <img
              src="/classroom1.jpg"
              alt="Classroom 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl shadow-lg overflow-hidden border border-orange-300">
            <img
              src="/classroom2.jpg"
              alt="Classroom 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl shadow-lg overflow-hidden border border-orange-300">
            <img
              src="/classroom3.jpg"
              alt="Classroom 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative border border-orange-300 rounded-lg p-6 mt-[-96px] max-w-4xl text-center shadow-md bg-white z-0">
          <h2 className="text-2xl font-semibold mb-4 mt-20">Computer Labs</h2>
          <p className="text-gray-600 text-sm md:text-base">
            The institute features state-of-the-art computer labs with
            high-performance systems, advanced software tools, and high-speed
            internet, enabling students to work on coding, simulations, and
            research projects efficiently.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-6 relative w-full md:w-full mx-auto my-10">
        <div className="relative flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 z-40">
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl shadow-lg overflow-hidden border border-orange-300">
            <img
              src="/classroom1.jpg"
              alt="Classroom 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl shadow-lg overflow-hidden border border-orange-300">
            <img
              src="/classroom2.jpg"
              alt="Classroom 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl shadow-lg overflow-hidden border border-orange-300">
            <img
              src="/classroom3.jpg"
              alt="Classroom 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative border border-orange-300 rounded-lg p-6 mt-[-96px] max-w-4xl text-center shadow-md bg-white z-0">
          <h2 className="text-2xl font-semibold mb-4 mt-20">Library</h2>
          <p className="text-gray-600 text-sm md:text-base">
            The central library houses an extensive collection of books,
            research papers, e-journals, and digital resources, providing
            students with access to a vast knowledge base for academic and
            research pursuits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
