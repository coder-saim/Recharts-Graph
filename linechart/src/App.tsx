import './App.css';
import './index.css'
import CustomLineChart from './CustomLineChart';

function App() {

  const lines = [ 
    {
      title: "Personalized",
      color: "#8B5CF6",
      data: [
        {
          name: "Tues 06/04", //x axis value
          value: 4000, //y axis value
        },
        {
          name: "Mon 06/03",
          value: 3000,
        },
        {
          name: "Sun 06/02",
          value: 2000,
        },
        {
          name: "Sat 06/01",
          value: 3580,
        },
      ],
    },
    {
      title: "Toplist",
      color: "#22C55E",
      data: [
        { 
          name: "Tues 06/04", //x axis value
          value: 1000, //Y axis value
        },
        {
          name: "Mon 06/03",
          value: 3609, 
        },
        {
          name: "Sun 06/02", 
          value: 2405,
        },
        {
          name: "Sat 06/01",
          value: 2381,
        },
      ],
    },

    {
      title: "Random",
      color: "#435B66",
      data: [
        { 
          name: "Tues 06/04", //x axis value
          value: 1200, //Y axis value
        },
        {
          name: "Mon 06/03",
          value:2609, 
        },
        {
          name: "Sun 06/02", 
          value: 3405,
        },
        {
          name: "Sat 06/01",
          value: 2845,
        },
      ],
    },
  ];

  return (
    <div className=''>
      <CustomLineChart lines={lines}></CustomLineChart>
    </div>
  );
}

export default App;
