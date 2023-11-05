import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { CourseId, Level } from '@/consts/course';
import { ResourcesBanner } from './resources-banner';

describe('ResourcesBanner', () => {
    test('renders subcomponents correctly', () => {
        render(
            <ResourcesBanner
                courseId={CourseId.IoT}
                level={Level.Six}
                setCourseId={() => {}}
                setLevel={() => {}}
            />
        );

        const levelEl = screen.getByTestId('LevelSelect');
        const courseEl = screen.getByTestId('CourseSelect');

        expect(screen.getByText('Please select Level and Module')).toBeTruthy();
        expect(levelEl).toBeTruthy();
        expect(courseEl).toBeTruthy();
        expect(levelEl).toHaveProperty('value', Level.Six);
        expect(courseEl).toHaveProperty('value', CourseId.IoT);
    });

    test('changing value of level calls setLevel', () => {
        const setLevel = vi.fn();
        render(
            <ResourcesBanner
                courseId={CourseId.IoT}
                level={Level.Six}
                setCourseId={() => {}}
                setLevel={setLevel}
            />
        );

        const levelEl = screen.getByTestId('LevelSelect');

        fireEvent.change(levelEl, { target: { value: Level.Five } });
        expect(setLevel).toHaveBeenCalledWith(Level.Five);
    });

    test('changing value of course calls setCourseId', () => {
        const setCourseId = vi.fn();
        render(
            <ResourcesBanner
                courseId={CourseId.IoT}
                level={Level.Six}
                setCourseId={setCourseId}
                setLevel={() => {}}
            />
        );

        const courseId = screen.getByTestId('CourseSelect');

        fireEvent.change(courseId, { target: { value: CourseId.DS } });
        expect(setCourseId).toHaveBeenCalledWith(CourseId.DS);
    });
});
