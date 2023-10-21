import { AcknowledgementsCarousel } from '@/components/acknowledgements-carousel';
import { HomeBanner } from '@/components/home';
import { QuestionsCarousel } from '@/components/question-carousel';

export default function Home() {
    return (
        <main>
            <HomeBanner />
            <QuestionsCarousel />
            <AcknowledgementsCarousel />
        </main>
    );
}
