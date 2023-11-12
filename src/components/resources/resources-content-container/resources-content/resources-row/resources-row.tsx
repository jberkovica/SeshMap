import { A } from '@/lib/a';

export type ResourcesRowProps = {
    title: string;
    description: string;
    href: string;
};

export function ResourcesRow({ title, description, href }: ResourcesRowProps) {
    return (
        <>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>{description}</p>
            <A href={href} className="justify-self-end">
                Open
            </A>
        </>
    );
}
