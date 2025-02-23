import TCS from "../assets/TCS.jpg";
import GovtMaha from "../assets/GovtMaharashtra.png";
import Education from "../assets/EducationMinistry.jpg";

const imgClasses = "h-50 shadow-md rounded-md transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-110";

const OurPartners = () => {
  return (
    <div className=" font-montserrat mt-10 px-20 mb-10">
      <h1 className="text-center text-4xl font-semibold pb-2 relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-[40%] after:h-1 after:bg-orange-600 after:-translate-x-1/2">
        Our Partners
      </h1>
      <div className="flex items-center justify-center gap-[100px] mt-10">
        <img src={TCS} alt="TCS" className={imgClasses} />
        <img src={GovtMaha} alt="Government of Maharashtra" className={imgClasses} />
        <img src={Education} alt="Ministry of Education" className={imgClasses} />
      </div>
    </div>
  );
};

export default OurPartners;
