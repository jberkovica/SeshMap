import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ThWithoutSort } from './th-without-sort';

describe('ThWithoutSort', () => {
    test('renders passed title', () => {
        render(
            <table>
                <thead>
                    <tr>
                        <ThWithoutSort sharedThProps={{}} title="Title" />
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
                        <ThWithoutSort
                            sharedThProps={{ className: 'test' }}
                            title="Title"
                        />
                    </tr>
                </thead>
            </table>
        );
        const el = screen.getByTestId('ThWithoutSort');
        expect(el.className).include('test');
    });
});
