import { render, screen } from '@testing-library/react';
import { DateTime } from 'luxon';
import { describe, expect, test } from 'vitest';
import { PageFooter } from './page-footer';

describe('PageFooter', () => {
    test('renders the footer with the correct year', () => {
        render(<PageFooter />);
        const today = DateTime.now();
        expect(
            screen.getByText(new RegExp(today.get('year').toString()))
        ).toBeTruthy();
    });
});
