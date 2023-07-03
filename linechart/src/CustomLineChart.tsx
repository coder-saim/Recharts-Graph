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
  val: number;
}

interface LineData {
  title: string;
  color: string;
  data: DataPoint[];
}

interface CustomLineChartProps {
  lines: LineData[];
}

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function CustomizedAxisTick(props: any) {
  const { x, y, stroke, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-90)"
      >
        {payload.value}
      </text>
    </g>
  );
}

function CustomLineChart({ lines }: CustomLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        width={500}
        height={400}
        // data={data}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} /> */}
        <XAxis dataKey="name" allowDuplicatedCategory={false}/>
        <YAxis yAxisId="left" />
        <YAxis orientation="right" />
        <Tooltip />

        {lines.map(line => (
          <Line dataKey="val" data={line.data} stroke={line.color} dot={false} />
        ))}

      </LineChart>
    </ResponsiveContainer>
  );
}

export default CustomLineChart;
