import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

interface DataPoint {
  name: string; //x-axis label name, eg. Random, Toplist
  value: number; //y-axis, eg. 0.3
  color: string; // Bar color in Hex value
}

interface SingleDataPointGraph {
  chartTitle?: string;
  data: DataPoint[];
}

interface CustomBarChartProps extends SingleDataPointGraph {}

function CustomizedAxisTick(props: any) {
  const { x, y, stroke, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        // dy={5}
        dx={-10}
        textAnchor="end"
        fill="#666"
        transform="rotate(-90)"
      >
        {payload.value}
      </text>
    </g>
  );
}

const CustomBarChart = ({ chartTitle, data }: CustomBarChartProps) => {
  return (
    <>
      <div>
        <h1 className="text-center text-2xl mb-4">{chartTitle}</h1>
        <ResponsiveContainer width="70%" height={400}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              axisLine={true}
              tickLine={false}
              dataKey="name"
              height={70}
              tick={<CustomizedAxisTick />}
            />

            {/* <rect height={325} width={355} stroke="#000" fill="none" /> */}

            <YAxis axisLine={false} dx={-10} tickLine={false} domain={[0, 1]} />
            <Tooltip
              cursor={false}
              wrapperStyle={{ width: 100, backgroundColor: "#ffffff" }}
              formatter={function (value) {
                return `${value}`;
              }}
            />

            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CustomBarChart;
