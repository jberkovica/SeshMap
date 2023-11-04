import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export type SelectProps = Omit<
    DetailedHTMLProps<
        SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    >,
    'className'
>;

// https://flowbite.com/docs/forms/select/
export const Select = ({ children, ...props }: SelectProps) => {
    return (
        <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            {...props}
        >
            {children}
        </select>
    );
};
