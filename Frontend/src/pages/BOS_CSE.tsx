import React from "react";
import BOS from "../assets/academics/CSE.jpg";

const BOS_CSE: React.FC = () => {
    return (
        <div className="bg-gray-100 pt-10">
            {/* Header */}
            <header className="bg-orange-600 text-white py-4 px-6 flex justify-center items-center w-full top-0 z-50 shadow-md">
                <h1 className="text-center text-3xl font-bold">IIIT Nagpur - Board of Studies (CSE Department)</h1>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto py-16 px-6">
                <section className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <img
                        src={BOS}
                        alt="CSE Department"
                        className="w-full max-h-96 object-cover rounded-lg mb-6"
                    />
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Board of Studies - CSE Department</h2>
                </section>

                <section className="bg-white p-6 mt-8 rounded-lg shadow-lg overflow-x-auto">
                    <table className="w-full border-collapse border border-orange-600">
                        <thead>
                            <tr className="bg-orange-600 text-white">
                                <th className="border border-white px-4 py-2">Sr. No.</th>
                                <th className="border border-white px-4 py-2">Name</th>
                                <th className="border border-white px-4 py-2">Position</th>
                                <th className="border border-white px-4 py-2">Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: 1, name: "Dr Nishat Afshan Ansari", position: "Chairman", designation: "Chairman & HoD, CSE" },
                                { id: 2, name: "Dr. P. S. Deshpande", position: "Expert Member", designation: "Professor, CSE, VNIT" },
                                { id: 3, name: "Shri. Gandhar Patwardhan", position: "Expert Member", designation: "Managing Director, S2P EDUTECH" },
                                { id: 4, name: "Dr. Harsh Gaud", position: "Expert Member", designation: "Head of Department, ECE" },
                                { id: 5, name: "Dr. Ashish Tiwari", position: "Special Invitee", designation: "Assistant Professor, CSE, VNIT" },
                                { id: 6, name: "Dr. Tausif Diwan", position: "Special Invitee", designation: "Associate Dean, IIITN" },
                                { id: 7, name: "Dr. Prasad V Joshi", position: "Special Invitee", designation: "Head of Department, BS" },
                                { id: 8, name: "Dr. Pooja Jain", position: "Member", designation: "Assistant Professor" },
                                { id: 9, name: "Dr. Jitendra Tembhurne", position: "Member", designation: "Assistant Professor" },
                                { id: 10, name: "Dr. Milind Penurkar", position: "Member", designation: "Assistant Professor" },
                                { id: 11, name: "Dr. Mayuri Digalwar", position: "Member", designation: "Assistant Professor" },
                                { id: 12, name: "Dr. Richa Makhijani", position: "Member", designation: "Assistant Professor" },
                                { id: 13, name: "Dr. Kaushlendra Sharma", position: "Member", designation: "Assistant Professor" },
                                { id: 14, name: "Dr. Rahul Semwal", position: "Member", designation: "Assistant Professor" },
                                { id: 15, name: "Dr. Khushboo Jain", position: "Member", designation: "Assistant Professor" },
                                { id: 16, name: "Dr. Shishupal Kumar", position: "Member", designation: "Assistant Professor" },
                                { id: 17, name: "Dr. Anil Kumar Kushwah", position: "Member", designation: "Assistant Professor" },
                                { id: 18, name: "Dr. Aishwarya Sagar Anand Ukey", position: "Member", designation: "Assistant Professor" },
                                { id: 19, name: "Dr. Vrinda Yadav", position: "Member", designation: "Assistant Professor" },
                                { id: 20, name: "Dr. Jagdish Chakole", position: "Member", designation: "Assistant Professor" },
                                { id: 21, name: "Dr. Nileshchandra Pikle", position: "Member", designation: "Assistant Professor" },
                                { id: 22, name: "Dr. Amol Bhopale", position: "Member", designation: "Assistant Professor" },
                                { id: 23, name: "Dr. Suvra Jyoti Choudhury", position: "Member", designation: "Assistant Professor" },
                                { id: 24, name: "Dr. Neha Kasture", position: "Member", designation: "Assistant Professor" },
                                { id: 25, name: "Dr. Amit Shewale", position: "Member", designation: "Assistant Professor" },
                                { id: 26, name: "Dr. Snehal Bankatrao Shinde", position: "Member", designation: "Assistant Professor" },
                                { id: 27, name: "Dr. Vasundhara Swapnil Rathod", position: "Member", designation: "Assistant Professor" },
                                { id: 28, name: "Dr. Mangesh Ramaji Kose", position: "Member", designation: "Assistant Professor" },
                                { id: 29, name: "Dr. Swati Hira", position: "Member", designation: "Assistant Professor" }
                            ].map((member) => (
                                <tr key={member.id} className="border border-orange-600">
                                    <td className="border border-orange-600 px-4 py-2 text-center">{member.id}</td>
                                    <td className="border border-orange-600 px-4 py-2">{member.name}</td>
                                    <td className="border border-orange-600 px-4 py-2">{member.position}</td>
                                    <td className="border border-orange-600 px-4 py-2">{member.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default BOS_CSE;
