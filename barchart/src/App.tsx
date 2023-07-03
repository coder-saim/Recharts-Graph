import "./App.css";
import CustomBarChart from "./CustomBarChart";

function App() {
  const chartData = {
    chartTitle: "Recall",
    data: [
      {
        name: "Random",
        value: 0.2,
        color: "#D1D5DB",
      },
      {
        name: "Shaped",
        value: 0.5,
        color: "#A855F7",
      },
      {
        name: "Toplist",
        value: 0.8,
        color: "#0EA5E9",
      },
    ],
  };

  const chartData2 = {
    chartTitle: "Precision",
    data: [
      {
        name: "Random",
        value: 0.2,
        color: "#D1D5DB",
      },
      {
        name: "Shaped",
        value: 0.5,
        color: "#A855F7",
      },
      {
        name: "Toplist",
        value: 0.8,
        color: "#0EA5E9",
      },
    ],
  };

  const chartData3 = {
    chartTitle: "NDCG",
    data: [
      {
        name: "Random",
        value: 0.2,
        color: "#D1D5DB",
      },
      {
        name: "Shaped",
        value: 0.5,
        color: "#A855F7",
      },
      {
        name: "Toplist",
        value: 0.8,
        color: "#0EA5E9",
      },
    ],
  };

  return (
    <CustomBarChart
      data={chartData.data}
      chartTitle={chartData.chartTitle}
    ></CustomBarChart>
  );
}

export default App;
