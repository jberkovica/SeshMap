import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { DarkModeButton } from './dark-mode-button';

describe('DarkModeButton', () => {
    test('updates dark mode when clicked', async () => {
        render(<DarkModeButton />);
        expect(screen.queryByTestId('sun-icon')).toBeNull();
        expect(screen.getByTestId('moon-icon')).toBeDefined();

        const button = screen.getByTestId('DarkModeButton');
        fireEvent.click(button);
        expect(await screen.findByTestId('sun-icon')).toBeDefined();
    });
});
