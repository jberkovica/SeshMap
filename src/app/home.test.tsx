import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Home from './page';

describe('Home', () => {
    test('renders all components', () => {
        render(<Home />);
        expect(screen.getByTestId('HomeBanner')).toBeTruthy();
        expect(screen.getByTestId('HomeQuestions')).toBeTruthy();
        expect(screen.getByTestId('HomeAcknowledgements')).toBeTruthy();
    });
});
