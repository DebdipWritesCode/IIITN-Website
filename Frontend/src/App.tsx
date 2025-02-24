import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clubs from "./pages/StudentsClubs";
import Fees from "./pages/Fees";
import Convocation from "./pages/Convocation";
import Mess from "./pages/mess";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students/clubs" element={<Clubs />} />
        <Route path="/students/fees" element={<Fees />} />
        <Route path="/students/convocation-2023" element={<Convocation />} />
        <Route path="/students/student-mess" element={<Mess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
