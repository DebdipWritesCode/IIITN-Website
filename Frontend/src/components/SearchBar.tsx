import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = {
  Home: "/",
  About: "/about",
  Contact: "/contact",
  Login: "/login",
  Academics: "/academics",
  "Basic Sciences": "/academics/basic-sciences",
  "About Department (Basic Sciences)": "/academics/basic-sciences/about",
  "BoS (Basic Sciences)": "/academics/basic-sciences/bos",
  "Achievements (Basic Sciences)": "/academics/basic-sciences/achievements",
  "Research (Basic Sciences)": "/academics/basic-sciences/research",
  "Faculty (Basic Sciences)": "/academics/basic-sciences/faculty",
  "Staff (Basic Sciences)": "/academics/basic-sciences/staff",
  "Projects (Basic Sciences)": "/academics/basic-sciences/projects",
  "Laboratory (Basic Sciences)": "/academics/basic-sciences/laboratory",
  "Events (Basic Sciences)": "/academics/basic-sciences/events",

  "Computer Science and Engg.": "/academics/cse",
  "About Department (CSE)": "/academics/cse/about",
  "BoS (CSE)": "/academics/cse/bos",
  "Achievements (CSE)": "/academics/cse/achievements",
  "Research (CSE)": "/academics/cse/research",
  "Faculty (CSE)": "/academics/cse/faculty",
  "Staff (CSE)": "/academics/cse/staff",
  "Projects (CSE)": "/academics/cse/projects",
  "Laboratory (CSE)": "/academics/cse/laboratory",
  "Events (CSE)": "/academics/cse/events",

  Governance: "/governance",
  "Board Of Governors": "/governance/board-of-governors",
  "Finance Committee": "/governance/finance-committee",
  Senate: "/governance/senate",

  "Electronics & Communication Engg.": "/academics/ece",
  "About Department (ECE)": "/academics/ece/about",
  "BoS (ECE)": "/academics/ece/bos",
  "Achievements (ECE)": "/academics/ece/achievements",
  "Research (ECE)": "/academics/ece/research",
  "Faculty (ECE)": "/academics/ece/faculty",
  "Staff (ECE)": "/academics/ece/staff",
  "Projects (ECE)": "/academics/ece/projects",
  "Laboratory (ECE)": "/academics/ece/laboratory",
  "Events (ECE)": "/academics/ece/events",

  "Doctoral Programme": "/doctoral-programme",
  "Overview of PhD Program": "/doctoral-programme/overview",
  "Doctoral Programme Features": "/doctoral-programme/features",
  "Research Areas": "/doctoral-programme/research-areas",
  "Operational Details": "/doctoral-programme/operational-details",
  "Important Proformas": "/doctoral-programme/proformas",
  Checklists: "/doctoral-programme/checklists",
  "Contact Us (Doctoral)": "/doctoral-programme/contact",

  Programs: "/programs",
  "B.Tech": "/programs/btech",
  "PG Diploma": "/programs/pg-diploma",
  PhD: "/programs/phd",
  "M.Tech": "/programs/mtech",
  Curriculum: "/programs/curriculum",
  Reports: "/programs/reports",

  "Building Works Committee": "/governance/building-works-committee",
  Chairman: "/governance/chairman",
  Director: "/governance/director",
  Registrar: "/governance/registrar",
  "Staff (Governance)": "/governance/staff",

  Admissions: "/admissions",
  "Undergraduate B.Tech": "/admissions/undergraduate",
  "Postgraduate M.Tech": "/admissions/postgraduate",
  "UG Academic Rule Book": "/admissions/ug-rulebook",
  "PG Academic Rule Book": "/admissions/pg-rulebook",

  Students: "/students",
  Activities: "/students/activities",
  "Achievements (Students)": "/students/achievements",
  "Clinical Counselling": "/students/clinical-counselling",
  Scholarships: "/students/scholarships",
  Hostel: "/students/hostel",
  "Student Mess": "/students/mess",
  Download: "/students/download",
  "Convocation 2023": "/students/convocation-2023",
  Fees: "/students/fees",
  Clubs: "/students/clubs",
  Alumni: "/students/alumni",

  "Member Login": "/members/login",
  Members: "/members",
  "About Us (Members)": "/members/about",

  Placements: "/placements",
  "About Us (Placements)": "/placements/about",
  "Why Recruit from IIIT Nagpur?": "/placements/why-recruit",
  "Placement Statistics": "/placements/statistics",
  "For Companies": "/placements/companies",
  "For Students": "/placements/students",
  "Contact T&P": "/placements/contact",

  Internships: "/internships",
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query) {
      setSuggestion(null);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/search/`,
          { params: { query }, signal }
        );
        setSuggestion(
          res.data.results.closest_matches[0] || "No results found"
        );
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Search error:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(fetchSearchResults, 300);

    return () => {
      clearTimeout(debounceTimeout);
      controller.abort();
    };
  }, [query]);

  return (
    <div ref={searchRef} className="relative w-48 h-8">
      <div className="bg-white border border-gray-300 rounded-md shadow-sm px-2 flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full p-1 text-sm outline-none text-gray-700"
        />
      </div>
      {(loading || suggestion) && (
        <div className="absolute top-6 left-0 mt-1 w-full bg-white border-gray-500 rounded-md shadow-md p-1 z-[150] border-2">
          {loading ? (
            <div className="flex justify-center">
              <Loader2 className="animate-spin text-gray-500" size={20} />
            </div>
          ) : (
            suggestion &&
            suggestion !== "No results found" && (
              <Link className="text-gray-700 text-lg" to={navLinks[suggestion]}>
                {suggestion}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
