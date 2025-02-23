import { motion } from "framer-motion";
import Avatar from "../assets/Avatar.jpg";

const testimonials = [
  {
    id: 1,
    name: "Rutvik Page",
    batch: "B. TECH CSE BATCH 2021",
    text: "I feel that being in an institute of national importance is a matter of pride and IIIT, Nagpur has always bolstered my opinion...",
    image: "/images/rutvik.png",
  },
  {
    id: 2,
    name: "Rohan Shukla",
    batch: "B. TECH CSE BATCH 2021",
    text: "I joined this institute when it was just a year old and was sort of skeptical about how my studies will take shape here...",
    image: "/images/rohan.png",
  },
  {
    id: 3,
    name: "Yashi Kapoor",
    batch: "B. TECH CSE BATCH 2021",
    text: "Working in a good company is a dream for almost anyone coming to an engineering college. Had the same and got a chance...",
    image: "/images/yashi.png",
  },
];

const Testimonials = () => {
  return (
    <div className="overflow-hidden w-full py-10 bg-gray-100 relative font-montserrat">
      <h1 className="text-center text-4xl font-semibold pb-2 relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-[40%] after:h-1 after:bg-orange-600 after:-translate-x-1/2">
        Student Testimonials
      </h1>
      <motion.div
        className="flex space-x-6 w-max mt-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg min-w-[320px] max-w-[350px] text-center border border-gray-200">
            <div className="flex justify-center">
              <img
                src={Avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-blue-500 mb-3"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h3>
            <p className="text-sm italic text-gray-600">{testimonial.batch}</p>
            <p className="text-gray-700 mt-2">{testimonial.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
