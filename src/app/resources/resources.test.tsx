import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CourseId, courseInfoMap, Level } from '@/consts/course';
import Resources from './page';

describe('Resources', () => {
    test('renders all components', () => {
        render(<Resources />);
        expect(screen.getByTestId('ResourcesBanner')).toBeTruthy();
        expect(screen.getByTestId('ResourcesContentContainer')).toBeTruthy();
    });

    test('initially loads with ResourcesContent set to ITP1', () => {
        const courseInfo = courseInfoMap[CourseId.ITP1];
        render(<Resources />);
        expect(screen.getByTestId('ResourcesContent')).toBeTruthy();
        expect(
            screen.getByText(`${courseInfo.id}: ${courseInfo.name}`)
        ).toBeTruthy();
    });

    test('changing level removes ResourcesContent', () => {
        render(<Resources />);
        fireEvent.change(screen.getByTestId('LevelSelect'), {
            target: { value: Level.Six },
        });
        expect(screen.queryByTestId('ResourcesContent')).toBeFalsy();
    });

    test('changing course changes ResourcesContent', () => {
        const courseInfo = courseInfoMap[CourseId.WD];
        render(<Resources />);
        fireEvent.change(screen.getByTestId('CourseSelect'), {
            target: { value: CourseId.WD },
        });

        expect(
            screen.getByText(`${courseInfo.id}: ${courseInfo.name}`)
        ).toBeTruthy();
    });
});
