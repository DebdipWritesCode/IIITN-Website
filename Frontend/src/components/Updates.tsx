import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

type updateTypes = "latest" | "student" | "faculty";

type Notice = {
  _id: string;
  title: string;
  subTitle: string;
  imageURL: string;
  url: string;
  notice_type: string;
  createdAt: string;
  updatedAt: string;
};

const Updates = () => {
  const [updateType, setUpdateType] = useState<updateTypes>("latest");
  const [updates, setUpdates] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const fetchUpdates = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`${VITE_BACKEND_URL}/notice/?notice_type=${updateType}`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        setUpdates(response.data.notices);
      } catch (err) {
        setError("Failed to fetch updates");
      }
      setLoading(false);
    };

    fetchUpdates();
  }, [updateType]);

  const buttonClasses =
    "bg-orange-600 text-white px-5 py-2 rounded-md text-2xl cursor-pointer hover:bg-orange-700 transition duration-300 ease-in-out shadow-md shadow-gray-500";

  return (
    <div className="mt-10 font-montserrat flex flex-col items-center">
      <div className="flex gap-9 justify-center items-center">
        <button onClick={() => setUpdateType("latest")} className={buttonClasses}>
          Latest Updates
        </button>
        <button onClick={() => setUpdateType("student")} className={buttonClasses}>
          Student Notices
        </button>
        <button onClick={() => setUpdateType("faculty")} className={buttonClasses}>
          Faculty Notices
        </button>
      </div>

      {loading && <p className="mt-10 text-xl">Loading updates...</p>}
      {error && <p className="mt-10 text-xl text-red-500">{error}</p>}

      {!loading && !error && updates.length === 0 && (
        <p className="mt-10 text-xl">Nothing found</p>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={updateType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex gap-10 flex-wrap justify-center items-center mt-16 mb-14"
        >
          {updates.slice(0, visibleCount).map((update, index) => (
            <motion.div
              key={update._id}
              className="relative w-[400px] h-[300px] shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img src={`${VITE_BACKEND_URL}${update.imageURL}`} alt={update.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                <h1 className="text-2xl font-bold mb-3">{update.title}</h1>
                <p className="text-sm">{update.subTitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {visibleCount < updates.length && (
        <motion.button
          onClick={() => setVisibleCount(updates.length)}
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
