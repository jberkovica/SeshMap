import { ContributorLink } from './contributor-link';
import { contributors } from './contributors';

export function HomeAcknowledgements() {
    return (
        <section
            className="bg-neutral-200 text-gray-900 dark:bg-neutral-600 dark:text-white"
            data-testid="HomeAcknowledgements"
        >
            <div className="container py-10">
                <h2 className="mb-10 text-center text-2xl font-medium">
                    Acknowledgements
                </h2>
                <div className="grid grid-cols-2 justify-items-start gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {contributors.map(({ name, link }) => (
                        <ContributorLink key={link} name={name} href={link} />
                    ))}
                </div>
            </div>
        </section>
    );
}
