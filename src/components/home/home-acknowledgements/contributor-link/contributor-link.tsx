import { BsPerson } from 'react-icons/bs';

export type ContributorLinkProps = {
    name: string;
    href: string;
};

export function ContributorLink({ name, href }: ContributorLinkProps) {
    return (
        <a
            className="flex items-center gap-2 hover:underline"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <BsPerson />
            {name}
        </a>
    );
}
