import React from "react";
import BasicScienceBos from "../assets/academics/BS.jpg"

const BOS_BS: React.FC = () => {
    return (
        <div className="bg-gray-100 pt-10">
            {/* Header */}
            <header className="bg-orange-600 text-white py-4 px-6 flex justify-center items-center w-full top-0 z-50 shadow-md">
                <h1 className="text-center text-3xl font-bold">IIIT Nagpur - Basic Sciences BOS</h1>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto py-16 px-6">
                <section className="bg-white p-6 rounded-lg shadow-lg">
                    <img
                        src={BasicScienceBos}
                        alt="Basic Sciences BOS"
                        className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Board of Studies - Basic Sciences</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-orange-600">
                            <thead>
                                <tr className="bg-orange-600 text-white">
                                    <th className="border border-orange-600 px-4 py-2">Sr. No.</th>
                                    <th className="border border-orange-600 px-4 py-2">Name</th>
                                    <th className="border border-orange-600 px-4 py-2">Position</th>
                                    <th className="border border-orange-600 px-4 py-2">Designation</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {[
                                    ["1", "Dr. Prasad V. Joshi", "Chairman", "Head of Department, BS"],
                                    ["2", "Dr. Tausif Diwan", "Special Invitee", "Associate Dean"],
                                    ["3", "Dr. Harsh Goud", "Special Invitee", "Head of Department, ECE"],
                                    ["4", "Dr. Nishat Ansari", "Special Invitee", "Head of Department, CSE"],
                                    ["5", "Dr. Yogesh Deshpande", "External Member", "Professor, (Psychology & Management), VNIT Nagpur"],
                                    ["6", "Dr. M. Devakar", "External Member", "Professor, (Mathematics), VNIT Nagpur"],
                                    ["7", "Dr. R.S. Gedam", "External Member", "Professor, (Physics), VNIT Nagpur"],
                                    ["8", "Dr. Bibhudatta Dash", "External Member", "Assistant Professor, (Language), VNIT Nagpur"],
                                    ["9", "Dr. Maithili Paikane", "External Member", "Assistant Professor, (Social Science)"],
                                    ["10", "Shri Varun Pimplapure", "External Member", "Industry Expert (Delhivery) (Ex. Army Officer)"],
                                    ["11", "Dr. Kirti Dorshetwar", "Member", "Assistant Professor"],
                                    ["12", "Dr. Charu Goel", "Member", "Assistant Professor"],
                                    ["13", "Dr. Aatish Daryapurkar", "Member", "Assistant Professor"],
                                    ["14", "Dr. Chandrashekhar Sakode", "Member", "Assistant Professor"],
                                    ["15", "Dr. Kamaljeet", "Member", "Assistant Professor"],
                                    ["16", "Dr. Ujwal Warbe", "Member", "Assistant Professor"],
                                ].map(([sr, name, position, designation], index) => (
                                    <tr key={index} className="border border-orange-600">
                                        <td className="border border-orange-600 px-4 py-2 text-center">{sr}</td>
                                        <td className="border border-orange-600 px-4 py-2">{name}</td>
                                        <td className="border border-orange-600 px-4 py-2">{position}</td>
                                        <td className="border border-orange-600 px-4 py-2">{designation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BOS_BS;
