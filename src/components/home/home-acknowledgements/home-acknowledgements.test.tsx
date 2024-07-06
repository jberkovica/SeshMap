import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { contributors } from './contributors';
import { HomeAcknowledgements } from './home-acknowledgements';

describe('HomeAcknowledgements', () => {
    test('renders contributors', () => {
        render(<HomeAcknowledgements />);
        expect(screen.getByText(contributors[0].name)).toBeDefined();
        expect(
            screen.getByText(contributors[contributors.length - 1].name)
        ).toBeDefined();
    });
});
