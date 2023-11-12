import { useMemo } from 'react';
import {
    CourseId,
    courseInfoMap,
    courseTEMPORARYRankingMap,
} from '@/consts/course';
import { Table, TableColumnAlign } from '@/lib/table';
import {
    sortObjectsByPropertyNumberAsc,
    sortObjectsByPropertyNumberDesc,
    sortObjectsByPropertyStringAsc,
    sortObjectsByPropertyStringDesc,
} from '@/utils/sort';

export type RankingsRatingsProps = {
    courseIds: CourseId[];
};

export enum RankingsRatingsColumn {
    Name = 'Name',
    Difficulty = 'Difficulty',
    Time = 'Time',
    Quality = 'Quality',
    SelfStudy = 'Self-Study',
    Learning = 'Learning',
    Interest = 'Interest',
    Total = 'Total',
}

export const rankingsRatingsColumns = Object.values(RankingsRatingsColumn);

const columnProps = {
    [RankingsRatingsColumn.Name]: {
        title: 'Module Name',
        sort: {
            asc: sortObjectsByPropertyStringAsc(RankingsRatingsColumn.Name),
            desc: sortObjectsByPropertyStringDesc(RankingsRatingsColumn.Name),
        },
    },
    [RankingsRatingsColumn.Difficulty]: {
        title: 'Difficulty',
        align: TableColumnAlign.center,
        sort: {
            asc: sortObjectsByPropertyNumberAsc(
                RankingsRatingsColumn.Difficulty
            ),
            desc: sortObjectsByPropertyNumberDesc(
                RankingsRatingsColumn.Difficulty
            ),
        },
    },
    [RankingsRatingsColumn.Time]: {
        title: 'Time',
        align: TableColumnAlign.center,
        sort: {
            asc: sortObjectsByPropertyNumberAsc(RankingsRatingsColumn.Time),
            desc: sortObjectsByPropertyNumberDesc(RankingsRatingsColumn.Time),
        },
    },
    [RankingsRatingsColumn.Quality]: {
        title: 'Quality',
        align: TableColumnAlign.center,
        sort: {
            asc: sortObjectsByPropertyNumberAsc(RankingsRatingsColumn.Quality),
            desc: sortObjectsByPropertyNumberDesc(
                RankingsRatingsColumn.Quality
            ),
        },
    },
    [RankingsRatingsColumn.SelfStudy]: {
        title: 'Self-Study',
        align: TableColumnAlign.center,
        sort: {
            asc: sortObjectsByPropertyNumberAsc(
                RankingsRatingsColumn.SelfStudy
            ),
            desc: sortObjectsByPropertyNumberDesc(
                RankingsRatingsColumn.SelfStudy
            ),
        },
    },
    [RankingsRatingsColumn.Learning]: {
        title: 'Learning',
        align: TableColumnAlign.center,
        sort: {
            asc: sortObjectsByPropertyNumberAsc(RankingsRatingsColumn.Learning),
            desc: sortObjectsByPropertyNumberDesc(
                RankingsRatingsColumn.Learning
            ),
        },
    },
    [RankingsRatingsColumn.Interest]: {
        title: 'Interest',
        align: TableColumnAlign.center,
        sort: {
            asc: sortObjectsByPropertyNumberAsc(RankingsRatingsColumn.Interest),
            desc: sortObjectsByPropertyNumberDesc(
                RankingsRatingsColumn.Interest
            ),
        },
    },
    [RankingsRatingsColumn.Total]: {
        title: 'Total',
        align: TableColumnAlign.center,
        sort: {
            asc: sortObjectsByPropertyNumberAsc(RankingsRatingsColumn.Total),
            desc: sortObjectsByPropertyNumberDesc(RankingsRatingsColumn.Total),
        },
    },
};

export function RankingsRatings({ courseIds }: RankingsRatingsProps) {
    const data = useMemo(
        () =>
            courseIds.map((courseId) => {
                const courseInfo = courseInfoMap[courseId];
                const courseRanking = courseTEMPORARYRankingMap[courseId];

                return {
                    [RankingsRatingsColumn.Name]: courseInfo.name,
                    [RankingsRatingsColumn.Difficulty]:
                        courseRanking.difficulty,
                    [RankingsRatingsColumn.Time]: courseRanking.time,
                    [RankingsRatingsColumn.Quality]: courseRanking.quality,
                    [RankingsRatingsColumn.SelfStudy]: courseRanking.selfStudy,
                    [RankingsRatingsColumn.Learning]: courseRanking.learning,
                    [RankingsRatingsColumn.Interest]: courseRanking.interest,
                    [RankingsRatingsColumn.Total]: courseRanking.total,
                };
            }),
        [courseIds]
    );

    return (
        <section data-testid="RankingsRatings">
            <h2 className="mb-8 text-center text-4xl font-light">
                Module Ranking
            </h2>
            <Table
                columns={rankingsRatingsColumns}
                boldFirstColumn
                columnProps={columnProps}
                data={data}
            />
        </section>
    );
}
