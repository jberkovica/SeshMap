import { render, screen } from '@testing-library/react';
import { DateTime } from 'luxon';
import { describe, expect, test } from 'vitest';
import { semesterStartDate } from '@/consts/datetime';
import { getSemesterWeekNumber, HomeBanner } from './home-banner';

describe('HomeBanner', () => {
    test('renders HomeBanner', () => {
        render(<HomeBanner />);
        expect(screen.getByText('Welcome to SeshMap!')).toBeDefined();
    });

    test('renders correct week number', () => {
        render(<HomeBanner />);
        const weekNumberEl = screen.getByTestId('HomeBanner-weekNumber');
        expect(weekNumberEl.textContent).toBe(
            getSemesterWeekNumber(DateTime.local()).toString()
        );
    });

    describe('getSemesterWeekNumber', () => {
        test('renders correct week number if within range', () => {
            const fifthWeek = semesterStartDate.plus({ weeks: 4, day: 1 });
            const result = getSemesterWeekNumber(fifthWeek);
            expect(result).toBe(5);
        });

        test('renders 0 if diff is less than 1', () => {
            const week = semesterStartDate.minus({ week: 2 });
            const result = getSemesterWeekNumber(week);
            expect(result).toBe(0);
        });

        test('renders 0 if diff is greater than 22', () => {
            const week = semesterStartDate.minus({ months: 8 });
            const result = getSemesterWeekNumber(week);
            expect(result).toBe(0);
        });
    });
});
