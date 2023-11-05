import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { CourseId, Level } from '@/consts/course';
import { CourseLevelSelectBanner } from './course-level-select-banner';

describe('CourseLevelSelectBanner', () => {
    test('renders subcomponents correctly with all props', () => {
        render(
            <CourseLevelSelectBanner
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

    test('renders only levels correctly when no course related props are passed', () => {
        render(
            <CourseLevelSelectBanner level={Level.Six} setLevel={() => {}} />
        );

        const levelEl = screen.getByTestId('LevelSelect');
        const courseEl = screen.queryByTestId('CourseSelect');

        expect(screen.getByText('Please select Level')).toBeTruthy();
        expect(levelEl).toBeTruthy();
        expect(courseEl).toBeFalsy();
        expect(levelEl).toHaveProperty('value', Level.Six);
    });

    test('changing value of level calls setLevel', () => {
        const setLevel = vi.fn();
        render(
            <CourseLevelSelectBanner
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
            <CourseLevelSelectBanner
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
