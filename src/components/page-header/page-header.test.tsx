import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { PageHeader } from './page-header';

describe('PageHeader', () => {
    test('renders the logo', () => {
        render(<PageHeader />);
        expect(screen.getByAltText('Logo')).toBeDefined();
    });

    test('renders links', () => {
        render(<PageHeader />);
        expect(screen.getByText('Home')).toBeDefined();
        expect(screen.getByText('Session Planner')).toBeDefined();
        expect(screen.getByText('Resources')).toBeDefined();
        expect(screen.getByText('Ranking')).toBeDefined();
        expect(screen.getByText('Surveys')).toBeDefined();
    });

    test('renders dark mode button', () => {
        render(<PageHeader />);
        expect(screen.getByTestId('DarkModeButton')).toBeDefined();
    });
});
