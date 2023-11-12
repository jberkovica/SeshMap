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
        ).toBeDefined();
    });

    test('renders all links', () => {
        const courseInfo = courseInfoMap[CourseId.HCW];
        render(<ResourcesContent courseInfo={courseInfo} />);
        expect(screen.getByText('Syllabus')).toBeDefined();
        expect(screen.getByText('Specification')).toBeDefined();
        expect(screen.getByText('Slack')).toBeDefined();
        expect(screen.getByText('REPL')).toBeDefined();
        expect(screen.getByText('Notes')).toBeDefined();
        expect(screen.getByText('Midterm')).toBeDefined();
        expect(screen.getByText('Final')).toBeDefined();
        expect(screen.getAllByRole('link', { name: 'Open' }).length).toBe(7);
    });
});
