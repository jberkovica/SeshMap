import clsx from 'clsx';
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type SelectProps = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>;

// https://flowbite.com/docs/forms/select/
export const Select = ({ children, className, ...props }: SelectProps) => {
    return (
        <select
            className={twMerge(
                clsx(
                    'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
                    className
                )
            )}
            {...props}
        >
            {children}
        </select>
    );
};
