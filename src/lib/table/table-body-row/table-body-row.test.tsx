import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { TableBodyRow } from './table-body-row';
import { TableColumnAlign } from '../types';

describe('TableBodyRow', () => {
    test('renders with correct classNames when isEvenRow', () => {
        render(
            <table>
                <tbody>
                    <TableBodyRow
                        boldFirstColumn={false}
                        isEvenRow={true}
                        columns={[]}
                        columnProps={{}}
                        rowData={{}}
                    />
                </tbody>
            </table>
        );
        expect(screen.getByTestId('TableBodyRow').className).include(
            'bg-white'
        );
        expect(screen.getByTestId('TableBodyRow').className).not.include(
            'bg-gray-50'
        );
        expect(screen.getByTestId('TableBodyRow').className).include(
            'dark:bg-neutral-900'
        );
        expect(screen.getByTestId('TableBodyRow').className).not.include(
            'dark:bg-neutral-800'
        );
    });

    test('renders with correct classNames when !isEvenRow', () => {
        render(
            <table>
                <tbody>
                    <TableBodyRow
                        boldFirstColumn={false}
                        isEvenRow={false}
                        columns={[]}
                        columnProps={{}}
                        rowData={{}}
                    />
                </tbody>
            </table>
        );
        expect(screen.getByTestId('TableBodyRow').className).not.include(
            'bg-white'
        );
        expect(screen.getByTestId('TableBodyRow').className).include(
            'bg-gray-50'
        );
        expect(screen.getByTestId('TableBodyRow').className).not.include(
            'dark:bg-neutral-900'
        );
        expect(screen.getByTestId('TableBodyRow').className).include(
            'dark:bg-neutral-800'
        );
    });

    test('renders data correctly', () => {
        render(
            <table>
                <tbody>
                    <TableBodyRow
                        boldFirstColumn={false}
                        isEvenRow={false}
                        columns={['1', '2', '3']}
                        columnProps={{
                            '1': { align: TableColumnAlign.left, title: 'One' },
                            '2': {
                                align: TableColumnAlign.right,
                                title: 'Two',
                            },
                            '3': {
                                align: TableColumnAlign.center,
                                title: 'Three',
                            },
                        }}
                        rowData={{
                            '1': 'DataOne',
                            '2': 'DataTwo',
                            '3': 'DataThree',
                        }}
                    />
                </tbody>
            </table>
        );

        expect(screen.getByText('DataOne')).toBeDefined();
        expect(screen.getByText('DataTwo')).toBeDefined();
        expect(screen.getByText('DataThree')).toBeDefined();
    });

    test('aligns correctly based on align columnProps', () => {
        render(
            <table>
                <tbody>
                    <TableBodyRow
                        boldFirstColumn={false}
                        isEvenRow={false}
                        columns={['1', '2', '3']}
                        columnProps={{
                            '1': { align: TableColumnAlign.left, title: 'One' },
                            '2': {
                                align: TableColumnAlign.right,
                                title: 'Two',
                            },
                            '3': {
                                align: TableColumnAlign.center,
                                title: 'Three',
                            },
                        }}
                        rowData={{
                            '1': 'DataOne',
                            '2': 'DataTwo',
                            '3': 'DataThree',
                        }}
                    />
                </tbody>
            </table>
        );

        expect(screen.getByText('DataOne').className).contain('text-left');
        expect(screen.getByText('DataTwo').className).contain('text-right');
        expect(screen.getByText('DataThree').className).contain('text-center');
    });

    test('boldFirstColumn==true yields only the first column to be bold', () => {
        render(
            <table>
                <tbody>
                    <TableBodyRow
                        boldFirstColumn={true}
                        isEvenRow={false}
                        columns={['1', '2', '3']}
                        columnProps={{
                            '1': { align: TableColumnAlign.left, title: 'One' },
                            '2': {
                                align: TableColumnAlign.right,
                                title: 'Two',
                            },
                            '3': {
                                align: TableColumnAlign.center,
                                title: 'Three',
                            },
                        }}
                        rowData={{
                            '1': 'DataOne',
                            '2': 'DataTwo',
                            '3': 'DataThree',
                        }}
                    />
                </tbody>
            </table>
        );

        expect(screen.getByTestId('TdBold').textContent).toBe('DataOne');
        expect(screen.getAllByTestId('Td')).toHaveLength(2);
    });

    test('boldFirstColumn==false yields no bold columns', () => {
        render(
            <table>
                <tbody>
                    <TableBodyRow
                        boldFirstColumn={false}
                        isEvenRow={false}
                        columns={['1', '2', '3']}
                        columnProps={{
                            '1': { align: TableColumnAlign.left, title: 'One' },
                            '2': {
                                align: TableColumnAlign.right,
                                title: 'Two',
                            },
                            '3': {
                                align: TableColumnAlign.center,
                                title: 'Three',
                            },
                        }}
                        rowData={{
                            '1': 'DataOne',
                            '2': 'DataTwo',
                            '3': 'DataThree',
                        }}
                    />
                </tbody>
            </table>
        );

        expect(screen.queryByTestId('TdBold')).toBeNull();
        expect(screen.getAllByTestId('Td')).toHaveLength(3);
    });
});
