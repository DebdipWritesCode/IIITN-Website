import React from "react";

const ReportsPage = () => {
  const reports = [
    {
      eventName: "National Online Webinar on Cyber Security and Youth",
      date: "9th April, 2021",
      reportLink: "#",
      coordinator: "Dr. Kirti Dorshetwar"
    },
    {
      eventName: "400th Birth Anniversary Year of Guru Tegh Bahadur",
      date: "1st April, 2021",
      reportLink: "#",
      coordinator: "Dr. Vipin Kamble"
    },
    {
      eventName: "Elimination of Single Use Plastic",
      date: "19th April, 2021",
      reportLink: "#",
      coordinator: "Dr. Vipin Kamble"
    },
    {
      eventName: "Building an Innovation/ product fit for market",
      date: "14th June, 2021",
      reportLink: "#",
      coordinator: "Dr. Vipin Kamble"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 lg:px-20">
      <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-10">Reports</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-orange-300 shadow-lg">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-4 border border-orange-300">Events Name</th>
              <th className="p-4 border border-orange-300">Date Of Event</th>
              <th className="p-4 border border-orange-300">Report of Event</th>
              <th className="p-4 border border-orange-300">Coordinated By</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "bg-white hover:bg-orange-100" : "bg-orange-100 hover:bg-orange-200"
                }
              >
                <td className="p-4 border border-orange-300">{report.eventName}</td>
                <td className="p-4 border border-orange-300">{report.date}</td>
                <td className="p-4 border border-orange-300">
                  <a href={report.reportLink} className="text-orange-600 font-semibold hover:underline">
                    Click Here
                  </a>
                </td>
                <td className="p-4 border border-orange-300">{report.coordinator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsPage;
