import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Governance from "./pages/Governance";
import Admissions from "./pages/Admissions";
import Students from "./pages/Students";
import Alumni from "./pages/Alumni";
import Placements from "./pages/Placements";
import Clubs from "./pages/StudentsClubs";
import Fees from "./pages/Fees";
import Convocation from "./pages/Convocation";
import Mess from "./pages/mess";
import HostelRules from "./pages/Hostel";
import Scholarships from "./pages/Scholarships";
import ClinicalCounseling from "./pages/counselling"; // Import the new page
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AlumniLogin from "./pages/AlumniLogin";
import Members from "./pages/Members";
import AlumniAboutUs from "./pages/AlumniAboutUs";
<<<<<<< HEAD
import AchievementsPage from "./pages/acheivements";
import ActivitiesPage from "./pages/activities"; // Import ActivitiesPage
=======
import Postgraduate from "./pages/Postgraduate";
>>>>>>> 6024c9d8f7fe50b6bdf92a0f9bd6648314dd2bad

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <div className="pt-20">{children}</div> {/* Ensure content is below fixed navbar */}
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/academics" element={<Layout><Academics /></Layout>} />
        <Route path="/governance" element={<Layout><Governance /></Layout>} />
        <Route path="/admissions" element={<Layout><Admissions /></Layout>} />
        <Route path="/students" element={<Layout><Students /></Layout>} />
        <Route path="/alumni" element={<Layout><Alumni /></Layout>} />
        <Route path="/placements" element={<Layout><Placements /></Layout>} />
        <Route path="/students/clubs" element={<Layout><Clubs /></Layout>} />
        <Route path="/students/fees" element={<Layout><Fees /></Layout>} />
        <Route path="/students/convocation-2023" element={<Layout><Convocation /></Layout>} />
        <Route path="/students/student-mess" element={<Layout><Mess /></Layout>} />
        <Route path="/students/hostel" element={<Layout><HostelRules /></Layout>} />
        <Route path="/students/scholarships" element={<Layout><Scholarships /></Layout>} />
        <Route path="/students/clinical-counselling" element={<Layout><ClinicalCounseling /></Layout>} /> {/* New Route */}
        <Route path="/alumni/login" element={<Layout><AlumniLogin /></Layout>} />
        <Route path="/alumni/members" element={<Layout><Members /></Layout>} />
        <Route path="/alumni/about-us" element={<Layout><AlumniAboutUs /></Layout>} />
<<<<<<< HEAD
        <Route path="/students/achievements" element={<Layout><AchievementsPage /></Layout>} />
        <Route path="/students/activities" element={<Layout><ActivitiesPage /></Layout>} /> {/* Added Activities Route */}
=======
        <Route path="/admissions/mtech" element={<Layout><Postgraduate /></Layout>} />
>>>>>>> 6024c9d8f7fe50b6bdf92a0f9bd6648314dd2bad
      </Routes>
    </div>
  );
};

export default App;
