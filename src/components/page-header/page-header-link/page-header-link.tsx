import Link from 'next/link';
import { ReactNode } from 'react';
import { Route } from '@/consts/routing';

export type PageHeaderLinkProps = {
    children: ReactNode;
    href: Route;
};

export function PageHeaderLink({ children, href }: PageHeaderLinkProps) {
    return (
        <Link href={href} className="text-white no-underline">
            {children}
        </Link>
    );
}
