import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Home from './page';

describe('Home', () => {
    test('renders all components', () => {
        render(<Home />);
        expect(screen.getByTestId('HomeBanner')).toBeDefined();
        expect(screen.getByTestId('HomeQuestions')).toBeDefined();
        expect(screen.getByTestId('HomeAcknowledgements')).toBeDefined();
    });
});
