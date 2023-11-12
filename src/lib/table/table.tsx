'use client';
import { useMemo, useState } from 'react';
import { TableBodyRow } from './table-body-row';
import { Th } from './th';
import { TableColumnProps, TableRow, TableSortFunctions } from './types';

export type TableProps<Key extends string> = {
    columns: Key[];
    columnProps: {
        [K in Key]: TableColumnProps<Key>;
    };
    boldFirstColumn?: boolean;
    data: TableRow<Key>[];
};

export type TableSortState<Key extends string> = {
    column: Key;
    sort: TableSortFunctions<Key>;
    isDesc: boolean;
};

// https://flowbite.com/docs/components/tables/
export function Table<Key extends string>({
    boldFirstColumn,
    columns,
    columnProps,
    data,
}: TableProps<Key>) {
    const [sortState, setSortState] = useState<TableSortState<Key> | null>(
        null
    );

    const rows = useMemo(() => {
        if (!sortState) {
            return data;
        }

        if (sortState.isDesc) {
            return data.sort(sortState.sort.desc);
        } else {
            return data.sort(sortState.sort.asc);
        }
    }, [data, sortState]);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-neutral-600 dark:text-gray-400">
                    <tr>
                        {columns.map((column) => (
                            <Th
                                column={column}
                                columnProps={columnProps[column]}
                                sortState={sortState}
                                setSortState={setSortState}
                                key={column}
                            />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => {
                        return (
                            <TableBodyRow
                                boldFirstColumn={boldFirstColumn || false}
                                isEvenRow={rowIndex % 2 === 0}
                                columns={columns}
                                columnProps={columnProps}
                                key={rowIndex}
                                rowData={row}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
