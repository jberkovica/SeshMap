import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


export function RadarChart({ dataArray, labels, title, color }) {
  const backgroundAlpha = 0.5
  const borderAlpha = 1
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: dataArray,
        backgroundColor: color.replace(')', `, ${backgroundAlpha})`),
        borderColor: color.replace(')', `, ${borderAlpha})`),
        borderWidth: 1,
      },
    ],
  };
  return <Radar data={data} />;
}