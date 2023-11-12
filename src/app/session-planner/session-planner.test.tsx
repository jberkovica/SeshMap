import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import SessionPlanner from './page';

describe('SessionPlanner', () => {
    test('renders all components', () => {
        render(<SessionPlanner />);
        expect(screen.getByTestId('SessionPlannerBanner')).toBeDefined();
        expect(screen.getByTestId('SessionPlannerSemesters')).toBeDefined();
    });
});
