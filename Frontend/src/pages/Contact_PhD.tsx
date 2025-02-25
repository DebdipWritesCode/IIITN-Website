import React from "react";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Contact Us</h1>
            <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 text-center mb-6">
                    For any information related to the Ph.D. program, you can contact the Ph.D. Coordinator, IIIT Nagpur.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-2">Ph.D. Coordinator (ECE Department)</h2>
                    <p className="text-gray-800"><span className="font-semibold">Dr. Rashmi Pandhare</span></p>
                    <p className="text-gray-800">Assistant Professor, ECE, IIIT Nagpur</p>
                    <p className="text-gray-800">
                        Email:
                        <a href="mailto:rpandhare@iiitn.ac.in"
                            className="text-blue-600 underline transition-colors duration-300 hover:text-blue-800 hover:font-semibold hover:scale-105">
                            rpandhare@iiitn.ac.in
                        </a>
                    </p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-2">Ph.D. Coordinator (CSE Department)</h2>
                    <p className="text-gray-800"><span className="font-semibold">Dr. Mayuri Digalwar</span></p>
                    <p className="text-gray-800">Assistant Professor, CSE, IIIT Nagpur</p>
                    <p className="text-gray-800">
                        Email:
                        <a href="mailto:mayuri@iiitn.ac.in"
                            className="text-blue-600 underline transition-colors duration-300 hover:text-blue-800 hover:font-semibold hover:scale-105">
                            mayuri@iiitn.ac.in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
