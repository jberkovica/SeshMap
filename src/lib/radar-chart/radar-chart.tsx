// https://codesandbox.io/p/sandbox/github/reactchartjs/react-chartjs-2/tree/master/sandboxes/radar/default?embed=1&file=%2FApp.tsx%3A13%2C1-20%2C3
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { useMemo } from 'react';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const options: ChartOptions<'radar'> = {
    scales: {
        r: {
            angleLines: {
                display: false,
            },
            suggestedMin: 0,
            suggestedMax: 100,
        },
    },
    responsive: true,
    aspectRatio: 1,
};
const backgroundAlpha = 0.5;
const borderAlpha = 1;

export type RadarChartProps = {
    color: string;
    data: (number | null)[];
    labels: string[];
    title: string;
};

export function RadarChart({ color, data, labels, title }: RadarChartProps) {
    const radarData = useMemo(
        () => ({
            labels,
            datasets: [
                {
                    label: title,
                    data,
                    backgroundColor: color.replace(')', `,${backgroundAlpha})`),
                    borderColor: color.replace(')', `,${borderAlpha})`),
                    borderWidth: 1,
                    pointRadius: 4,
                },
            ],
        }),
        [labels, title, data, color]
    );
    return <Radar data={radarData} options={options} />;
}
