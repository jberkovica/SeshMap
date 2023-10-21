import { HomeQuestionCard } from './home-question-card';

export function HomeQuestions() {
    return (
        <section className="container flex flex-col items-stretch gap-8 py-7 md:flex-row">
            {homeFaqs.map(({ question, answer }) => (
                <HomeQuestionCard
                    key={question}
                    title={question}
                    description={answer}
                />
            ))}
        </section>
    );
}

export const homeFaqs: { question: string; answer: string }[] = [
    {
        question: 'What is Seshmap?',
        answer: 'SeshMap is an intuitive degree planning application designed by students for students.',
    },
    {
        question: 'How can SeshMap help me?',
        answer: 'SeshMap allows you to select the combination of modules and gain insight on the time constraints and difficulty of the module.',
    },
    {
        question: 'How does SeshMap work?',
        answer: 'Click on the Session Planner to get started and enter your tentative modules.',
    },
];
