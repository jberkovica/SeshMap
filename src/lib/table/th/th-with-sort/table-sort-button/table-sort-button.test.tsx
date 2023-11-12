import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { TableSortButton } from './table-sort-button';

const onClick = vi.fn();

describe('TableSortButton', () => {
    afterEach(() => {
        onClick.mockReset();
    });

    test('button with aria label is rendered based on passed property', () => {
        render(<TableSortButton onClick={onClick} property="Column" />);
        expect(screen.getByLabelText('Sort by column')).toBeDefined();
    });

    test('clicking on button triggers onClick', () => {
        render(<TableSortButton onClick={onClick} property="Column" />);
        expect(onClick).not.toHaveBeenCalled();

        fireEvent.click(screen.getByLabelText('Sort by column'));
        expect(onClick).toHaveBeenCalled();
    });
});
