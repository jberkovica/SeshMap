import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import SessionPlanner from './page';

describe('SessionPlanner', () => {
    test('renders all components', () => {
        render(<SessionPlanner />);
        expect(screen.getByTestId('SessionPlannerBanner')).toBeTruthy();
        expect(screen.getByTestId('SessionPlannerSemesters')).toBeTruthy();
    });
});
