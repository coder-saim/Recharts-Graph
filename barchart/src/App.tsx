import "./App.css";
import CustomBarChart from "./CustomBarChart";

function App() {
  const chartData1 = {
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
    <div className="App">
      <CustomBarChart data={chartData1.data} chartTitle={chartData1.chartTitle} />
      <CustomBarChart data={chartData2.data} chartTitle={chartData2.chartTitle} />
      <CustomBarChart data={chartData3.data} chartTitle={chartData3.chartTitle} />
    </div>
  );
}

export default App;
