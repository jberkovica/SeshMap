import { render } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { RadarChart } from './radar-chart';

const RadarProps = vi.fn();
vi.mock('react-chartjs-2', () => ({
    Radar: (props: never) => RadarProps(props),
}));

describe('RadarChart', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('renders Radar with passed data', () => {
        const labels = ['one', 'two', 'three'];
        const data = [50, 75, 80];

        expect(RadarProps).not.toHaveBeenCalled();
        render(
            <RadarChart
                color="rgba(0,0,0)"
                data={data}
                labels={labels}
                title="Title"
            />
        );
        expect(RadarProps).toHaveBeenCalledWith(
            expect.objectContaining({
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Title',
                            data,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 1,
                            pointRadius: 4,
                        },
                    ],
                },
            })
        );
    });
});
