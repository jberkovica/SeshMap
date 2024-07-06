import { clsx } from 'clsx';
import { Td } from './td';
import { TdBold } from './td-bold';
import { TableColumnProps, TableRow } from '../types';

export type TableBodyRowProps<Key extends string> = {
    boldFirstColumn: boolean;
    isEvenRow: boolean;
    columns: Key[];
    columnProps: {
        [K in Key]: TableColumnProps<Key>;
    };
    rowData: TableRow<Key>;
};

export function TableBodyRow<Key extends string>({
    boldFirstColumn,
    columns,
    columnProps,
    rowData,
    isEvenRow,
}: TableBodyRowProps<Key>) {
    return (
        <tr
            className={clsx('border-b dark:border-neutral-700', {
                'bg-white': isEvenRow,
                'bg-gray-50': !isEvenRow,
                'dark:bg-neutral-900': isEvenRow,
                'dark:bg-neutral-800': !isEvenRow,
            })}
            data-testid="TableBodyRow"
        >
            {columns.map((column, columnIndex) => {
                const { align } = columnProps[column];
                const data = rowData[column];

                if (columnIndex === 0 && boldFirstColumn) {
                    return (
                        <TdBold align={align} key={column}>
                            {data}
                        </TdBold>
                    );
                } else {
                    return (
                        <Td align={align} key={column}>
                            {data}
                        </Td>
                    );
                }
            })}
        </tr>
    );
}
