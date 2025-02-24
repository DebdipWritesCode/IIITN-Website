import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface PlacementData {
  batchYear: number;
  highestPackage: number;
  secondHighest: number;
  thirdHighest: number;
  above20LpaCount: number;
  totalCompanies: number;
  branches: { name: string; percentage: number; color: string }[];
}

interface PlacementsProps {
  data: PlacementData;
}

const Placements: React.FC<PlacementsProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Placements - B.Tech. Batch-{data.batchYear}
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-64 h-64">
          <PieChart width={250} height={250}>
            <Pie
              data={data.branches}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              dataKey="percentage"
            >
              {data.branches.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="text-lg text-gray-700 space-y-4">
          <p>
            <span className="font-semibold">Highest Package:</span>{" "}
            <span className="text-red-600 font-semibold">
              {data.highestPackage} LPA
            </span>
          </p>

          <p>
            <span className="font-semibold">Second Highest Package:</span>{" "}
            <span className="text-red-600 font-semibold">
              {data.secondHighest} LPA
            </span>
          </p>

          <p>
            <span className="font-semibold">Third Highest Package:</span>{" "}
            <span className="text-red-600 font-semibold">
              {data.thirdHighest} LPA
            </span>
          </p>

          <p>
            <span className="font-semibold">Students above 20 LPA:</span>{" "}
            <span className="text-red-600 font-semibold">
              {data.above20LpaCount}
            </span>{" "}
            students from batch {data.batchYear}
          </p>

          <p>
            <span className="font-semibold">Total Companies Visited:</span>{" "}
            <span className="text-red-600 font-semibold">
              {data.totalCompanies} companies
            </span>{" "}
            for on-campus placements
          </p>
        </div>
      </div>
    </div>
  );
};

export default Placements;
