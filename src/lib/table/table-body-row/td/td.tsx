import clsx from 'clsx';
import { ReactNode } from 'react';
import { TableColumnAlign } from '../../types';

export type TdProps = {
    align?: TableColumnAlign;
    children: ReactNode;
};

export function Td({ align, children }: TdProps) {
    return (
        <td className={clsx('px-6 py-4', align)} data-testid="Td">
            {children}
        </td>
    );
}
