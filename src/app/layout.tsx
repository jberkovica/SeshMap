import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'SeshMap',
    description: 'SeshMap session planner for UoL',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="App">
                    <Navbar />
                    {children}
                </div>
                <div className="footer">
                    <small>All rights reserved @UoL 2023</small>
                </div>
            </body>
        </html>
    );
}
