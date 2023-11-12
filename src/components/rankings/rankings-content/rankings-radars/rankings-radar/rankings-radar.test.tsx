import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { graphColors } from '@/consts/colors';
import { CourseId, courseTEMPORARYFeatureMap } from '@/consts/course';
import { RadarChartProps } from '@/lib/radar-chart';
import { getRankingsRadarData, RankingsRadar } from './rankings-radar';

const RadarChartProps = vi.fn();
vi.mock('@/lib/radar-chart', () => ({
    RadarChart: (props: RadarChartProps) => RadarChartProps(props),
}));

describe('RankingsRadar', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('renders RankingsRadar', () => {
        render(
            <RankingsRadar courseId={CourseId.ITP1} color={graphColors[0]} />
        );
        expect(screen.getByTestId('RankingsRadar')).toBeDefined();
    });

    test('passes correct props to RadarChart', () => {
        expect(RadarChartProps).not.toHaveBeenCalled();
        render(
            <RankingsRadar courseId={CourseId.ITP1} color={graphColors[0]} />
        );
        expect(RadarChartProps).toHaveBeenCalledWith(
            expect.objectContaining({
                color: graphColors[0],
                data: getRankingsRadarData(
                    courseTEMPORARYFeatureMap[CourseId.ITP1]
                ),
                labels: [
                    'Difficulty',
                    'Time',
                    'Quality',
                    'Self-Study',
                    'Learning',
                    'Interest',
                ],
                title: 'Introduction to Programming I',
            })
        );
    });

    describe('getRankingsRadarData', () => {
        test('yields correct data for valid data', () => {
            const courseData: (typeof courseTEMPORARYFeatureMap)[CourseId] = {
                difficulty: 1,
                time: 4,
                quality: 5,
                selfStudy: 2,
                learning: 3,
                interest: 1,
            };
            const result = getRankingsRadarData(courseData);
            expect(result).toEqual([
                (1 / 5) * 100,
                (4 / 6) * 100,
                (5 / 5) * 100,
                (2 / 5) * 100,
                (3 / 4) * 100,
                (1 / 5) * 100,
            ]);
        });

        test('yields correct data for no data', () => {
            const courseData = {};
            const result = getRankingsRadarData(
                courseData as (typeof courseTEMPORARYFeatureMap)[CourseId]
            );
            expect(result).toEqual([null, null, null, null, null, null]);
        });
    });
});
