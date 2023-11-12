import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { homeFaqs, HomeQuestions } from './home-questions';

describe('HomeQuestions', () => {
    test('renders the questions', () => {
        render(<HomeQuestions />);
        expect(screen.getAllByTestId('HomeQuestionCard').length).toBe(
            homeFaqs.length
        );
    });
});
