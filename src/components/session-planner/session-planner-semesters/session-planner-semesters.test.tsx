import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';
import { CourseId } from '@/consts/course';
import { SessionPlannerSemesters } from './session-planner-semesters';

describe('SessionPlannerSemesters', () => {
    afterEach(() => {
        localStorage.clear();
    });

    test('renders SessionPlannerSemesters', () => {
        render(<SessionPlannerSemesters />);
        expect(screen.getByTestId('SessionPlannerSemesters')).toBeDefined();
    });

    test('clicking on Add a semester button adds a new semester', () => {
        render(<SessionPlannerSemesters />);
        expect(screen.getAllByTestId('Semester')).toHaveLength(1);
        fireEvent.click(
            screen.getByTestId('SessionPlannerSemesters-addButton')
        );
        expect(screen.getAllByTestId('Semester')).toHaveLength(2);
    });

    test('renders semester title correctly', () => {
        render(<SessionPlannerSemesters />);
        expect(screen.getByText('Semester 1')).toBeDefined();
    });

    test('can remove a semester by clicking on the delete button', () => {
        render(<SessionPlannerSemesters />);
        expect(screen.getAllByTestId('Semester')).toHaveLength(1);
        fireEvent.click(screen.getByTestId('Semester-deleteButton-1'));
        expect(screen.queryAllByTestId('Semester')).toHaveLength(0);
    });

    test('can update a course on a semester', () => {
        render(<SessionPlannerSemesters />);
        expect(screen.getAllByTestId('Semester')).toHaveLength(1);
        const semesterCourseSelects = screen.getAllByLabelText(
            'Select a course'
        ) as HTMLSelectElement[];
        const secondSelectEl = semesterCourseSelects[1];
        expect(secondSelectEl.value).toBe('');
        fireEvent.change(secondSelectEl, { target: { value: CourseId.CSec } });
        expect(secondSelectEl.value).toBe(CourseId.CSec);
    });
});
