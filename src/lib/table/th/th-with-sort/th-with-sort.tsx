import { ReactNode } from 'react';
import { TableSortButton } from './table-sort-button';
import { SharedThProps } from '../../types';

export type ThWithSortProps = {
    onClick(): void;
    sharedThProps: SharedThProps;
    title: ReactNode;
};

export function ThWithSort({ onClick, sharedThProps, title }: ThWithSortProps) {
    return (
        <th data-testid="ThWithSort" {...sharedThProps}>
            <div className="flex items-center">
                {title}
                <TableSortButton
                    onClick={onClick}
                    property={title!.toString()}
                />
            </div>
        </th>
    );
}
