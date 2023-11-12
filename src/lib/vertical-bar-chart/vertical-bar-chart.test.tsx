import { render } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { VerticalBarChart } from './vertical-bar-chart';

const BarProps = vi.fn();
vi.mock('react-chartjs-2', () => ({
    Bar: (props: never) => BarProps(props),
}));

describe('VerticalBarChart', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('renders Bar with passed data', () => {
        const data = [1, 2, 3];
        const xLabels = ['x1', 'x2', 'x3'];
        const yLabels = ['y1', 'y2', 'y3', 'y4', 'y5'];
        const title = 'This is the title';

        expect(BarProps).not.toHaveBeenCalled();
        render(
            <VerticalBarChart
                data={data}
                xLabels={xLabels}
                yLabels={yLabels}
                title={title}
            />
        );
        expect(BarProps).toHaveBeenCalledWith(
            expect.objectContaining({
                data: {
                    labels: xLabels,
                    datasets: [expect.objectContaining({ label: title, data })],
                },
            })
        );
    });
});
