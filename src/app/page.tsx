import { AcknowledgementsCarousel } from '@/components/acknowledgements-carousel';
import { HomeBanner, HomeQuestions } from '@/components/home';

export default function Home() {
    return (
        <main>
            <HomeBanner />
            <HomeQuestions />
            <AcknowledgementsCarousel />
        </main>
    );
}
