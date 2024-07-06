import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, test } from 'vitest';
import { Select } from './select';

describe('Select', () => {
    test('Correctly renders the select component', () => {
        render(
            <Select aria-label="Select" value="a" onChange={() => {}}>
                <option value="a">This is option a</option>
            </Select>
        );
        expect(screen.getByLabelText('Select')).toHaveProperty('value', 'a');
        expect(screen.getByText('This is option a')).toBeDefined();
    });

    test('OnChange works Correctly', () => {
        const Component = () => {
            const [value, setValue] = useState<string>('a');

            return (
                <Select
                    aria-label="Select"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    <option value="a">Option a</option>
                    <option value="b">Option b</option>
                    <option value="c">Option c</option>
                </Select>
            );
        };
        render(<Component />);
        const selectEl = screen.getByLabelText('Select');
        expect(selectEl).toHaveProperty('value', 'a');
        fireEvent.change(selectEl, { target: { value: 'c' } });
        expect(selectEl).toHaveProperty('value', 'c');
    });
});
