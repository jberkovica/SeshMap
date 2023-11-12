import clsx from 'clsx';
import { useMemo } from 'react';
import { TableSortState } from '@/lib/table';
import { ThReadOnly } from './th-read-only';
import { ThWithSort } from './th-with-sort';
import { ThWithoutSort } from './th-without-sort';
import { TableColumnAlign, TableColumnProps } from '../types';

export type ThProps<Key extends string> = {
    column: Key;
    columnProps: TableColumnProps<Key>;
    sortState: TableSortState<Key> | null;
    setSortState(state: TableSortState<Key> | null): void;
};

export function Th<Key extends string>({
    column,
    columnProps,
    sortState,
    setSortState,
}: ThProps<Key>) {
    const {
        sort,
        title,
        align = TableColumnAlign.left,
        readOnly,
    } = columnProps;

    const sharedThProps = useMemo(
        () => ({
            scope: 'col',
            className: clsx('px-6 py-3', align),
        }),
        [align]
    );

    const columnDictatesSort = sortState?.column === column;
    const sortFunctionIsDesc = columnDictatesSort && !sortState?.isDesc;

    if (sort) {
        return (
            <ThWithSort
                onClick={() =>
                    setSortState({ column, isDesc: sortFunctionIsDesc, sort })
                }
                sharedThProps={sharedThProps}
                title={title}
            />
        );
    }

    if (readOnly) {
        return <ThReadOnly sharedThProps={sharedThProps} title={title} />;
    }

    return <ThWithoutSort sharedThProps={sharedThProps} title={title} />;
}
