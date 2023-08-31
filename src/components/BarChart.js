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
    const backgroundAlpha = 0.6
    const newColors = color.map((color) => {
      return color.replace(')', `, ${backgroundAlpha})`);
    });
    const data = {
        labels: labels,
        datasets: [
            {
              label: title,
              data: dataArray,
              backgroundColor: newColors
            }
        ]
      }; 
    const titleToYAxisLabelMap = {
        'Difficulty': ['Very Easy', 'Easy', 'Moderate', 'Difficult', 'Very Difficult'],
        'Time': ['>10 hours', '8 - 10 hours', '6 - 8 hours', '4 - 6 hours', '2 - 4 hours', '0 - 2 hours'], 
        'Quality': ['Very Poor', 'Poor', 'Normal', 'Good', 'Very Good'], 
        'Self Study': ['Not At All', 'Hardly Sufficient', 'Just Sufficient', 'Mostly Sufficient', 'Totally Sufficient'],
        'Learning': ['Nothing', 'A Little', 'A Good Amount', 'A Lot'],
        'Interest': ['Very Boring', 'Boring', 'Fine', 'Interesting', 'Very Interesting']
    };
    const options = {
      responsive: true,
      scales: {
        y: {            
            // Explicitly set tick values
            autoSkip: false,
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 25,
            precision: 0,
            ticks: {
                source: 'data',
                callback: function(value) {
                  switch (value) {
                      case 0:
                          return titleToYAxisLabelMap[title][0];
                      case 20:
                          return titleToYAxisLabelMap[title][1];
                      case 40:
                          return titleToYAxisLabelMap[title][2];
                      case 60:
                          return titleToYAxisLabelMap[title][3];
                      case 80:
                          return titleToYAxisLabelMap[title][4];
                      case 100:
                          if (title == 'Time'){
                            return titleToYAxisLabelMap[title][5];
                          }
                      default:
                          return '';
                  }
                }
            }
        }
      }
    };
    return <Bar data={data} options = {options}/>;
}
