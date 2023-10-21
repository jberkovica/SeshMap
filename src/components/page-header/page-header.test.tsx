import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { PageHeader } from './page-header';

describe('PageHeader', () => {
    test('renders the logo', () => {
        render(<PageHeader />);
        expect(screen.getByAltText('Logo')).toBeTruthy();
    });

    test('renders links', () => {
        render(<PageHeader />);
        expect(screen.getByText('Home')).toBeTruthy();
        expect(screen.getByText('Session Planner')).toBeTruthy();
        expect(screen.getByText('Resources')).toBeTruthy();
        expect(screen.getByText('Ranking')).toBeTruthy();
        expect(screen.getByText('Surveys')).toBeTruthy();
    });

    test('renders dark mode button', () => {
        render(<PageHeader />);
        expect(screen.getByTestId('DarkModeButton')).toBeTruthy();
    });
});
