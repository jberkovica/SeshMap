export type HomeQuestionCardProps = {
    title: string;
    description: string;
};

export function HomeQuestionCard({
    title,
    description,
}: HomeQuestionCardProps) {
    return (
        <div
            className="flex-1 rounded-md bg-neutral-200 p-10 text-gray-900 dark:bg-neutral-600 dark:text-white"
            data-testid="HomeQuestionCard"
        >
            <h3 className="mb-4 text-xl font-medium">{title}</h3>
            <p>{description}</p>
        </div>
    );
}
