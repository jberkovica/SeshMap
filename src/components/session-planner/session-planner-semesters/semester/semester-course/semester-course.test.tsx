import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import {
    CourseId,
    courseInfoMap,
    courseTEMPORARYStatsMap,
} from '@/consts/course';
import { getDisplay, SemesterCourse } from './semester-course';

const updateCourse = vi.fn();

describe('SemesterCourse', () => {
    afterEach(() => {
        updateCourse.mockReset();
    });

    test('renders all valid data for valid course', () => {
        render(
            <SemesterCourse updateCourse={updateCourse} value={CourseId.ADS1} />
        );
        expect(
            screen.getByTestId('SemesterCourse-difficulty').textContent
        ).toBe(courseTEMPORARYStatsMap[CourseId.ADS1].difficulty);
        expect(screen.getByTestId('SemesterCourse-time').textContent).toBe(
            courseTEMPORARYStatsMap[CourseId.ADS1].time
        );
        expect(screen.getByTestId('SemesterCourse-quality').textContent).toBe(
            courseTEMPORARYStatsMap[CourseId.ADS1].quality
        );
        expect(screen.getByTestId('SemesterCourse-selfStudy').textContent).toBe(
            courseTEMPORARYStatsMap[CourseId.ADS1].selfStudy
        );
        expect(screen.getByTestId('SemesterCourse-learning').textContent).toBe(
            courseTEMPORARYStatsMap[CourseId.ADS1].learning
        );
        expect(screen.getByTestId('SemesterCourse-interest').textContent).toBe(
            courseTEMPORARYStatsMap[CourseId.ADS1].interest
        );
        expect(screen.getByTestId('SemesterCourse-midterm').textContent).toBe(
            courseInfoMap[CourseId.ADS1].midterm
        );
        expect(screen.getByTestId('SemesterCourse-final').textContent).toBe(
            courseInfoMap[CourseId.ADS1].final
        );
    });

    test('correctly selects select option with valid course', () => {
        render(
            <SemesterCourse updateCourse={updateCourse} value={CourseId.ADS1} />
        );
        const selectEl = screen.getByLabelText(
            'Select a course'
        ) as HTMLSelectElement;
        expect(selectEl.value).toBe(CourseId.ADS1);
    });

    test('correctly selects empty option with no course selected', () => {
        render(<SemesterCourse updateCourse={updateCourse} value="" />);
        const selectEl = screen.getByLabelText(
            'Select a course'
        ) as HTMLSelectElement;
        expect(selectEl.value).toBe('');
        expect(screen.getByText('Select Module')).toBeTruthy();
    });

    test('calls updateCourse when select option is changed', () => {
        render(
            <SemesterCourse updateCourse={updateCourse} value={CourseId.ADS1} />
        );
        const selectEl = screen.getByLabelText(
            'Select a course'
        ) as HTMLSelectElement;
        fireEvent.change(selectEl, { target: { value: CourseId.ADS2 } });
        expect(updateCourse).toHaveBeenCalledWith(CourseId.ADS2);
    });

    describe('getDisplay', () => {
        test('returns value if value is defined', () => {
            expect(getDisplay('test')).toBe('test');
        });

        test('returns hyphen if value is undefined', () => {
            expect(getDisplay()).toBe('-');
        });
    });
});
