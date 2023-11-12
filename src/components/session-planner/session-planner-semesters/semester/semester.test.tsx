import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { CourseId } from '@/consts/course';
import { Semester, SemesterProps } from './semester';

const updateSemester = vi.fn();
const removeSemester = vi.fn();

const props: SemesterProps = {
    updateSemester,
    removeSemester,
    semester: [CourseId.ITP1, CourseId.CM, CourseId.DM, CourseId.FCS],
    semesterNumber: 1,
};

describe('Semester', () => {
    afterEach(() => {
        updateSemester.mockReset();
        removeSemester.mockReset();
    });

    test('renders semester title correctly', () => {
        render(<Semester {...props} semesterNumber={3} />);
        expect(screen.getByText('Semester 3')).toBeDefined();
    });

    test('clicking on the x icon calls removeSemester', () => {
        render(<Semester {...props} />);
        expect(removeSemester).not.toHaveBeenCalled();
        fireEvent.click(screen.getByLabelText('Delete semester'));
        expect(removeSemester).toHaveBeenCalled();
    });

    test('renders all courses', () => {
        render(
            <Semester
                {...props}
                semester={[
                    CourseId.ITP1,
                    CourseId.CM,
                    CourseId.DM,
                    CourseId.FCS,
                ]}
            />
        );
        const semesterCourseSelects = screen.getAllByLabelText(
            'Select a course'
        ) as HTMLSelectElement[];
        expect(semesterCourseSelects).toHaveLength(4);
        expect(semesterCourseSelects[0].value).toBe(CourseId.ITP1);
        expect(semesterCourseSelects[1].value).toBe(CourseId.CM);
        expect(semesterCourseSelects[2].value).toBe(CourseId.DM);
        expect(semesterCourseSelects[3].value).toBe(CourseId.FCS);
    });

    test('changing select option on a course calls updateSemester', () => {
        render(
            <Semester
                {...props}
                semester={[
                    CourseId.ITP1,
                    CourseId.CM,
                    CourseId.DM,
                    CourseId.FCS,
                ]}
            />
        );
        const semesterCourseSelects = screen.getAllByLabelText(
            'Select a course'
        ) as HTMLSelectElement[];
        const thirdSelectEl = semesterCourseSelects[2];
        expect(updateSemester).not.toHaveBeenCalled();
        fireEvent.change(thirdSelectEl, { target: { value: CourseId.WD } });
        expect(updateSemester).toHaveBeenCalledWith(2, CourseId.WD);
    });
});
