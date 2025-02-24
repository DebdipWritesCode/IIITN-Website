import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Governance from "./pages/Governance";
import Admissions from "./pages/Admissions";
import Students from "./pages/Students";
import Alumni from "./pages/Alumni";
import Placements from "./pages/Placements";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <div className="">{children}</div>
    <Footer />
  </>
);


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/academics" element={<Layout><Academics /></Layout>} />
      <Route path="/governance" element={<Layout><Governance /></Layout>} />
      <Route path="/admissions" element={<Layout><Admissions /></Layout>} />
      <Route path="/students" element={<Layout><Students /></Layout>} />
      <Route path="/alumni" element={<Layout><Alumni /></Layout>} />
      <Route path="/placements" element={<Layout><Placements /></Layout>} />
    </Routes>
  );
};

export default App;
