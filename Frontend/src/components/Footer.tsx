import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";
import { SiX } from "react-icons/si";
import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer3.png";
import Logo from "../assets/IIITN logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#cbc2db] py-10 text-gray-900 font-montserrat">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-40">
        <div className="">
          <div className=" flex items-center space-x-4 gap-4">
            <img src={Logo} alt="Logo" className=" w-20" />
            <h2 className="text-xl font-bold text-orange-700 uppercase">
              Indian Institute of Information Technology Nagpur
            </h2>
          </div>
          <p className="mt-4 text-sm">
            Survey No. 140,141/1 behind Br. Sheshrao Wankhade Shetkari Sahkari
            Soot Girni, Village - Waranga, PO - Dongargaon (Butibori), Tahsil-
            Nagpur (Rural), District Nagpur, Maharashtra- 441108
          </p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center">
              <IoLocationSharp className="mr-2 text-lg" /> Nagpur, Maharashtra
            </p>
            <p className="flex items-center">
              <IoCall className="mr-2 text-lg" /> 9405215010
            </p>
            <p className="flex items-center">
              <IoMail className="mr-2 text-lg" /> registrar@iiitn.ac.in
            </p>
          </div>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaFacebook className="cursor-pointer text-blue-600 hover:text-blue-800" />
            <FaInstagram className="cursor-pointer text-pink-500 hover:text-pink-700" />
            <FaLinkedin className="cursor-pointer text-blue-700 hover:text-blue-900" />
            <FaYoutube className="cursor-pointer text-red-600 hover:text-red-800" />
            <SiX className="cursor-pointer text-black hover:text-gray-700" />
          </div>
        </div>

        <div className="md:w-1/3 mt-8 md:mt-0">
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="mt-4 space-y-2 text-md">
            {[
              "Academic Calendar",
              "Library",
              "Publication",
              "Newsletter",
              "Moodle",
              "Fees & Funding",
              "Archives",
            ].map((item, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col items-center">
          <h3 className="text-lg font-bold">Our Partners</h3>
          <div className="mt-4 space-y-4 flex flex-col items-center">
            <img src={footer1} alt="TCS" className="w-32" />
            <img src={footer2} alt="Ministry of Education" className="w-32" />
            <img
              src={footer3}
              alt="Government of Maharashtra"
              className="w-32"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm">
        <div className="flex justify-center space-x-6 text-gray-700">
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Terms and Conditions</p>
        </div>
        <p className="mt-2 text-gray-600">
          Copyright © 2025 | All Rights Reserved. Indian Institute of
          Information Technology, Nagpur
        </p>
      </div>
    </footer>
  );
};

export default Footer;
