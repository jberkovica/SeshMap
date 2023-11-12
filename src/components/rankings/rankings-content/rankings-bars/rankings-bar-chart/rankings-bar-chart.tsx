import { VerticalBarChart } from '@/lib/vertical-bar-chart';

export type RankingsBarChartProps = {
    data: (number | null)[];
    title: string;
    xLabels: string[];
    yLabels: string[];
};

export function RankingsBarChart({
    data,
    title,
    xLabels,
    yLabels,
}: RankingsBarChartProps) {
    return (
        <div data-testid="RankingsBarChart">
            <VerticalBarChart
                data={data}
                xLabels={xLabels}
                yLabels={yLabels}
                title={title}
            />
        </div>
    );
}
