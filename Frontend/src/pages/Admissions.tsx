import Process from "../assets/academics/Process.png";
import Testimonials from "../components/Testimonials";

const Admissions = () => {
  return (
    <div className="pt-24 font-montserrat px-20 mb-26">
      <h1 className="text-5xl font-semibold pb-2 text-left relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50%] after:h-1 after:bg-orange-600">
        Admission
      </h1>

      <h2 className="text-4xl font-bold text-orange-700 text-left mt-12 w-fit">
          Why Join IIIT Nagpur?
      </h2>


      <div className="flex gap-10 mt-8">
        <div className="w-1/2 space-y-6 text-lg leading-relaxed">
          <p className="text-justify">
            IIIT Nagpur offers a holistic learning experience, seamlessly integrating academic excellence, practical exposure, and strong industry connections to prepare students for the ever-evolving technology landscape. The institute provides B.Tech. programs in Computer Science & Engineering (CSE) and Electronics & Communication Engineering (ECE), with specialized tracks in AI & ML, Data Science, IoT, and more. The curriculum emphasizes a balance between theoretical knowledge and hands-on learning, with cutting-edge laboratories, research-driven projects, and industry collaborations ensuring students are equipped with the skills needed to thrive in the professional world.
          </p>
          <p className="text-justify">
            Beyond academics, IIIT Nagpur fosters a vibrant student life, encouraging innovation, leadership, and personal growth through technical fests, cultural events, and sports activities, creating a well-rounded campus experience.
          </p>
        </div>

        <div className="w-[744px] h-[425px] mx-auto">
          <img
            src="src/assets/auditorium.JPG"
            alt="IIIT Nagpur Auditorium"
            className="w-full h-full border-4 border-blue-500 object-cover"
          />
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center mt-20">Admission Process</h2>
      <div className="flex justify-center items-center mt-6">
        <img
          src={Process}
          alt="Process Image"
          className="w-full max-w-5xl rounded-lg"
        />
      </div>

      <div className="mt-40">
        <Testimonials />
      </div>
    </div>
  );
};

export default Admissions;
