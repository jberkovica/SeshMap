import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import {
    sortObjectsByPropertyNumberAsc,
    sortObjectsByPropertyNumberDesc,
} from '@/utils/sort';
import { Table } from './table';
import { TableColumnAlign, TableColumnProps, TableRow } from './types';

type TableKeys = 'one' | 'two' | 'three' | 'four';
const columns: TableKeys[] = ['one', 'two', 'three', 'four'];
const columnProps: {
    [K in TableKeys]: TableColumnProps<TableKeys>;
} = {
    one: {
        title: 'header one',
        align: TableColumnAlign.left,
        sort: {
            asc: sortObjectsByPropertyNumberAsc('one'),
            desc: sortObjectsByPropertyNumberDesc('one'),
        },
    },
    two: {
        title: 'header two',
        align: TableColumnAlign.center,
        sort: {
            asc: sortObjectsByPropertyNumberAsc('two'),
            desc: sortObjectsByPropertyNumberDesc('two'),
        },
    },
    three: {
        title: 'header three',
        align: TableColumnAlign.right,
    },
    four: {
        title: 'header four',
        align: TableColumnAlign.left,
        readOnly: true,
    },
};
const data: TableRow<TableKeys>[] = [
    { one: 4, two: 3, three: 2, four: 1 },
    { one: 2, two: 1, three: 4, four: 2 },
    { one: 3, two: 4, three: 1, four: 3 },
    { one: 1, two: 2, three: 3, four: 4 },
];

describe('Table', () => {
    test('renders the table header titles correctly in the correct component', () => {
        render(
            <Table columns={columns} columnProps={columnProps} data={data} />
        );
        const headerOne = screen.getByText('header one');
        const headerTwo = screen.getByText('header two');
        const headerThree = screen.getByText('header three');
        const headerFour = screen.getByText('header four');

        expect(headerOne).toBeDefined();
        expect(headerTwo).toBeDefined();
        expect(headerThree).toBeDefined();
        expect(headerFour).toBeDefined();

        expect(screen.getByLabelText('Sort by header one')).toBeDefined();
        expect(screen.getByLabelText('Sort by header two')).toBeDefined();
        expect(screen.queryByLabelText('Sort by header three')).toBeNull();
        expect(screen.queryByLabelText('Sort by header four')).toBeNull();

        expect(screen.getAllByTestId('ThWithSort')).toHaveLength(2);
        expect(screen.getAllByTestId('ThReadOnly')).toHaveLength(1);
        expect(screen.getAllByTestId('ThWithoutSort')).toHaveLength(1);

        expect(screen.getByTestId('ThReadOnly').textContent).toBe(
            'header four'
        );
        expect(screen.getByTestId('ThWithoutSort').textContent).toBe(
            'header three'
        );
    });

    test('does not render any TdBold if !boldFirstColumn', () => {
        render(
            <Table
                columns={columns}
                columnProps={columnProps}
                data={data}
                boldFirstColumn={false}
            />
        );
        expect(screen.queryAllByTestId('TdBold')).toHaveLength(0);
        expect(screen.getAllByTestId('Td')).toHaveLength(4 * 4);
    });

    test('renders TdBold if boldFirstColumn', () => {
        render(
            <Table
                columns={columns}
                columnProps={columnProps}
                data={data}
                boldFirstColumn={true}
            />
        );
        expect(screen.getAllByTestId('TdBold')).toHaveLength(4);
        expect(screen.getAllByTestId('Td')).toHaveLength(3 * 4);
    });

    test('alternates colors for even and odd rows', () => {
        render(
            <Table
                columns={columns}
                columnProps={columnProps}
                data={data}
                boldFirstColumn={true}
            />
        );
        const tableBodyRows = screen.getAllByTestId('TableBodyRow');
        expect(tableBodyRows).toHaveLength(4);
        expect(tableBodyRows[0].className).include('bg-white');
        expect(tableBodyRows[1].className).not.include('bg-white');
        expect(tableBodyRows[2].className).include('bg-white');
        expect(tableBodyRows[3].className).not.include('bg-white');
    });

    test('displays data correctly', () => {
        render(
            <Table
                columns={columns}
                columnProps={columnProps}
                data={data}
                boldFirstColumn={false}
            />
        );
        const cells = screen.getAllByTestId('Td');
        expect(cells).toHaveLength(16);
        // test first col
        expect(cells[0].textContent).toBe(data[0].one.toString());
        expect(cells[4].textContent).toBe(data[1].one.toString());
        expect(cells[8].textContent).toBe(data[2].one.toString());
        expect(cells[12].textContent).toBe(data[3].one.toString());
        // test second col
        expect(cells[1].textContent).toBe(data[0].two.toString());
        expect(cells[5].textContent).toBe(data[1].two.toString());
        expect(cells[9].textContent).toBe(data[2].two.toString());
        expect(cells[13].textContent).toBe(data[3].two.toString());
    });

    test('clicking on sort once sorts asc', () => {
        render(
            <Table
                columns={columns}
                columnProps={columnProps}
                data={data}
                boldFirstColumn={false}
            />
        );
        fireEvent.click(screen.getByLabelText('Sort by header one'));

        const cells = screen.getAllByTestId('Td');
        expect(cells[0].textContent).toBe('1');
        expect(cells[4].textContent).toBe('2');
        expect(cells[8].textContent).toBe('3');
        expect(cells[12].textContent).toBe('4');
    });

    test('clicking on sort twice sorts desc', () => {
        render(
            <Table
                columns={columns}
                columnProps={columnProps}
                data={data}
                boldFirstColumn={false}
            />
        );
        fireEvent.click(screen.getByLabelText('Sort by header one'));
        fireEvent.click(screen.getByLabelText('Sort by header one'));

        const cells = screen.getAllByTestId('Td');
        expect(cells[0].textContent).toBe('4');
        expect(cells[4].textContent).toBe('3');
        expect(cells[8].textContent).toBe('2');
        expect(cells[12].textContent).toBe('1');
    });

    test('sorting by one column, then clicking on sort for another column sorts column asc', () => {
        render(
            <Table
                columns={columns}
                columnProps={columnProps}
                data={data}
                boldFirstColumn={false}
            />
        );
        fireEvent.click(screen.getByLabelText('Sort by header two'));
        fireEvent.click(screen.getByLabelText('Sort by header one'));

        const cells = screen.getAllByTestId('Td');
        expect(cells[0].textContent).toBe('1');
        expect(cells[4].textContent).toBe('2');
        expect(cells[8].textContent).toBe('3');
        expect(cells[12].textContent).toBe('4');
    });
});
