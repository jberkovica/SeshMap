import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import {
    CourseDifficulty,
    CourseId,
    CourseInterest,
    CourseLearning,
    CourseQuality,
    CourseSelfStudy,
    courseTEMPORARYFeatureMap,
    CourseTime,
    level4CourseIds,
} from '@/consts/course';
import { getPercentage } from '@/utils/data';
import { RankingsBarChartProps } from './rankings-bar-chart';
import { RankingsBars } from './rankings-bars';

const RankingsBarChartProps = vi.fn();
vi.mock('./rankings-bar-chart', () => ({
    RankingsBarChart: (props: RankingsBarChartProps) =>
        RankingsBarChartProps(props),
}));

describe('RankingsBars', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('renders RankingsBars', () => {
        render(<RankingsBars courseIds={level4CourseIds} />);
        expect(screen.getByTestId('RankingsBars')).toBeDefined();
    });

    test('renders all RankingsBarChart with correct props', () => {
        expect(RankingsBarChartProps).not.toHaveBeenCalled();
        render(<RankingsBars courseIds={[CourseId.ITP1]} />);
        expect(RankingsBarChartProps).toHaveBeenCalledTimes(6);

        const courseData = courseTEMPORARYFeatureMap[CourseId.ITP1];
        const xLabels = ['ITP1'];

        expect(RankingsBarChartProps).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                data: [getPercentage(courseData!.difficulty, 5)],
                title: 'Course Difficulty',
                xLabels,
                yLabels: Object.values(CourseDifficulty),
            })
        );

        expect(RankingsBarChartProps).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                data: [getPercentage(courseData!.time, 6)],
                title: 'Time',
                xLabels,
                yLabels: Object.values(CourseTime),
            })
        );

        expect(RankingsBarChartProps).toHaveBeenNthCalledWith(
            3,
            expect.objectContaining({
                data: [getPercentage(courseData!.quality, 5)],
                title: 'Quality',
                xLabels,
                yLabels: Object.values(CourseQuality),
            })
        );

        expect(RankingsBarChartProps).toHaveBeenNthCalledWith(
            4,
            expect.objectContaining({
                data: [getPercentage(courseData!.selfStudy, 5)],
                title: 'Self Learning',
                xLabels,
                yLabels: Object.values(CourseSelfStudy),
            })
        );

        expect(RankingsBarChartProps).toHaveBeenNthCalledWith(
            5,
            expect.objectContaining({
                data: [getPercentage(courseData!.learning, 4)],
                title: 'Learning',
                xLabels,
                yLabels: Object.values(CourseLearning),
            })
        );

        expect(RankingsBarChartProps).toHaveBeenNthCalledWith(
            6,
            expect.objectContaining({
                data: [getPercentage(courseData!.interest, 5)],
                title: 'Interest',
                xLabels,
                yLabels: Object.values(CourseInterest),
            })
        );
    });
});
