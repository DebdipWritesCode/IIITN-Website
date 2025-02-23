import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "../assets/heroImg.png";

type updateTypes = "latest_updates" | "student_notices" | "faculty_notices";

const latestUpdates = [
  { id: 1, imgURL: "https://via.placeholder.com/150", title: "Latest Update 1", description: "This is the first latest update" },
  { id: 2, imgURL: "https://via.placeholder.com/150", title: "Latest Update 2", description: "This is the second latest update" },
  { id: 3, imgURL: "https://via.placeholder.com/150", title: "Latest Update 3", description: "This is the third latest update" },
  { id: 4, imgURL: "https://via.placeholder.com/150", title: "Latest Update 4", description: "This is the fourth latest update" },
  { id: 5, imgURL: "https://via.placeholder.com/150", title: "Latest Update 5", description: "This is the fifth latest update" },
];

const studentNotices = [
  { id: 1, imgURL: "https://via.placeholder.com/150", title: "Student Notice 1", description: "This is the first student notice" },
  { id: 2, imgURL: "https://via.placeholder.com/150", title: "Student Notice 2", description: "This is the second student notice" },
  { id: 3, imgURL: "https://via.placeholder.com/150", title: "Student Notice 3", description: "This is the third student notice" },
  { id: 4, imgURL: "https://via.placeholder.com/150", title: "Student Notice 4", description: "This is the fourth student notice" },
];

const facultyNotices = [
  { id: 1, imgURL: "https://via.placeholder.com/150", title: "Faculty Notice 1", description: "This is the first faculty notice" },
  { id: 2, imgURL: "https://via.placeholder.com/150", title: "Faculty Notice 2", description: "This is the second faculty notice" },
  { id: 3, imgURL: "https://via.placeholder.com/150", title: "Faculty Notice 3", description: "This is the third faculty notice" },
  { id: 4, imgURL: "https://via.placeholder.com/150", title: "Faculty Notice 4", description: "This is the fourth faculty notice" },
];

const Updates = () => {
  const [updateType, setUpdateType] = useState<updateTypes>("latest_updates");
  const [visibleCount, setVisibleCount] = useState(3);

  const buttonClasses =
    "bg-orange-600 text-white px-5 py-2 rounded-md text-2xl cursor-pointer hover:bg-orange-700 transition duration-300 ease-in-out shadow-md shadow-gray-500";

  const changeUpdateType = (type: updateTypes) => {
    setUpdateType(type);
    setVisibleCount(3);
  };

  const getUpdates = () => {
    if (updateType === "latest_updates") return latestUpdates;
    if (updateType === "student_notices") return studentNotices;
    return facultyNotices;
  };

  const updatesToShow = getUpdates().slice(0, visibleCount);

  return (
    <div className="mt-10 font-montserrat flex flex-col items-center">
      <div className="flex gap-9 justify-center items-center">
        <button onClick={() => changeUpdateType("latest_updates")} className={buttonClasses}>
          Latest Updates
        </button>
        <button onClick={() => changeUpdateType("student_notices")} className={buttonClasses}>
          Student Notices
        </button>
        <button onClick={() => changeUpdateType("faculty_notices")} className={buttonClasses}>
          Faculty Notices
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={updateType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex gap-10 flex-wrap justify-center items-center mt-16 mb-14"
        >
          {updatesToShow.map((update, index) => (
            <motion.div
              key={update.id}
              className="relative w-[400px] h-[300px] shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img src={heroImg} alt={update.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                <h1 className="text-2xl font-bold mb-3">{update.title}</h1>
                <p className="text-sm">{update.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {visibleCount < getUpdates().length && (
        <motion.button
          onClick={() => setVisibleCount(getUpdates().length)}
          className="cursor-pointer border border-orange-600 px-4 py-2 mb-10 text-orange-600 font-semibold text-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Load more...
        </motion.button>
      )}
    </div>
  );
};

export default Updates;
