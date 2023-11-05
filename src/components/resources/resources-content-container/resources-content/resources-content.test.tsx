import { screen, render } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import { CourseId, courseInfoMap } from '@/consts/course';
import { ResourcesContent } from './resources-content';

describe('ResourcesContent', () => {
    test('renders title correctly', () => {
        const courseInfo = courseInfoMap[CourseId.HCW];
        render(<ResourcesContent courseInfo={courseInfo} />);
        expect(
            screen.getByText(`${courseInfo.id}: ${courseInfo.name}`)
        ).toBeTruthy();
    });

    test('renders all links', () => {
        const courseInfo = courseInfoMap[CourseId.HCW];
        render(<ResourcesContent courseInfo={courseInfo} />);
        expect(screen.getByText('Syllabus')).toBeTruthy();
        expect(screen.getByText('Specification')).toBeTruthy();
        expect(screen.getByText('Slack')).toBeTruthy();
        expect(screen.getByText('REPL')).toBeTruthy();
        expect(screen.getByText('Notes')).toBeTruthy();
        expect(screen.getByText('Midterm')).toBeTruthy();
        expect(screen.getByText('Final')).toBeTruthy();
        expect(screen.getAllByRole('link', { name: 'Open' }).length).toBe(7);
    });
});
