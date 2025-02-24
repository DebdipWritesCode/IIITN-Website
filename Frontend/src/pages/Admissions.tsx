import Process from "../assets/academics/Process.jpg";
import Testimonials from "../components/Testimonials";

const Admissions = () => {
  return (
    <div className="pt-24 font-montserrat px-20 mb-26">
      <h1 className="text-5xl font-semibold pb-2 text-left relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50%] after:h-1 after:bg-orange-600">
        Admission
      </h1>

      <div className="flex gap-10 mt-8">
        <div className="w-1/2 space-y-6 text-lg leading-relaxed">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nulla delectus impedit labore aut odit laudantium rerum, ullam illo
            officia inventore accusantium dicta libero repellendus, cupiditate
            perferendis quos. Modi, maxime?
          </p>
          <p className="text-justify">
            Totam, sunt voluptatibus. Porro, veritatis blanditiis quisquam
            reiciendis eum minima consectetur magnam eligendi sint minus nostrum
            laboriosam exercitationem pariatur totam similique nemo excepturi
            eaque consequatur numquam doloribus tenetur neque molestias.
          </p>
        </div>

        <div className="w-1/2">
          <img
            src="/path-to-your-image.jpg"
            alt="IIIT Nagpur Auditorium"
            className="w-full h-auto border-4 border-blue-500"
          />
        </div>
      </div>

      <h2 className=" font-bold text-center mb-20 text-4xl mt-20 ">
        Admission Process
      </h2>
      <div className="flex justify-center items-center">
        <img
          src={Process}
          alt="Process Image"
          className="w-full max-w-5xl rounded-lg shadow-lg"
        />
      </div>

      <div className=" mt-40">
        <Testimonials />
      </div>
    </div>
  );
};

export default Admissions;
