import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export function BarChart({ dataArray, labels, title, color}){
    const data = {
        responsive: true,
        labels: labels,
        datasets: [
            {
              label: title,
              data: dataArray,
              backgroundColor: color,
              // backgroundColor: ['rgba(234, 85, 69, 0.7)','rgba(244, 106, 155, 0.7)','rgba(239, 155, 32, 0.7)','rgba(237, 191, 51, 0.7)',
              //                   'rgba(187, 207, 50, 0.7)','rgba(135, 188, 69, 0.7)','rgba(39, 174, 239, 0.7)','rgba(179, 61, 198, 0.7)']
            }
        ],
        plugins: {
            // legend: {
            //   position: 'top' 
            // },
            // title: {
            //   display: true,
            //   text: title,
            // },
          },
      };
      return <Bar data={data} />;
}
