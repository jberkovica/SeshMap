import clsx from 'clsx';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

export type AProps = DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
> & {
    href: string;
};

// https://flowbite.com/docs/typography/links/
export function A({ children, className, href, ...props }: AProps) {
    return (
        <a
            className={twMerge(
                clsx(
                    'font-medium text-blue-600 hover:underline dark:text-blue-500',
                    className
                )
            )}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {children}
        </a>
    );
}
