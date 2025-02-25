const Curriculum = () => {
    return (
        <div className="pt-24 px-6 lg:px-20 font-montserrat mb-16 bg-[#FFF2E1] min-h-screen">
            {/* Title */}
            <h1 className="text-5xl font-semibold pb-8 text-center text-[#D35400]">
                Curriculum
            </h1>

            {/* Link Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
                {["B.Tech CSE", "B.Tech ECE", "PhD"].map((program, index) => (
                    <a
                        key={index}
                        href={`/${program.toLowerCase().replace(/\s+/g, "-")}`}
                        className="px-8 py-4 bg-[#D35400] text-white rounded-lg text-lg shadow-md hover:bg-[#A04000] transition transform hover:scale-105"
                    >
                        {program}
                    </a>
                ))}
            </div>

            {/* Time Table Section - Bigger & Broader */}
            <div className="max-w-lg md:max-w-2xl mx-auto mb-12 p-8 bg-[#FAD7A0] rounded-2xl shadow-md border border-[#D35400]">
                <h2 className="text-3xl font-semibold text-[#D35400] mb-6 text-center">
                    Time Table of B. Tech.
                </h2>

                <div className="bg-[#D35400] text-white text-xl font-semibold p-4 rounded-t-lg text-center">
                    B.Tech (All Semester)
                </div>

                <div className="border border-[#D35400] rounded-b-lg p-6 bg-white flex flex-col gap-4">
                    {[
                        { text: "📅 Slot", link: "#" },
                        { text: "🏫 Classroom Occupancy", link: "#" },
                        { text: "🧪 Lab Occupancy", link: "#" },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="px-6 py-4 bg-[#D35400] text-white rounded-md shadow-sm text-center hover:bg-[#A04000] transition transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
                        >
                            {item.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Curriculum;