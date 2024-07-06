import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Level } from '@/consts/course';
import Rankings from './page';

vi.mock('@/lib/radar-chart');
vi.mock('@/lib/vertical-bar-chart');

describe('Rankings', () => {
    test('renders all components', () => {
        render(<Rankings />);
        expect(screen.getByTestId('CourseLevelSelectBanner')).toBeDefined();
        expect(screen.getByTestId('RankingsContent')).toBeDefined();
    });

    test('renders level4 by default', () => {
        render(<Rankings />);
        expect(screen.getByText(Level.Four.toUpperCase())).toBeDefined();
    });

    test('changing level changes content', () => {
        render(<Rankings />);
        expect(screen.queryByText(Level.Five.toUpperCase())).toBeNull();
        fireEvent.change(screen.getByLabelText('Select a level'), {
            target: { value: Level.Five },
        });
        expect(screen.getByText(Level.Five.toUpperCase())).toBeDefined();
    });
});
