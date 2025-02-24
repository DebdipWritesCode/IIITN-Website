import { ReactNode, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
<<<<<<< HEAD
import AlumniLogin from "./pages/AlumniLogin";
import Members from "./pages/Members";
import AlumniAboutUs from "./pages/AlumniAboutUs";
import AchievementsPage from "./pages/acheivements";
import ActivitiesPage from "./pages/activities"; // Import ActivitiesPage
import Postgraduate from "./pages/Postgraduate";
import UGRule from "./pages/UGRule";
=======
>>>>>>> 28b816d74e4497b8a114eff88d574714c01e971b

// Lazy load page components for better performance
const Home = lazy(() => import("./pages/Home"));
const Academics = lazy(() => import("./pages/Academics"));
const Governance = lazy(() => import("./pages/Governance"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Students = lazy(() => import("./pages/Students"));
const Alumni = lazy(() => import("./pages/Alumni"));
const Placements = lazy(() => import("./pages/Placements"));
const Clubs = lazy(() => import("./pages/StudentsClubs"));
const Fees = lazy(() => import("./pages/Fees"));
const Convocation = lazy(() => import("./pages/Convocation"));
const Mess = lazy(() => import("./pages/mess"));
const HostelRules = lazy(() => import("./pages/Hostel"));
const Scholarships = lazy(() => import("./pages/Scholarships"));
const ClinicalCounseling = lazy(() => import("./pages/counselling"));
const AlumniLogin = lazy(() => import("./pages/AlumniLogin"));
const Members = lazy(() => import("./pages/Members"));
const AlumniAboutUs = lazy(() => import("./pages/AlumniAboutUs"));
const AchievementsPage = lazy(() => import("./pages/acheivements"));
const ActivitiesPage = lazy(() => import("./pages/activities"));
const Postgraduate = lazy(() => import("./pages/Postgraduate"));
const Internships = lazy(() => import("./pages/internships")); // Added Internships Route
const NotFound = lazy(() => import("./pages/NotFound"));

// Layout wrapper for consistent UI
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <div className="pt-20">{children}</div> {/* Ensures content is below the fixed navbar */}
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
<<<<<<< HEAD
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
        <Route path="/students/achievements" element={<Layout><AchievementsPage /></Layout>} />
        <Route path="/students/activities" element={<Layout><ActivitiesPage /></Layout>} /> {/* Added Activities Route */}
        <Route path="/admissions/mtech" element={<Layout><Postgraduate /></Layout>} />
        <Route path="/admissions/ug-rules" element={<Layout><UGRule /></Layout>} />
      </Routes>
=======
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
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
          <Route path="/students/clinical-counseling" element={<Layout><ClinicalCounseling /></Layout>} />
          <Route path="/students/achievements" element={<Layout><AchievementsPage /></Layout>} />
          <Route path="/students/activities" element={<Layout><ActivitiesPage /></Layout>} />
          <Route path="/admissions/mtech" element={<Layout><Postgraduate /></Layout>} />
          <Route path="/placements/internships" element={<Layout><Internships /></Layout>} /> {/* Added Internships Route */}
          <Route path="/alumni/login" element={<Layout><AlumniLogin /></Layout>} />
          <Route path="/alumni/members" element={<Layout><Members /></Layout>} />
          <Route path="/alumni/about-us" element={<Layout><AlumniAboutUs /></Layout>} />
        </Routes>
      </Suspense>
>>>>>>> 28b816d74e4497b8a114eff88d574714c01e971b
    </div>
  );
};

export default App;