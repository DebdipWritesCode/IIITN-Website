import React from "react";
import BOS from "../assets/academics/ECE.jpg";

const BOS_ECE: React.FC = () => {
    return (
        <div className="bg-gray-100 pt-10">
            {/* Header */}
            <header className="bg-orange-600 text-white py-4 px-6 flex justify-center items-center w-full top-0 z-50 shadow-md">
                <h1 className="text-center text-3xl font-bold">Board of Studies - ECE Department</h1>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto py-10 px-6">
                <section className="bg-white p-6 rounded-lg shadow-lg">
                    <img
                        src={BOS}
                        alt="ECE Department"
                        className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Board of Studies Members</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-orange-600 text-white">
                                    <th className="py-2 px-4 border">Sr. No.</th>
                                    <th className="py-2 px-4 border">Name</th>
                                    <th className="py-2 px-4 border">Position</th>
                                    <th className="py-2 px-4 border">Designation</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {[
                                    { id: 1, name: "Dr. Harsh Goud", position: "Chairman", designation: "Head of Department, ECE" },
                                    { id: 2, name: "Dr. Tausif Diwan", position: "Special Invitee", designation: "Associate Dean, IIITN" },
                                    { id: 3, name: "Shri Vikas Naiyar", position: "Expert Member", designation: "Industry Expert" },
                                    { id: 4, name: "Dr. Vishal Satpute", position: "Expert Member", designation: "Associate Professor (ECE), VNIT Nagpur" },
                                    { id: 5, name: "Dr. Nishat Ansari", position: "Special Invitee", designation: "Head of Department, CSE" },
                                    { id: 6, name: "Dr. Prasad Joshi", position: "Special Invitee", designation: "Head of Department, BS" },
                                    { id: 7, name: "Dr. Mayur Parate", position: "Member", designation: "Assistant Professor" },
                                    { id: 8, name: "Dr. Tapan Jain", position: "Member", designation: "Assistant Professor" },
                                    { id: 9, name: "Dr. Rashmi Pandhare", position: "Member", designation: "Assistant Professor" },
                                    { id: 10, name: "Dr. Paritosh Peshwe", position: "Member", designation: "Assistant Professor" },
                                    { id: 11, name: "Dr. Parul Sahare", position: "Member", designation: "Assistant Professor" },
                                    { id: 12, name: "Dr. Nikhil Agrawal", position: "Member", designation: "Assistant Professor" },
                                    { id: 13, name: "Dr. Girish Ghivela", position: "Member", designation: "Assistant Professor" },
                                    { id: 14, name: "Dr. Sushmita Dandeliya", position: "Member", designation: "Assistant Professor" },
                                    { id: 15, name: "Dr. Shankar Bhattacharjee", position: "Member", designation: "Assistant Professor" },
                                    { id: 16, name: "Dr. Rajanish Kumar Singh", position: "Member", designation: "Assistant Professor" },
                                    { id: 17, name: "Dr. Khuraijam Nelson Singh", position: "Member", designation: "Assistant Professor" },
                                    { id: 18, name: "Dr. Nikhil Dhengre", position: "Member", designation: "Assistant Professor" },
                                    { id: 19, name: "Dr. Bhukya Venkanna Naik", position: "Member", designation: "Assistant Professor" }
                                ].map((member) => (
                                    <tr key={member.id} className="border-t">
                                        <td className="py-2 px-4 border text-center">{member.id}</td>
                                        <td className="py-2 px-4 border">{member.name}</td>
                                        <td className="py-2 px-4 border">{member.position}</td>
                                        <td className="py-2 px-4 border">{member.designation}</td>
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

export default BOS_ECE;
