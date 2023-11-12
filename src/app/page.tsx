import {
    HomeAcknowledgements,
    HomeBanner,
    HomeQuestions,
} from '@/components/home';

export default function Home() {
    return (
        <main data-testid="Home">
            <HomeBanner />
            <HomeQuestions />
            <HomeAcknowledgements />
        </main>
    );
}
