import { ReactNode } from 'react';
import { SharedThProps } from '../../types';

export type ThWithoutProps = {
    sharedThProps: SharedThProps;
    title: ReactNode;
};

export function ThWithoutSort({ sharedThProps, title }: ThWithoutProps) {
    return (
        <th data-testid="ThWithoutSort" {...sharedThProps}>
            {title}
        </th>
    );
}
