import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomLineChart from './CustomLineChart';

function App() {

  const lines = [ 
    {
      title: "Personalized",
      color: "#8B5CF6",
      data: [
        {
          name: "06/04", //x axis value
          val: 4000, //y axis value
        },
        {
          name: "06/03",
          val: 3000,
        },
        {
          name: "06/02",
          val: 2000,
        },
        {
          name: "06/01",
          val: 2780,
        },
      ],
    },
    {
      title: "Toplist",
      color: "#22C55E",
      data: [
        { 
          name: "06/04", //x axis value
          val: 1000, //Y axis value
        },
        {
          name: "06/03",
          val: 3009, 
        },
        {
          name: "06/02", 
          val: 2005,
        },
        {
          name: "06/01",
          val: 2781,
        },
      ],
    },
  ];

  return (
    <div>
      <CustomLineChart lines={lines}></CustomLineChart>
    </div>
  );
}

export default App;
