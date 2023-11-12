import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { PageFooter } from '@/components/page-footer';
import { PageHeader } from '@/components/page-header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'SeshMap',
    description: 'SeshMap session planner for UoL',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    inter.className,
                    'flex min-h-screen flex-col dark:bg-neutral-700 [&>main]:flex-1'
                )}
            >
                <PageHeader />
                {children}
                <PageFooter />
            </body>
        </html>
    );
}
