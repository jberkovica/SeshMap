import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, test } from 'vitest';
import { CourseId, Level } from '@/consts/course';
import { CourseSelect } from './course-select';

describe('CourseSelect', () => {
    test('Correctly renders the CourseSelect component', () => {
        render(
            <CourseSelect
                level={Level.Five}
                handleChange={() => {}}
                value={CourseId.ASP}
            />
        );
        expect(screen.getByLabelText('Select a module')).toHaveProperty(
            'value',
            CourseId.ASP
        );
        expect(screen.getByText(CourseId.ASP)).toBeTruthy();
    });

    test('OnChange works Correctly', () => {
        const Component = () => {
            const [courseId, setCourseId] = useState<CourseId | ''>('');

            return (
                <CourseSelect
                    level={Level.Five}
                    handleChange={setCourseId}
                    value={courseId}
                />
            );
        };
        render(<Component />);
        const selectEl = screen.getByLabelText('Select a module');
        expect(selectEl).toHaveProperty('value', '');
        expect(screen.getByText('Select module')).toBeTruthy();
        fireEvent.change(selectEl, { target: { value: CourseId.SDD } });
        expect(selectEl).toHaveProperty('value', CourseId.SDD);
    });

    test('changing level resets the selection to empty', () => {
        const Component = () => {
            const [level, setLevel] = useState<Level>(Level.Four);
            const [courseId, setCourseId] = useState<CourseId | ''>(
                CourseId.ADS1
            );

            return (
                <div>
                    <CourseSelect
                        level={level}
                        handleChange={setCourseId}
                        value={courseId}
                    />
                    <button onClick={() => setLevel(Level.Five)}>
                        Change to Level Five
                    </button>
                </div>
            );
        };
        render(<Component />);
        const selectEl = screen.getByLabelText('Select a module');
        expect(selectEl).toHaveProperty('value', CourseId.ADS1);
        fireEvent.click(screen.getByText('Change to Level Five'));
        expect(selectEl).toHaveProperty('value', '');
    });
});
