import Image from 'next/image';
import Link from 'next/link';
import { DarkModeButton } from './dark-mode-button';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">
                    <Image
                        src={'/seshmap-logo.png'}
                        alt="Logo"
                        className="navbar-logo"
                        width={62}
                        height={50}
                    />
                </Link>
                {/* TODO: implement menu toggle */}
                {/* <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            // data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button> */}

                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/session-planner" className="nav-link">
                                Session Planner
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/resources" className="nav-link">
                                Resources
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/rankings" className="nav-link">
                                Ranking
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/surveys" className="nav-link">
                                Surveys
                            </Link>
                        </li>
                    </ul>
                    <DarkModeButton />
                </div>
            </div>
        </nav>
    );
}
