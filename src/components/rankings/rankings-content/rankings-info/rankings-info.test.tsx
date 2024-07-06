import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CourseId, courseInfoMap } from '@/consts/course';
import { RankingsInfo } from './rankings-info';

describe('RankingsInfo', () => {
    test('renders all the table headers correctly', () => {
        render(<RankingsInfo courseIds={[CourseId.ITP1]} />);
        expect(screen.getByText('Short')).toBeDefined();
        expect(screen.getByText('Code')).toBeDefined();
        expect(screen.getByText('Module Name')).toBeDefined();
        expect(screen.getByText('Midterm')).toBeDefined();
        expect(screen.getByText('Finals')).toBeDefined();
        expect(screen.getByText('Language(s)')).toBeDefined();
        expect(screen.getByText('Professor')).toBeDefined();
    });

    test('renders a row correctly', () => {
        render(<RankingsInfo courseIds={[CourseId.ITP1]} />);
        const courseInfo = courseInfoMap[CourseId.ITP1];
        expect(CourseId.ITP1).toBeDefined();
        expect(courseInfo.code).toBeDefined();
        expect(courseInfo.name).toBeDefined();
        expect(courseInfo.final).toBeDefined();
        expect(courseInfo.languages).toBeDefined();
        expect(courseInfo.professor).toBeDefined();
    });
});
