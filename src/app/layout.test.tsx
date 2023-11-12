import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import RootLayout from './layout';
import Home from './page';

vi.mock('next/font/google', () => {
    return {
        Inter: () => ({
            className: 'google',
        }),
    };
});

describe('RootLayout', () => {
    test('Renders RootLayout with the header, content, and footer', () => {
        render(
            <RootLayout>
                <Home />
            </RootLayout>
        );
        expect(screen.getByTestId('PageHeader')).toBeDefined();
        expect(screen.getByTestId('PageFooter')).toBeDefined();
        expect(screen.getByTestId('Home')).toBeDefined();
    });
});
