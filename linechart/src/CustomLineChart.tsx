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
          <Line dataKey="value" data={line.data} stroke={line.color} dot={false} />
        ))}

      </LineChart>
    </ResponsiveContainer>
  );
}

export default CustomLineChart;
