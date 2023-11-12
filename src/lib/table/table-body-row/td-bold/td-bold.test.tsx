import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { TdBold } from './td-bold';
import { TableColumnAlign } from '../../types';

describe('TdBold', () => {
    test('renders passed children', () => {
        render(
            <table>
                <thead>
                    <tr>
                        <TdBold>Test123</TdBold>
                    </tr>
                </thead>
            </table>
        );
        expect(screen.getByText('Test123')).toBeDefined();
    });

    test('renders with passed align', () => {
        render(
            <table>
                <thead>
                    <tr>
                        <TdBold align={TableColumnAlign.center}>test</TdBold>
                    </tr>
                </thead>
            </table>
        );
        const el = screen.getByTestId('TdBold');
        expect(el.className).include('text-center');
    });
});
