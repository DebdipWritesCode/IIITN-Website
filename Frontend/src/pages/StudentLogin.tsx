import { Link } from "react-router-dom";

const StudentLogin = () => {
  const links = [
    {
      title: "Timetable",
      url: "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vSp2JfZZCxiV3e3n3uKekiLFOeh2XQzDov_YDAU4QLRIGD5H6HCoWmQKORMAd8chLib0p-I0749s1Uj/pubhtml?gid=371376379&single=true&urp=gmail_link",
    },
    {
      title: "Lab Schedule",
      url: "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vSp2JfZZCxiV3e3n3uKekiLFOeh2XQzDov_YDAU4QLRIGD5H6HCoWmQKORMAd8chLib0p-I0749s1Uj/pubhtml?gid=349864037&single=true&urp=gmail_link",
    },
    {
      title: "Academic Calendar",
      url: "https://docs.google.com/spreadsheets/u/4/d/e/2PACX-1vTE4sC_wW7D7NFkfPrYMcE9sAnDgXpxTNveJDqv4B1sDLfxQoKP6pupLimjDQV6ofjiJbFvPbsgBCvv/pubhtml?gid=27291685&single=true&urp=gmail_link",
    },
    { title: "Attendance", url: "https://example.com/attendance" },
    { title: "Resources", url: "http://192.168.77.84" },
  ];

  return (
    <div className="p-5 font-montserrat min-h-screen flex flex-col items-center">
      <div className="mb-4 self-start">
        <Link to="/" className="text-orange-600 font-semibold hover:underline">
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Hello Student</h1>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 w-64 bg-white shadow-md rounded-lg text-center border hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{link.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StudentLogin;
