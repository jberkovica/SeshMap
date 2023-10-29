import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { SessionPlannerBanner } from './session-planner-banner';

describe('SessionPlannerBanner', () => {
    test('renders SessionPlannerBanner', () => {
        render(<SessionPlannerBanner />);
        expect(
            screen.getByText('Tips on how to plan your semester')
        ).toBeTruthy();
    });
});
