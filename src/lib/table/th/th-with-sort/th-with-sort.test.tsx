import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { ThWithSort } from './th-with-sort';

describe('ThWithSort', () => {
    test('renders passed title', () => {
        render(
            <table>
                <thead>
                    <tr>
                        <ThWithSort
                            sharedThProps={{}}
                            title="Title"
                            onClick={() => {}}
                        />
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
                        <ThWithSort
                            sharedThProps={{ className: 'test' }}
                            title="Title"
                            onClick={() => {}}
                        />
                    </tr>
                </thead>
            </table>
        );
        const el = screen.getByTestId('ThWithSort');
        expect(el.className).include('test');
    });

    test('Clicking on Sort button calls onClick', () => {
        const onClick = vi.fn();
        render(
            <table>
                <thead>
                    <tr>
                        <ThWithSort
                            sharedThProps={{}}
                            title="Title"
                            onClick={onClick}
                        />
                    </tr>
                </thead>
            </table>
        );
        expect(onClick).not.toHaveBeenCalled();
        fireEvent.click(screen.getByLabelText('Sort by title'));
        expect(onClick).toHaveBeenCalled();
    });
});
