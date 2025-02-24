import React from "react";

const achievements = {
  CSE: {
    2020: [
      "Students from 2nd Year CSE S Arvind, Anshika Jain under the guidance of Dr. Nidhi Lal and Dr. Mayuri Digalwar, Assistant Professor in Dept. of CSE published paper titled 'Insurance Claim Prediction Approach Using Machine Learning based Logistic Regression', IEEE International Conference on Measurement, Instrumentation, Control and Automation (#48462) (ICMICA 2020) April 2, 2020 to April 4,2020, NIT Kurukshetra, Accepted.",
      "Students from 2nd Year CSE Varun Shirbhayye, Deepesh Kurmi, Siddharth Dyavanapalli, A. Sai Hari Prasad under the guidance of Dr. Nidhi Lal, Assistant Professor in Dept. of CSE published paper titled 'An Accurate Prediction of MPG (Miles Per Gallon) using Linear Regression Model of Machine Learning', In 2020 International Conference on Computer Communication and Informatics (ICCCI), pp. 1-5. IEEE, 2020.",
      "Student from 2nd Year CSE Apurv Chandel and students from 4th Year ECE Aniruddha Gawate and Sahil Kesharwani published paper titled 'Economic Ramification Due To COVID-19', Available at SSRN 3598972 (2020).",
      "Student from 2nd Year CSE Apurv Chandel published paper titled 'An Accurate Estimation of Interstate Traffic of Metro City Using Linear Regression Model of Machine Learning' Available at SSRN 3598310 (2020).",
      "Students from 2nd Year CSE Montu Saw, Tarun Saxena, Sanjana Kaithwas, Rahul Yadav under the guidance of Dr. Nidhi Lal, Assistant Professor in Dept. of CSE published paper titled 'Estimation of Prediction for Getting Heart Disease Using Logistic Regression Model of Machine Learning', In 2020 International Conference on Computer Communication and Informatics (ICCCI), pp. 1-6. IEEE, 2020.",
      "Mr. Sunny Dhoke, Final year student from CSE selected for Google Summer of Code – R Project for Statistical Computing – 2020.",
      "Mr. Aditya Sher and Mr. Sourav Singh from 3rd Year IIIT, Nagpur with Team name 'X-LABS' won First Prize at Hackathon - 2020, Hyderabad.",
      "The mobile app 'COWAR' on COVID 19 developed by Second Year CSE students Mr. Tarun Saxena, Ms. Gandhali Shinde, Mr. Nitesh Yadav and Mr. Prince Anuragi under the guidance of Dr. Mayuri A. Digalwar, Assistant Professor, Department of CSE - 2020.",
    ],
    2019: [
      "Team 'THE TERRIFYING NIGHTMARES' won 1st Prize @ Smart India Hackathon – 2019.",
      "Vaibhav H. Agasti (Final Year CSE) pursued an internship at Muma College of Business, University of South Florida – 2019.",
      "Students from 3rd Year CSE Ankit Khushal Barai published the paper titled 'NSE Stock prediction-Deep learning way', SoCTA 2019.",
      "Students from 3rd Year CSE Ankit Khushal Barai published the paper titled 'Drone video management systems', HiPC 2019.",
    ],
  },
  ECE: {
    2020: [
      "Students from 3rd Year ECE Shivani Dhok, Varad Pimpalkhute, Ambarish Chandurkar under the guidance of Dr. Ankit Bhurane, Dr. Manish Sharma and Dr. U Rajendra Acharcya published the paper titled 'Automated phase classification in cyclic alternating patterns in sleep stages using Wigner–Ville Distribution based features', Computers in Biology and Medicine, 2020. DOI: https://doi.org/10.1016/j.compbiomed.2020.103691. SCI.",
      "Mr. Sahil Kesharwani (BT18ECE032) a Second Year ECE student developed an android app 'COVID CARE' under the mentorship of Dr. Anuradha Singh and Dr. Kirti Dorshetwar - 2020.",
    ],
    2019: [
      "Students from 3rd Year ECE published the paper titled 'Advanced Signal Processing Techniques in Wireless Communication', IEEE 2019.",
      "Team 'Innovators' from ECE secured 2nd place in National Level Robotics Competition – 2019.",
    ],
  },
};

const AchievementsPage: React.FC = () => {
  return (
    <div className="bg-orange-50 min-h-screen p-8 font-sans">
      <h1 className="text-6xl font-bold text-orange-700 text-center mb-10 underline">Achievements</h1>
      <div className="max-w-6xl mx-auto space-y-10">
        {Object.entries(achievements).map(([dept, years]) => (
          <div key={dept} className="bg-white p-10 rounded-2xl shadow-lg border-4 border-orange-500">
            <h2 className="text-4xl font-bold text-orange-800 underline mb-5">{dept} Department</h2>
            <div className="mt-4 space-y-6">
              {Object.entries(years)
                .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                .map(([year, items]) => (
                  <div key={year}>
                    <h3 className="text-3xl font-semibold text-orange-600 border-b-4 border-orange-500 pb-2">{year}</h3>
                    <ul className="list-disc list-inside text-gray-900 space-y-4 mt-3">
                      {items.map((item, index) => (
                        <li key={index} className="bg-orange-100 p-5 rounded-xl shadow-md hover:bg-orange-200 transition-transform transform hover:scale-105 hover:text-orange-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;