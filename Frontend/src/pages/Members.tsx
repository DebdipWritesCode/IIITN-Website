const alumniData = [
    { name: "Rohit Agrawal", batch: "2016 - 2020", company: "Zolve Innovations Pvt Ltd" },
    { name: "Aman Soni", batch: "2016 - 2020", company: "SiteMinder" },
    { name: "Renuka Vijay Soman", batch: "2017 - 2021", company: "Capgemini" },
    { name: "Ramdev Godara", batch: "2017 - 2021", company: "Wingify" },
    { name: "Shreyansh Gupta", batch: "2017 - 2021", company: "Infosys" },
    { name: "Ankit Khushal Barai", batch: "2017 - 2021", company: "Amazon" },
    { name: "Atharva Nimbalkar", batch: "2017 - 2021", company: "Shardeum" },
    { name: "Venkatesh Jaiswal", batch: "2017 - 2021", company: "EKI Energy Services Ltd" },
    { name: "Kaustubh Zade", batch: "2017 - 2021", company: "Kickdrum" },
    { name: "Aman Kashyap Kose", batch: "2018 - 2022", company: "Metyis" },
    { name: "Shikhar", batch: "2018 - 2022", company: "Protium" },
    { name: "Saba Bano", batch: "2018 - 2022", company: "NIT Raipur (M.Tech.)" },
    { name: "Nitesh Yadav", batch: "2018 - 2022", company: "Thought Genesis" },
    { name: "Mayur Dongre", batch: "2019 - 2023", company: "Bitmapper Integrations L" },
];

const Members = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Header */}
            <header className="bg-orange-600 text-white py-20 text-center shadow-md">
                <h1 className="text-5xl font-extrabold">🎓 Alumni Members</h1>
                <p className="mt-2 text-lg font-medium">Meet our successful alumni from different batches</p>
            </header>

            {/* Alumni List */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-orange-700 text-center mb-6">Our Esteemed Alumni</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {alumniData.map((alumnus, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <h3 className="text-2xl font-semibold text-gray-800">{alumnus.name}</h3>
                            <p className="text-lg text-gray-600">Batch: {alumnus.batch}</p>
                            <p className="text-lg font-semibold text-orange-600">Company: {alumnus.company}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Members;

