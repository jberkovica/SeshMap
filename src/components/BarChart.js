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



export function BarChart({ dataArray, labels, title }){
    const data = {
        responsive: true,
        labels: labels,
        datasets: [
            {
              label: 'Dataset 1',
              data: dataArray,
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            // {
            //   label: 'Dataset 2',
            //   data: dataArray,
            //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
        ],
        plugins: {
            legend: {
              position: 'top' 
            },
            title: {
              display: true,
              text: title,
            },
          },
      };
      return <Bar data={data} />;
}
