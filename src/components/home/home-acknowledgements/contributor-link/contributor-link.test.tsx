import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ContributorLink } from './contributor-link';

describe('ContributorLink', () => {
    test('renders link', () => {
        const name = 'Name';
        render(<ContributorLink name={name} href="https://github.com" />);
        expect(screen.getByText(name)).toBeDefined();
    });
});
