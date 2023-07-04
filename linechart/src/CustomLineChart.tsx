import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

interface LineData {
  title: string;
  color: string;
  data: DataPoint[];
}

interface CustomLineChartProps {
  lines: LineData[];
}

function CustomLineChart({ lines }: CustomLineChartProps) {
  return (
    <>
      <div>
        <h1 className="App">Line Graph</h1>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            width={500}
            height={400}
            margin={{
              top: 15,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} /> */}
            <XAxis dataKey="name" allowDuplicatedCategory={false} />
            <YAxis yAxisId="left" />
            <YAxis orientation="right" />
            <Tooltip />

            {lines.map((line) => (
              <Line
                key={line.title}
                dataKey="value"
                data={line.data}
                stroke={line.color}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <h1 className="text-yellow-500">hello</h1>
      </div>
    </>
  );
}

export default CustomLineChart;
