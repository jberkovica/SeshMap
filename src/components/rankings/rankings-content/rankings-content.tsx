import { RankingsBars } from '@/components/rankings/rankings-content/rankings-bars';
import { courseIdsByLevelMap, Level } from '@/consts/course';
import { RankingsInfo } from './rankings-info';
import { RankingsRadars } from './rankings-radars';
import { RankingsRatings } from './rankings-ratings';

export type RankingsContentProps = {
    level: Level;
};

export function RankingsContent({ level }: RankingsContentProps) {
    const courseIds = courseIdsByLevelMap[level];

    return (
        <div
            className="container flex flex-col gap-16 py-14 dark:text-white"
            data-testid="RankingsContent"
        >
            <h1 className="text-center text-6xl font-light">
                {level.toUpperCase()}
            </h1>
            <RankingsInfo courseIds={courseIds} />
            <RankingsRatings courseIds={courseIds} />
            <RankingsRadars courseIds={courseIds} />
            <RankingsBars courseIds={courseIds} />
        </div>
    );
}
