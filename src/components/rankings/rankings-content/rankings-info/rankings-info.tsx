import { CourseId, courseInfoMap } from '@/consts/course';
import { Table } from '@/lib/table';

export type RankingsInfoProps = {
    courseIds: CourseId[];
};

export enum RankingsInfoColumn {
    Id = 'ID',
    Code = 'Code',
    Name = 'Name',
    Midterm = 'Midterm',
    Finals = 'Finals',
    Languages = 'Languages',
    Professor = 'Professor',
}

export const rankingsInfoColumns = Object.values(RankingsInfoColumn);

export function RankingsInfo({ courseIds }: RankingsInfoProps) {
    return (
        <section data-testid="RankingsInfo">
            <h2 className="mb-8 text-center text-4xl font-light">
                Modules Comparison
            </h2>
            <Table
                columns={rankingsInfoColumns}
                boldFirstColumn
                columnProps={{
                    [RankingsInfoColumn.Id]: {
                        title: 'Short',
                    },
                    [RankingsInfoColumn.Code]: {
                        title: 'Code',
                    },
                    [RankingsInfoColumn.Name]: {
                        title: 'Module Name',
                    },
                    [RankingsInfoColumn.Midterm]: {
                        title: 'Midterm',
                    },
                    [RankingsInfoColumn.Finals]: {
                        title: 'Finals',
                    },
                    [RankingsInfoColumn.Languages]: {
                        title: 'Language(s)',
                    },
                    [RankingsInfoColumn.Professor]: {
                        title: 'Professor',
                    },
                }}
                data={courseIds.map((courseId) => {
                    const courseInfo = courseInfoMap[courseId];

                    return {
                        [RankingsInfoColumn.Id]: courseId,
                        [RankingsInfoColumn.Code]: courseInfo.code,
                        [RankingsInfoColumn.Name]: courseInfo.name,
                        [RankingsInfoColumn.Midterm]: courseInfo.midterm,
                        [RankingsInfoColumn.Finals]: courseInfo.final,
                        [RankingsInfoColumn.Languages]: courseInfo.languages,
                        [RankingsInfoColumn.Professor]: courseInfo.professor,
                    };
                })}
            />
        </section>
    );
}
