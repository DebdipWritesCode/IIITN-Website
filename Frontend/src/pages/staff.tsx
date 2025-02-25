import React from "react";

interface StaffMember {
  srNo: number;
  name: string;
  designation: string;
  contact: string;
  email: string;
}

const staffMembers: StaffMember[] = [
  { srNo: 1, name: "Mr. Harshad Pophali", designation: "O S D", contact: "9373288110", email: "harshad.pophali@iiitn.ac.in" },
  { srNo: 2, name: "Mr. Rajesh Mahadeorao Hakke", designation: "O S D", contact: "9422802007", email: "osdrhakke@iiitn.ac.in" },
  { srNo: 3, name: "Dr. Meera Satav", designation: "Junior Superintendent (T & P)", contact: "9764490050", email: "meerajagdale@iiitn.ac.in, tnp@iiitn.ac.in" },
  { srNo: 4, name: "Dr. Mahesh Shukla", designation: "Officer (T & P)", contact: "9890070945", email: "otp@iiitn.ac.in" },
  { srNo: 5, name: "Ms. Shilpa Pawankar", designation: "Assistant Registrar (Accounts)", contact: "9730012925", email: "aracct@iiitn.ac.in" },
  { srNo: 6, name: "Mrs. Madhuri Bobade", designation: "Junior Officer (Accounts)", contact: "9860538883", email: "jombobade@iiitn.ac.in" },
  { srNo: 7, name: "Mr. Tushar Nimkar", designation: "Junior Assistant (Internal Audit)", contact: "8180843224", email: "jatrnimkar@iiitn.ac.in" },
  { srNo: 8, name: "Mr. Pritesh Tiwari", designation: "Technical Officer", contact: "9425786655", email: "to@iiitn.ac.in" },
  { srNo: 9, name: "Mr. Avinash Suryawanshi", designation: "AOSD", contact: "9960206223", email: "aosd@iiitn.ac.in" },
  { srNo: 10, name: "Mr. Anil Pakhidde", designation: "Officer-Admin", contact: "9970217560", email: "oapakhidde@iiitn.ac.in" },
  { srNo: 11, name: "Mr. Shashikant Bhongale", designation: "Junior Superintendent (Hostel)", contact: "9049638115", email: "shashikant.bhongale@iiitn.ac.in" },
  { srNo: 12, name: "Mr. Abhishek Paliwal", designation: "Junior Assistant (Multi-Skilled) Admin", contact: "8275535335", email: "jaaspaliwal@iiitn.ac.in" },
  { srNo: 13, name: "Mr. Raunak Mundada", designation: "Junior Assistant (Multi-Skilled) Admin", contact: "8446573310", email: "jarmundada@iiitn.ac.in" },
  { srNo: 14, name: "Mr. Mohan Uikey", designation: "Junior Officer (Admin)", contact: "7719043956", email: "jomsuikey@iiitn.ac.in" },
  { srNo: 15, name: "Ms. Harsha Nagpure", designation: "Junior Officer (Admin)", contact: "9096927754", email: "johgnagpure@iiitn.ac.in" },
  { srNo: 16, name: "Mr. Vikash Singh Shekhawat", designation: "Junior Officer (Admin)", contact: "7568783847", email: "jovshekhawat@iiitn.ac.in" },
  { srNo: 17, name: "Mrs. Rupawati Jogi", designation: "Junior Officer (Admin)", contact: "7020647537", email: "jorjogi@iiitn.ac.in" },
  { srNo: 18, name: "Mr. Shubham Buradkar", designation: "Junior Officer (Admin)", contact: "8805414194", email: "josburadkar@iiitn.ac.in" },
  { srNo: 19, name: "Mr. Sunil Dhole", designation: "Junior Officer (Admin)", contact: "7875721870", email: "instructor@iiitn.ac.in" },
  { srNo: 20, name: "Mr. Pawan Sanjay Katre", designation: "Junior Officer (Admin)", contact: "8390357486", email: "jopkatre@iiitn.ac.in" },
  { srNo: 21, name: "Mr. Akash Ramdasrao Kakde", designation: "Junior Officer (Admin)", contact: "8888984630", email: "joakakade@iiitn.ac.in" },
  { srNo: 22, name: "Mr. Ajay Kumar", designation: "Technical Assistant", contact: "9090090090", email: "ajay.kumar@iiitn.ac.in" },
  { srNo: 23, name: "Ms. Rina Sharma", designation: "HR Officer", contact: "9988776655", email: "rina.sharma@iiitn.ac.in" },
  { srNo: 24, name: "Mr. Kunal Jaiswal", designation: "Library Incharge", contact: "9112233445", email: "kunal.jaiswal@iiitn.ac.in" },
  { srNo: 25, name: "Mr. Arvind Yadav", designation: "Lab Assistant", contact: "9333445566", email: "arvind.yadav@iiitn.ac.in" },
  { srNo: 26, name: "Ms. Priya Patil", designation: "Student Counselor", contact: "9776655443", email: "priya.patil@iiitn.ac.in" },
  { srNo: 27, name: "Mr. Ankit Gupta", designation: "Accountant", contact: "9123456789", email: "ankit.gupta@iiitn.ac.in" },
  { srNo: 28, name: "Mr. Sandeep Deshmukh", designation: "Sports Officer", contact: "9011223344", email: "sandeep.deshmukh@iiitn.ac.in" },
  { srNo: 29, name: "Ms. Neha Joshi", designation: "Assistant Librarian", contact: "9567890123", email: "neha.joshi@iiitn.ac.in" },
  { srNo: 30, name: "Mr. Rahul Kulkarni", designation: "Administrative Officer", contact: "9876543210", email: "rahul.kulkarni@iiitn.ac.in" },
];

const StaffTable: React.FC = () => {
  return (
    <div className="bg-orange-50 text-gray-800 min-h-screen flex items-center justify-center p-6">
      <div className="container mx-auto px-6 py-8 max-w-6xl bg-white shadow-xl rounded-lg p-8 border border-orange-200">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-orange-600">Staff Members</h1>
        </header>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md text-lg">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="border border-gray-300 px-6 py-3">Sr No.</th>
                <th className="border border-gray-300 px-6 py-3">Name</th>
                <th className="border border-gray-300 px-6 py-3">Designation</th>
                <th className="border border-gray-300 px-6 py-3">Contact</th>
                <th className="border border-gray-300 px-6 py-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {staffMembers.map((member,index) => (
                <tr key={member.srNo} className={index % 2 === 0 ? "bg-orange-100" : "bg-white hover:bg-orange-200"}>
                  <td className="border border-gray-300 px-6 py-3">{member.srNo}</td>
                  <td className="border border-gray-300 px-6 py-3">{member.name}</td>
                  <td className="border border-gray-300 px-6 py-3">{member.designation}</td>
                  <td className="border border-gray-300 px-6 py-3">{member.contact}</td>
                  <td className="border border-gray-300 px-6 py-3">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffTable;
