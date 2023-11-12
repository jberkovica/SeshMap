import { ReactNode } from 'react';
import { SharedThProps } from '../../types';

export type ThReadOnlyProps = {
    sharedThProps: SharedThProps;
    title: ReactNode;
};

export function ThReadOnly({ sharedThProps, title }: ThReadOnlyProps) {
    return (
        <th data-testid="ThReadOnly" {...sharedThProps}>
            <span className="sr-only">{title}</span>
        </th>
    );
}
