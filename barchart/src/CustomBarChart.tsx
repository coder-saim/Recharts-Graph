import React from "react";

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

const CustomBarChart = ({ data, chartTitle }: CustomBarChartProps) => {
  return <div>bargrah</div>;
};

export default CustomBarChart;
