import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { A } from './a';

describe('A', () => {
    test('correctly renders the link', () => {
        render(<A href="https://google.com">Click here</A>);
        expect(screen.getByRole('link', { name: 'Click here' })).toBeDefined();
    });
});
