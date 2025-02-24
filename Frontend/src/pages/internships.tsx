import React from "react";
import pic1 from "../assets/internships/pic1.jpg";
import pic2 from "../assets/internships/pic2.jpg";
import pic3 from "../assets/internships/pic3.jpg";
import pic4 from "../assets/internships/pic4.jpg";
import pic5 from "../assets/internships/pic5.jpg";

const InternshipProgram = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white p-6 rounded-2xl shadow-lg">
        {/* Insert Table Images Here */}
        <div className="flex justify-center flex-col gap-4">
          <img src={pic1} alt="Internship Table" className="w-full rounded-lg shadow-md" />
          <img src={pic2} alt="Internship Table" className="w-full rounded-lg shadow-md" />
          <img src={pic3} alt="Internship Table" className="w-full rounded-lg shadow-md" />
          <img src={pic4} alt="Internship Table" className="w-full rounded-lg shadow-md" />
          <img src={pic5} alt="Internship Table" className="w-full rounded-lg shadow-md" />
        </div>

        {/* Internship Forms Section */}
        <div className="mt-8 p-4 bg-orange-200 rounded-xl">
          <h2 className="text-2xl font-bold text-center text-white-600 mb-4">
            Internship Registration & Report
          </h2>
          <ul className="space-y-3 text-center">
            <li>
              <a href="/path-to-application-form.pdf" className="text-white-600 font-semibold ">
                Internship Application Form - <span className="hover:underline">Download</span>
              </a>
            </li>
            <li>
              <a href="/path-to-joining-form.pdf" className="text-white-600 font-semibold ">
                Internship Joining Application - <span className="hover:underline">Download</span>
              </a>
            </li>
            <li>
              <a href="/path-to-report-guidelines.pdf" className="text-white-600 font-semibold ">
                Internship Report Submission Guideline - <span className="hover:underline">Download</span>
              </a>
            </li>
            <li>
              <a href="/path-to-evaluation-form.pdf" className="text-white-600 font-semibold">
                Internship Evaluation Form - <span className="hover:underline">Download</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InternshipProgram;
