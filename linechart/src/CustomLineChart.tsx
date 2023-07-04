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
      <div className="m-8">
        <h1 className="text-center text-3xl">Line Graph</h1>
        <ResponsiveContainer className= "ml-80" width="60%" height={500}>
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
            <YAxis orientation="right" domain={[0, 4500]} />
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
      </div>
    </>
  );
}

export default CustomLineChart;
