import { ReactNode } from 'react';

export type TableSortFunctions<Key extends string> = {
    asc(row1: TableRow<Key>, row2: TableRow<Key>): number;
    desc(row1: TableRow<Key>, row2: TableRow<Key>): number;
};

export enum TableColumnAlign {
    left = 'text-left',
    center = 'text-center',
    right = 'text-right',
}

export type TableColumnProps<Key extends string> = {
    title: ReactNode;
    align?: TableColumnAlign;
    sort?: TableSortFunctions<Key>;
    readOnly?: boolean;
};

export type TableRow<Key extends string> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [K in Key]: any;
};

export type SharedThProps = { [key: string]: string };
