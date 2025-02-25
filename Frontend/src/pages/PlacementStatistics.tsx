import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const placementData = [
  {
    year: "2024",
    highest: 47,
    secondHighest: 45,
    average: 18,
    totalOffers: 250,
    placementRate: 95,
    topRecruiters: ["Google", "Microsoft", "Amazon", "TCS", "Infosys"],
    data: [
      { name: "ECE", value: 20 },
      { name: "CSE", value: 80 },
    ],
  },
  {
    year: "2023",
    highest: 50,
    secondHighest: 48,
    average: 16.5,
    totalOffers: 230,
    placementRate: 92,
    topRecruiters: ["Adobe", "IBM", "Wipro", "Capgemini", "Deloitte"],
    data: [
      { name: "ECE", value: 25 },
      { name: "CSE", value: 75 },
    ],
  },
  {
    year: "2022",
    highest: 42,
    secondHighest: 40,
    average: 15,
    totalOffers: 210,
    placementRate: 88,
    topRecruiters: ["Oracle", "Cognizant", "Accenture", "HCL", "Paytm"],
    data: [
      { name: "ECE", value: 35 },
      { name: "CSE", value: 65 },
    ],
  },
];

const COLORS = ["#0088FE", "#FF8042"];
const barChartData = placementData.map((year) => ({
  year: year.year,
  highest: year.highest,
  average: year.average,
}));

const PlacementStatistics = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-10 px-5">
      <motion.h1
        className="text-4xl font-bold text-center text-[#CE5923] mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📊 Placement Statistics
      </motion.h1>

      {placementData.map((yearData, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 mb-8 transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[#CE5923] mb-4">
            Placements - B.Tech. Batch {yearData.year}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Placement Details */}
            <div>
              <p className="text-lg">
                <strong>🎯 Highest Package:</strong> {yearData.highest} LPA
              </p>
              <p className="text-lg">
                <strong>🥈 Second Highest:</strong> {yearData.secondHighest} LPA
              </p>
              <p className="text-lg">
                <strong>📊 Average Package:</strong> {yearData.average} LPA
              </p>
              <p className="text-lg">
                <strong>📦 Total Offers:</strong> {yearData.totalOffers}
              </p>
              <p className="text-lg">
                <strong>📈 Placement Rate:</strong> {yearData.placementRate}%
              </p>
              <p className="text-lg">
                <strong>🏢 Top Recruiters:</strong>{" "}
                {yearData.topRecruiters.join(", ")}
              </p>
            </div>

            {/* Pie Chart */}
            <div className="flex justify-center">
              <PieChart width={250} height={250}>
                <Pie
                  data={yearData.data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {yearData.data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Bar Chart for Year-wise Growth */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-[#CE5923] mb-4 text-center">
          📈 Year-wise Highest & Average Package Growth
        </h2>
        <div className="flex justify-center">
          <BarChart width={500} height={300} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="highest"
              fill="#0088FE"
              name="Highest Package (LPA)"
            />
            <Bar
              dataKey="average"
              fill="#FF8042"
              name="Average Package (LPA)"
            />
          </BarChart>
        </div>
      </motion.div>

      {/* Animated Placement Metrics */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-3xl font-bold text-[#CE5923]">
            <CountUp end={95} duration={2} />%
          </h3>
          <p className="text-lg">Overall Placement Rate</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-3xl font-bold text-[#CE5923]">
            <CountUp end={250} duration={2} />
          </h3>
          <p className="text-lg">Total Offers in 2024</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-3xl font-bold text-[#CE5923]">
            <CountUp end={47} duration={2} /> LPA
          </h3>
          <p className="text-lg">Highest Package (2024)</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PlacementStatistics;
