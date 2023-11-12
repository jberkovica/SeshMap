import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { graphColors } from '@/consts/colors';
import { CourseId, level4CourseIds } from '@/consts/course';
import { RankingsRadarProps } from './rankings-radar';
import { RankingsRadars } from './rankings-radars';

const RankingsRadarProps = vi.fn();
vi.mock('./rankings-radar', () => ({
    RankingsRadar: (props: RankingsRadarProps) => RankingsRadarProps(props),
}));

describe('RankingsRadars', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('renders RankingsRadars', () => {
        render(<RankingsRadars courseIds={level4CourseIds} />);
        expect(screen.getByTestId('RankingsRadars')).toBeDefined();
    });

    test('renders RankingRadar with correct props', () => {
        expect(RankingsRadarProps).not.toHaveBeenCalled();
        render(<RankingsRadars courseIds={[CourseId.ITP1, CourseId.ITP2]} />);
        expect(RankingsRadarProps).toHaveBeenCalledTimes(2);
        expect(RankingsRadarProps).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                courseId: CourseId.ITP1,
                color: graphColors[0],
            })
        );
        expect(RankingsRadarProps).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                courseId: CourseId.ITP2,
                color: graphColors[1],
            })
        );
    });
});
