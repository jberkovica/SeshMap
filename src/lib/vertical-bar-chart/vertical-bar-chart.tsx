// https://react-chartjs-2.js.org/examples/vertical-bar-chart
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { graphColors } from '@/consts/colors';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const backgroundColors = graphColors.map((color) =>
    color.replace(')', `,0.6)`)
);

export type VerticalBarChartProps = {
    data: (number | null)[];
    xLabels: string[];
    yLabels: string[];
    title: string;
};

export function VerticalBarChart({
    data,
    xLabels,
    yLabels,
    title,
}: VerticalBarChartProps) {
    const options: ChartOptions<'bar'> = useMemo(() => {
        // TODO: This stepSize should not be fixed like this.
        // Currently this does not work well when there are more/less than 5 steps
        const stepSize = 100 / 5;
        return {
            responsive: true,
            scales: {
                y: {
                    autoSkip: false,
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize,
                    precision: 0,
                    ticks: {
                        callback: function (value: number) {
                            if (value % stepSize === 0) {
                                return yLabels[value / stepSize];
                            }
                            return null;
                        },
                    },
                },
            },
        } as ChartOptions<'bar'>;
    }, [yLabels]);

    const barData = useMemo(
        () => ({
            labels: xLabels,
            datasets: [
                {
                    label: title,
                    data,
                    backgroundColor: backgroundColors,
                },
            ],
        }),
        [data, title, xLabels]
    );

    return <Bar data={barData} options={options} />;
}
