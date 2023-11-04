import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, test } from 'vitest';
import { Level } from '@/consts/course';
import { LevelSelect } from './level-select';

describe('LevelSelect', () => {
    test('Correctly renders the LevelSelect component', () => {
        render(<LevelSelect value={Level.Five} handleChange={() => {}} />);
        expect(screen.getByLabelText('Select a level')).toHaveProperty(
            'value',
            Level.Five
        );
        expect(screen.getByText(Level.Five)).toBeTruthy();
    });

    test('OnChange works Correctly', () => {
        const Component = () => {
            const [level, setLevel] = useState<Level>(Level.Four);

            return <LevelSelect value={level} handleChange={setLevel} />;
        };
        render(<Component />);
        const selectEl = screen.getByLabelText('Select a level');
        expect(selectEl).toHaveProperty('value', Level.Four);
        fireEvent.change(selectEl, { target: { value: Level.Six } });
        expect(selectEl).toHaveProperty('value', Level.Six);
    });
});
