import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { DarkModeButton } from './dark-mode-button';

describe('DarkModeButton', () => {
    test('updates dark mode when clicked', async () => {
        render(<DarkModeButton />);
        expect(screen.queryByTestId('sun-icon')).toBeFalsy();
        expect(screen.getByTestId('moon-icon')).toBeTruthy();

        const button = screen.getByTestId('DarkModeButton');
        fireEvent.click(button);
        expect(await screen.findByTestId('sun-icon')).toBeTruthy();
    });
});
