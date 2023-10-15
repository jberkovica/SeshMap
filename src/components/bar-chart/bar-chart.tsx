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
import { valuesMap } from '@/utils/helpers/surveys-values';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function BarChart({
    dataArray,
    labels,
    title,
    color,
}: {
    dataArray: string;
    labels: any;
    title: any;
    color: any;
}) {
    const backgroundAlpha = 0.6;
    const newColors = color.map((color: string) => {
        return color.replace(')', `, ${backgroundAlpha})`);
    });

    const data = {
        labels: labels,
        datasets: [
            {
                label: title,
                data: dataArray,
                backgroundColor: newColors,
            },
        ],
    };

    // @ts-ignore
    const labelsMap = valuesMap[title];
    const yLabels = labelsMap ? Object.keys(labelsMap) : [];

    // const stepSize = 100 / yLabels.length;
    const stepSize = 20;

    const options = {
        responsive: true,
        scales: {
            y: {
                autoSkip: false,
                beginAtZero: true,
                min: 0,
                max: 100,
                stepSize: stepSize,
                precision: 0,
                ticks: {
                    callback: function (value: any, index: any, values: any) {
                        if (value % stepSize === 0) {
                            return yLabels[value / stepSize];
                        }
                        return null;
                    },
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
}
