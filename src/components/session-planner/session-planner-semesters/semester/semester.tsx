import { BsXCircle } from 'react-icons/bs';
import { SemesterCourse } from './semester-course';
import { CourseState, SemesterState } from '../types';

export type SemesterProps = {
    updateSemester(courseIdx: number, value: CourseState): void;
    removeSemester(): void;
    semester: SemesterState;
    semesterNumber: number;
};

export const semesterHeaders = [
    'Difficulty',
    'Time',
    'Quality',
    'Self-Study',
    'Learning',
    'Interest',
    'Midterm',
    'Final',
];

export function Semester({
    updateSemester,
    removeSemester,
    semester,
    semesterNumber,
}: SemesterProps) {
    return (
        <div data-testid="Semester">
            <div className="flex justify-end">
                <button
                    className="text-neutral-600 dark:text-neutral-400"
                    data-testid={`Semester-deleteButton-${semesterNumber}`}
                    aria-label="Delete semester"
                    onClick={removeSemester}
                >
                    <BsXCircle size="1.5rem" />
                </button>
            </div>
            <h2 className="text-2xl font-medium dark:text-white">
                Semester {semesterNumber}
            </h2>
            <div className="mt-12 flex gap-6 rounded-xl bg-gradient-to-r from-gray-400 to-indigo-300 px-6 pb-16 pt-6 [&>*]:flex-1">
                <div className="flex flex-col gap-4 text-white">
                    {semesterHeaders.map((header) => (
                        <label key={header}>{header}</label>
                    ))}
                </div>
                {semester.map((course, index) => (
                    <SemesterCourse
                        key={index}
                        value={course}
                        updateCourse={(value) => updateSemester(index, value)}
                    />
                ))}
            </div>
        </div>
    );
}
