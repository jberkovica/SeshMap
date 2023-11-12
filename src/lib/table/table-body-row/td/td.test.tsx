import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Td } from './td';
import { TableColumnAlign } from '../../types';

describe('Td', () => {
    test('renders passed children', () => {
        render(
            <table>
                <thead>
                    <tr>
                        <Td>Test123</Td>
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
                        <Td align={TableColumnAlign.center}>test</Td>
                    </tr>
                </thead>
            </table>
        );
        const el = screen.getByTestId('Td');
        expect(el.className).include('text-center');
    });
});
