import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { HomeQuestionCard } from './home-question-card';

describe('HomeQuestionCard', () => {
    test('renders title and description', () => {
        const title = 'title';
        const description = 'description';
        render(<HomeQuestionCard title={title} description={description} />);
        expect(screen.getByText(title)).toBeDefined();
        expect(screen.getByText(description)).toBeDefined();
    });
});
