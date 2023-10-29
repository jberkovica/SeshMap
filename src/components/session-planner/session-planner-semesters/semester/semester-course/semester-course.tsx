import {
    courseIds,
    courseInfoMap,
    courseTEMPORARYStatsMap,
} from '@/consts/course';
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
            <select
                aria-label="Select a course"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
            </select>
            <div className="ml-3 mt-3 flex flex-col gap-4">
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
