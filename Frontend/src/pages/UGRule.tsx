const ruleBook = {
    title: "B. Tech Rule Book",
    link: "https://iiitn.ac.in/Downloads/AcademicRuleBook/Academic%20Rule%20Book_B.Tech_2024-25%20Onwards.pdf", // Replace with actual link
};

const UGRule = () => {
    return (
        <div className="bg-gray-50 text-gray-900 font-sans">
            {/* Header */}
            <header className="bg-orange-600 text-white py-12 text-center shadow-lg">
                <h1 className="text-5xl font-extrabold">📘 UG Academic Rule Book</h1>
            </header>

            {/* Content Section */}
            <section className="max-w-5xl mx-auto px-6 py-8 pb-4">
                <h2 className="text-3xl font-bold text-orange-700 border-b pb-2">
                    UG ACADEMIC RULE BOOK
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                    The academic rule book for B. Tech CSE and ECE are as follows:
                </p>

                {/* Rule Book Link */}
                <div className="mt-6">
                    <a
                        href={ruleBook.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:bg-orange-700">
                            {ruleBook.title}
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default UGRule;
