import Image from 'next/image';
import Link from 'next/link';
import { Route } from '@/consts/routing';
import { DarkModeButton } from './dark-mode-button';
import { PageHeaderLink } from './page-header-link';

export function PageHeader() {
    return (
        <header
            className="bg-gradient-to-r from-indigo-500 to-pink-400 py-4 lg:py-10"
            data-testid="PageHeader"
        >
            <div className="container flex flex-col justify-between lg:flex-row">
                <Link href={Route.home}>
                    <Image
                        src="/seshmap-logo.png"
                        alt="Logo"
                        className="navbar-logo"
                        width={62.46}
                        height={50}
                    />
                </Link>
                <nav className="mx-4 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-10 [&>a]:text-right">
                    <PageHeaderLink href={Route.home}>Home</PageHeaderLink>
                    <PageHeaderLink href={Route.sessionPlanner}>
                        Session Planner
                    </PageHeaderLink>
                    <PageHeaderLink href={Route.resources}>
                        Resources
                    </PageHeaderLink>
                    <PageHeaderLink href={Route.rankings}>
                        Ranking
                    </PageHeaderLink>
                    {/* <PageHeaderLink href={Route.surveys}>
                        Surveys
                    </PageHeaderLink> */}
                    <DarkModeButton />
                </nav>
            </div>
        </header>
    );
}
