import React from "react";

const AlumniLogin = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Header */}
            <header className="bg-orange-600 text-white py-20 text-center shadow-md">
                <h1 className="text-5xl font-extrabold">🔑 Alumni Login</h1>
                <p className="mt-2 text-lg font-medium">
                    Join our IIIT Nagpur alumni network and stay connected!
                </p>
            </header>

            {/* Login Form */}
            <section className="max-w-4xl mx-auto px-6 py-6">
                <div className="bg-white shadow-lg rounded-xl p-6">
                    <h2 className="text-3xl font-bold text-orange-700 text-center mb-4">Login</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-700 transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </section>

            {/* Login Section */}
            <section className="max-w-4xl mx-auto px-6 py-6">
                <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                    <h2 className="text-3xl font-bold text-orange-700 mb-4">New Here?</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Join our alumni network and stay updated with the latest events and opportunities.
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdqbykA1fcjoTB6wA30urpnzGJ8zc9qi1qJisHJByT1SUQaSA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-700 transition duration-300"
                    >
                        Register Now
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AlumniLogin;

