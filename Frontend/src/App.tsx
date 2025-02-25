import { ReactNode, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
const Internships = lazy(() => import("./pages/internships"));
const UGRules = lazy(() => import("./pages/UGRule"));
const PGRule = lazy(() => import("./pages/PGRule"));
const About_CSE = lazy(() => import("./pages/About_CSE"));
const About_ECE = lazy(() => import("./pages/About_ECE"));
const TnPCell = lazy(() => import("./pages/contact_t&p"));
const About_BS = lazy(() => import("./pages/About_BS"));
const BOS_BS = lazy(() => import("./pages/BOS_BS"));
const BOS_CSE = lazy(() => import("./pages/BOS_CSE"));
const BOS_ECE = lazy(() => import("./pages/BOS_ECE"));
const Achievements_CSE = lazy(() => import("./pages/Achievements_CSE"));
const Achievements_ECE = lazy(() => import("./pages/Achievements_ECE"));
const Achievements_BS = lazy(() => import("./pages/Achievements_BS"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ForStudents = lazy(() => import("./pages/forStudents"));
const AAbout = lazy(() => import("./pages/AAbout"));
const Mhai = lazy(() => import("./pages/Mhai"));
const ForCompanies = lazy(() => import("./pages/for_companies"));
const ManageNotices = lazy(() => import("./pages/ManageNotices"));
const Research_BS = lazy(() => import("./pages/Research_BS"));
const Research_CSE = lazy(() => import("./pages/Research_CSE"));
const Research_ECE = lazy(() => import("./pages/Research_ECE"));
const WhyRecruitIIITN = lazy(() => import("./pages/whyrecruit"));
const Director = lazy(() => import("./pages/director"));
const Registrar = lazy(() => import("./pages/registrar"));
const Chairman = lazy(() => import("./pages/chairman"));
const Staff = lazy(() => import("./pages/staff"));
const BuildingWorksCommittee = lazy(() => import("./pages/buildingworkscommitee"));
const Senate = lazy(() => import("./pages/senate"));
const Finance = lazy(() => import("./pages/finance"));
const Board = lazy(() => import("./pages/board"))
const Overview_PhD = lazy(() => import("./pages/Overview_PhD"));
const Features_PhD = lazy(() => import("./pages/Features_PhD"));
const RA_PhD = lazy(() => import("./pages/RA_PhD"));
const OD_PhD = lazy(() => import("./pages/OD_PhD"));
const IP_PhD = lazy(() => import("./pages/IP_PhD"));
const Check_PhD = lazy(() => import("./pages/Check_PhD"));
const Contact_PhD = lazy(() => import("./pages/Contact_PhD"));
const PlacementStatistics = lazy(() => import("./pages/PlacementStatistics"));
const ProjectsCSE = lazy(() => import("./pages/ProjectsCSE"));
const ProjectsECE = lazy(() => import("./pages/ProjectsECE"));
const ProjectsBS = lazy(() => import("./pages/ProjectsBS"));
const LabCSE = lazy(() => import("./pages/LabCSE"));
const LabECE = lazy(() => import("./pages/LabECE"));
const LabBS = lazy(() => import("./pages/LabBS"));
const Report = lazy(() => import("./pages/report"));
const Btech = lazy(() => import("./pages/btech"));
const Phd = lazy(() => import("./pages/phd"));
<<<<<<< HEAD
const Report = lazy(() => import("./pages/report"));
const Faculty_bos = lazy(() => import("./pages/faculty_bos"));
=======
const Login = lazy(() => import("./pages/Login"));
const StudentLogin = lazy(() => import("./pages/StudentLogin"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const ManageEvents = lazy(() => import("./pages/ManageEvents"));

const Curriculum = lazy(() => import("./pages/Curriculum"));
const Cse_Events = lazy(() => import("./pages/events_cse"));
const BS_Events = lazy(() => import("./pages/events_bs"));
const ECE_Events = lazy(() => import("./pages/events_ece"));
>>>>>>> 7ef0aab5fe49dc14aaa29930618240486be69f77

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <div className="pt-30">{children}</div>
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <Routes>
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
          <Route path="/students/clinical-counselling" element={<Layout><ClinicalCounseling /></Layout>} />
          <Route path="/students/achievements" element={<Layout><AchievementsPage /></Layout>} />
          <Route path="/students/activities" element={<Layout><ActivitiesPage /></Layout>} />
          <Route path="/admissions/mtech" element={<Layout><Postgraduate /></Layout>} />
          <Route path="/placements/internships" element={<Layout><Internships /></Layout>} />
          <Route path="/admissions/ug-rules" element={<Layout><UGRules /></Layout>} />
          <Route path="/admissions/pg-rules" element={<Layout><PGRule /></Layout>} />
          <Route path="/cse/about" element={<Layout><About_CSE /></Layout>} />
          <Route path="/ece/about" element={<Layout><About_ECE /></Layout>} />
          <Route path="/basic-sciences/about" element={<Layout><About_BS /></Layout>} />
          <Route path="/ece/bos" element={<Layout><BOS_ECE /></Layout>} />
          <Route path="/cse/bos" element={<Layout><BOS_CSE /></Layout>} />
          <Route path="/cse/achievements" element={<Layout><Achievements_CSE /></Layout>} />
          <Route path="/ece/achievements" element={<Layout><Achievements_ECE /></Layout>} />
          <Route path="/basic-sciences/achievements" element={<Layout><Achievements_BS /></Layout>} />
          <Route path="/basic-sciences/bos" element={<Layout><BOS_BS /></Layout>} />
          <Route path="/alumni/login" element={<Layout><AlumniLogin /></Layout>} />
          <Route path="/alumni/members" element={<Layout><Members /></Layout>} />
          <Route path="/alumni/about-us" element={<Layout><AlumniAboutUs /></Layout>} />
          <Route path="/about" element={<Layout><AAbout /></Layout>} />
          <Route path="/ai-for-maharashtra" element={<Layout><Mhai /></Layout>} />
          <Route path="/placements/contact" element={<Layout><TnPCell /></Layout>} /> {/* Added Route for TnP Cell */}
          <Route path="*" element={<NotFound />} /> {/* Handles all undefined routes */}
          <Route path="/placements/contact" element={<Layout><TnPCell /></Layout>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/placements/for-students" element={<Layout><ForStudents /></Layout>} />
          <Route path="/placements/for-companies" element={<Layout><ForCompanies /></Layout>} />
          <Route path="/placements/why-recruit" element={<Layout><WhyRecruitIIITN /></Layout>} /> {/* Added new route */}
          <Route path="/governance/director" element={<Layout><Director /></Layout>} />
          <Route path="/governance/registrar" element={<Layout><Registrar /></Layout>} />
          <Route path="/governance/chairman" element={<Layout><Chairman /></Layout>} />
          <Route path="/governance/staff" element={<Layout><Staff /></Layout>} />
          <Route path="/governance/building-works-committee" element={<Layout><BuildingWorksCommittee /></Layout>} />
          <Route path="/governance/senate" element={<Layout><Senate /></Layout>} />
          <Route path="/governance/finance-committee" element={<Layout><Finance /></Layout>} />
          <Route path="/governance/board-of-governors" element={<Layout><Board /></Layout>} />
          <Route path="/placements/why-recruit" element={<Layout><WhyRecruitIIITN /></Layout>} />
          <Route path="placements/statistics" element={<Layout><PlacementStatistics /></Layout>} /> {/* Added new route */}
          <Route path="/admin/manage-notices" element={<ManageNotices />} />

          <Route path="/basic-sciences/research" element={<Layout><Research_BS /></Layout>} /> {/* Added new route */}
          <Route path="/basic-sciences/research" element={<Layout><Research_BS /></Layout>} />
          <Route path="/ece/research" element={<Layout><Research_ECE /></Layout>} />
          <Route path="/cse/research" element={<Layout><Research_CSE /></Layout>} />
          <Route path="/phd/overview" element={<Layout><Overview_PhD /></Layout>} />
          <Route path="/phd/features" element={<Layout><Features_PhD /></Layout>} />
          <Route path="/phd/research-areas" element={<Layout><RA_PhD /></Layout>} />
          <Route path="/phd/operational-details" element={<Layout><OD_PhD /></Layout>} />
          <Route path="/phd/proformas" element={<Layout><IP_PhD /></Layout>} />
          <Route path="/phd/checklists" element={<Layout><Check_PhD /></Layout>} />
          <Route path="/phd/contact" element={<Layout><Contact_PhD /></Layout>} />
          <Route path="/cse/projects" element={<Layout><ProjectsCSE /></Layout>} />
          <Route path="/ece/projects" element={<Layout><ProjectsECE /></Layout>} />
          <Route path="/basic-sciences/projects" element={<Layout><ProjectsBS /></Layout>} />
          <Route path="/cse/laboratory" element={<Layout><LabCSE /></Layout>} />
          <Route path="/ece/laboratory" element={<Layout><LabECE /></Layout>} />
          <Route path="/basic-sciences/laboratory" element={<Layout><LabBS /></Layout>} />
          <Route path="/programs/reports" element={<Layout><Report /></Layout>} />
          <Route path="/programs/btech" element={<Layout><Btech /></Layout>} />
          <Route path="/programs/phd" element={<Layout><Phd /></Layout>} />
<<<<<<< HEAD
          <Route path="/programs/reports" element={<Layout><Report /></Layout>} />
          <Route path="/basic-sciences/faculty" element={<Layout><Faculty_bos /></Layout>} />
=======
          <Route path="/login" element={<Login />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/manage-events" element={<ManageEvents />} />
          <Route path="/programs/curriculum" element={<Layout><Curriculum /></Layout>} />
          <Route path="/cse/events" element={<Layout><Cse_Events /></Layout>} />
          <Route path="/basic-sciences/events" element={<Layout><BS_Events /></Layout>} />
          <Route path="/ece/events" element={<Layout><ECE_Events /></Layout>} />
>>>>>>> 7ef0aab5fe49dc14aaa29930618240486be69f77
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
