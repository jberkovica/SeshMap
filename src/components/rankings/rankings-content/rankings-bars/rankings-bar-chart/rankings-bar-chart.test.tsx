import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { VerticalBarChartProps } from '@/lib/vertical-bar-chart';
import { RankingsBarChart } from './rankings-bar-chart';

const VerticalBarChartProps = vi.fn();
vi.mock('@/lib/vertical-bar-chart', () => ({
    VerticalBarChart: (props: VerticalBarChartProps) =>
        VerticalBarChartProps(props),
}));

describe('RankingsBarChart', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('renders VerticalBarChart with passed data', () => {
        const data = [1, 2, 3];
        const xLabels = ['x1', 'x2', 'x3'];
        const yLabels = ['y1', 'y2', 'y3', 'y4', 'y5'];
        const title = 'This is the title';

        expect(VerticalBarChartProps).not.toHaveBeenCalled();

        render(
            <RankingsBarChart
                data={data}
                title={title}
                xLabels={xLabels}
                yLabels={yLabels}
            />
        );
        expect(screen.getByTestId('RankingsBarChart')).toBeDefined();
        expect(VerticalBarChartProps).toHaveBeenCalledWith(
            expect.objectContaining({ data, xLabels, yLabels, title })
        );
    });
});
