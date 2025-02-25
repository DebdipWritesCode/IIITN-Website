import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

const VITE_BACKEND_URI = import.meta.env.VITE_BACKEND_URL;

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

const ManageNotices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [noticeType, setNoticeType] = useState("latest");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedNoticeId, setSelectedNoticeId] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(`${VITE_BACKEND_URI}/notice`);
        setNotices(response.data.notices);
      } catch (err) {
        console.error("Failed to fetch notices", err);
      }
    };
    fetchNotices();
  }, []);

  const handleAddNotice = async () => {
    if (!image) {
      setError("Please select an image");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subTitle", subTitle);
    formData.append("image", image);
    formData.append("url", url);
    formData.append("notice_type", noticeType);

    try {
      const response = await axios.post(
        `${VITE_BACKEND_URI}/notice/add`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setNotices([...notices, response.data.notice]);
    } catch (err) {
      setError("Failed to add notice");
    }
    setLoading(false);
  };

  const openDeleteModal = (id: string) => {
    setSelectedNoticeId(id);
    setModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedNoticeId(null);
    setModalIsOpen(false);
  };

  const handleDeleteNotice = async () => {
    if (!selectedNoticeId) return;
    setLoading(true);
    setError("");
    try {
      await axios.delete(`${VITE_BACKEND_URI}/notice/${selectedNoticeId}`);
      setNotices(notices.filter(notice => notice._id !== selectedNoticeId));
      closeDeleteModal();
    } catch (err) {
      setError("Failed to delete notice");
    }
    setLoading(false);
  };

  return (
    <div className="p-5 font-montserrat">
      <h1 className="text-3xl font-bold mb-5">Manage Notices</h1>
      {error && <p className="text-red-600">{error}</p>}
      <div className="mb-5">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 mr-2" />
        <input type="text" placeholder="Sub Title" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} className="border p-2 mr-2" />
        <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} className="border p-2 mr-2" />
        <input type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} className="border p-2 mr-2" />
        <select value={noticeType} onChange={(e) => setNoticeType(e.target.value)} className="border p-2 mr-2">
          <option value="latest">Latest</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>
        <button onClick={handleAddNotice} className="bg-blue-600 text-white px-4 py-2" disabled={loading}>
          {loading ? "Adding..." : "Add Notice"}
        </button>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-bold">Existing Notices</h2>
        {notices.length === 0 ? (
          <p>No notices found</p>
        ) : (
          <ul>
            {notices.map(notice => (
              <li key={notice._id} className="border p-4 mt-2 rounded-lg shadow-md flex items-center gap-4 bg-gray-100">
                <img src={`${VITE_BACKEND_URI}${notice.imageURL}`} alt={notice.title} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{notice.title}</h3>
                  <p className="text-gray-600">{notice.subTitle}</p>
                </div>
                <button onClick={() => openDeleteModal(notice._id)} className="bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeDeleteModal} className="modal" overlayClassName="overlay">
        <div className="p-5 bg-white rounded shadow-md text-center">
          <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete this notice?</p>
          <div className="mt-4 flex justify-center gap-4">
            <button onClick={handleDeleteNotice} className="bg-red-600 text-white px-4 py-2 rounded">
              Confirm
            </button>
            <button onClick={closeDeleteModal} className="bg-gray-400 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageNotices;
