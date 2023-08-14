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

// export const data = {
//   labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [4, 9, 1, 5, 2, 3],
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 1,
//     },
//   ],
// };

// export function RankingCharts(props) {
//   // const {  data } = props;
//   return <Radar data={data} />
//   // return <Bar options={options} data={data} />;
// }


export function RadarChart({ dataArray, labels, title }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: dataArray,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={data} />;
}