import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="absolute top-4 left-4">
        <Link to="/" className="text-orange-600 font-semibold hover:underline">
          Go back to home
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>

        <div className="flex flex-col gap-4">
          <Link
            to="/admin/manage-notices"
            className="block p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            📢 Manage Notices
          </Link>

          <Link
            to="/admin/manage-events"
            className="block p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            🎉 Manage Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
