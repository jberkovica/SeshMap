import {
    courseIds,
    courseInfoMap,
    courseTEMPORARYStatsMap,
} from '@/consts/course';
import { Select } from '@/lib/select';
import { CourseState } from '../../types';

export type SemesterCourseProps = {
    updateCourse(value: CourseState): void;
    value: CourseState;
};

export function SemesterCourse({ updateCourse, value }: SemesterCourseProps) {
    const courseInfo = !!value ? courseInfoMap[value] : null;
    const courseStats = !!value ? courseTEMPORARYStatsMap[value] : null;

    return (
        <div
            className="mb-[-2rem] mt-[-5rem] rounded-lg bg-neutral-200 p-6 dark:bg-neutral-600"
            data-testid="SemesterCourse"
        >
            <Select
                aria-label="Select a course"
                value={value}
                onChange={(e) => {
                    updateCourse(e.target.value as CourseState);
                }}
            >
                <option value="">Select Module</option>
                {courseIds.map((courseId) => (
                    <option value={courseId} key={courseId}>
                        {courseId}
                    </option>
                ))}
            </Select>
            <div className="ml-3 mt-3 flex flex-col gap-4 dark:text-white">
                <span data-testid="SemesterCourse-difficulty">
                    {getDisplay(courseStats?.difficulty)}
                </span>
                <span data-testid="SemesterCourse-time">
                    {getDisplay(courseStats?.time)}
                </span>
                <span data-testid="SemesterCourse-quality">
                    {getDisplay(courseStats?.quality)}
                </span>
                <span data-testid="SemesterCourse-selfStudy">
                    {getDisplay(courseStats?.selfStudy)}
                </span>
                <span data-testid="SemesterCourse-learning">
                    {getDisplay(courseStats?.learning)}
                </span>
                <span data-testid="SemesterCourse-interest">
                    {getDisplay(courseStats?.interest)}
                </span>
                <span data-testid="SemesterCourse-midterm" className="text-sm">
                    {getDisplay(courseInfo?.midterm)}
                </span>
                <span data-testid="SemesterCourse-final" className="text-sm">
                    {getDisplay(courseInfo?.final)}
                </span>
            </div>
        </div>
    );
}

export const getDisplay = (text?: string): string => text || '-';
