import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Rankings from './page';

describe('Rankings', () => {
    test('renders all components', () => {
        render(<Rankings />);
        expect(screen.getByTestId('CourseLevelSelectBanner')).toBeTruthy();
    });
});
