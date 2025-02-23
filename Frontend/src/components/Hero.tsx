import heroImg from "../assets/heroImg.png";

const Hero = () => {
  return (
    <div className=" relative z-0 font-montserrat">
      <img src={heroImg} alt="hero" className=" w-full h-170" />

      <div className="absolute left-0 bottom-0 h-3/4 w-full bg-gradient-to-t from-black via-black/80 to-transparent flex items-end p-6">
        <div className="text-white max-w-3xl pl-[80px] pb-6">
          <h1 className="text-xl md:text-4xl font-semibold mb-2">
            Welcome to IIIT Nagpur
          </h1>
          <h3 className="text-sm md:text-2xl mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
            justo non urna vehicula posuere.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
