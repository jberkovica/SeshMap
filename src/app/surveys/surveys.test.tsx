import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Surveys from './page';

describe('Surveys', () => {
    test('renders all components', () => {
        render(<Surveys />);
        expect(screen.getByTestId('CourseLevelSelectBanner')).toBeDefined();
    });
});
