import { Link } from "react-router-dom";
import { navbar, subNavbar } from "../data/data";
import { FaSearch } from "react-icons/fa";
import EnglishSVG from "../assets/hl.svg";
import Azadi from "../assets/Azadi.png";
import Desh from "../assets/Desh.jpg";
import HindiSVG from "../assets/hindi.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SpecialSubNavbar from "./SpecialSubNavbar";

const Navbar = () => {
  const headerImages = [EnglishSVG, HindiSVG];
  const [currentImage, setCurrentImage] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % headerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <nav className="font-montserrat fixed w-full bg-white shadow-md z-[99]">
      <div className="flex items-center justify-between h-14 bg-orange-600 px-5 py-1 text-white font-semibold text-xl">
        <div className="flex gap-10 items-center">
          {navbar.map((item, index) =>
            index < 3 ? (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            ) : null
          )}
        </div>
        <div className="flex gap-10 items-center">
          {navbar.map((item, index) =>
            index >= 3 ? (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            ) : null
          )}
          <FaSearch size={22} className="mr-3" />
        </div>
      </div>

      <div className="relative">
        <div className="flex items-center justify-between h-16 px-20 py-1 text-xl bg-white">
          <div className="flex gap-8 items-center">
            {subNavbar.map((item, index) =>
              index < 3 ? (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  // onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link to={item.url} className="hover:text-orange-600 cursor-pointer">
                    {item.name}
                  </Link>

                  {hoveredItem === item.id &&
                    (item.name === "Academics" ? (
                      <SpecialSubNavbar
                        data={{ ...item, setHoveredItem }}
                      />
                    ) : (
                      item.subLinks && (
                        <div
                          onMouseEnter={() => setHoveredItem(item.id)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md p-3 w-48">
                          {item.subLinks.map((sub) => (
                            <Link
                              key={sub.id}
                              to={sub.url}
                              className="block px-4 py-2 hover:bg-gray-100">
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )
                    ))}
                </div>
              ) : null
            )}
            <img src={Desh} alt="Swachh Bharat" className="h-10" />
          </div>
          <div className="flex gap-10 items-center">
            <img src={Azadi} alt="75 years of Independence" className="h-10" />
            {subNavbar.map((item, index) =>
              index >= 3 ? (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}>
                  <Link to={item.url} className="hover:text-orange-600 cursor-pointer">
                    {item.name}
                  </Link>

                  {hoveredItem === item.id && item.subLinks && (
                    <div
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md p-3 w-48">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.id}
                          to={sub.url}
                          className="block px-4 py-2 hover:bg-gray-100">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>

      <div className="absolute left-[50%] -top-2 -translate-x-[50%]">
        <motion.img
          key={currentImage}
          initial={{ opacity: 1, x: "10%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={headerImages[currentImage]}
          alt="Header Logo"
          className="h-40 left-0 top-0"
        />
      </div>
    </nav>
  );
};

export default Navbar;
