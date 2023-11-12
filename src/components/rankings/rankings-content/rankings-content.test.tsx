import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Level } from '@/consts/course';
import { RankingsContent } from './rankings-content';

vi.mock('@/lib/radar-chart');
vi.mock('@/lib/vertical-bar-chart');

describe('RankingsContent', () => {
    test('renders the level props', () => {
        render(<RankingsContent level={Level.Five} />);
        expect(screen.getByText(Level.Five.toUpperCase())).toBeDefined();
    });

    test('renders the sub components', () => {
        render(<RankingsContent level={Level.Five} />);
        expect(screen.getByTestId('RankingsInfo')).toBeDefined();
        expect(screen.getByTestId('RankingsRatings')).toBeDefined();
        expect(screen.getByTestId('RankingsRadars')).toBeDefined();
        expect(screen.getByTestId('RankingsBars')).toBeDefined();
    });
});
