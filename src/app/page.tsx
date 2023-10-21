import {
    HomeAcknowledgements,
    HomeBanner,
    HomeQuestions,
} from '@/components/home';

export default function Home() {
    return (
        <main>
            <HomeBanner />
            <HomeQuestions />
            <HomeAcknowledgements />
        </main>
    );
}
