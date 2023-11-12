import clsx from 'clsx';
import { ReactNode } from 'react';
import { TableColumnAlign } from '../../types';

export type TdBoldProps = {
    align?: TableColumnAlign;
    children: ReactNode;
};

export function TdBold({ align, children }: TdBoldProps) {
    return (
        <th
            scope="row"
            data-testid="TdBold"
            className={clsx(
                'whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white',
                align
            )}
        >
            {children}
        </th>
    );
}
