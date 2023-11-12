import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ThReadOnly } from './th-read-only';

describe('ThReadOnly', () => {
    test('renders passed title', () => {
        render(
            <table>
                <thead>
                    <tr>
                        <ThReadOnly sharedThProps={{}} title="Title" />
                    </tr>
                </thead>
            </table>
        );
        expect(screen.getByText('Title')).toBeDefined();
    });

    test('renders with passed sharedThProps', () => {
        render(
            <table>
                <thead>
                    <tr>
                        <ThReadOnly
                            sharedThProps={{ className: 'test' }}
                            title="Title"
                        />
                    </tr>
                </thead>
            </table>
        );
        const el = screen.getByTestId('ThReadOnly');
        expect(el.className).include('test');
    });
});
