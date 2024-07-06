import { DateTime } from 'luxon';
import { semesterStartDate } from '@/consts/datetime';

export function HomeBanner() {
    return (
        <div
            className="bg-neutral-200 text-gray-900 dark:bg-neutral-600 dark:text-white"
            data-testid="HomeBanner"
        >
            <div className="container flex justify-between py-10">
                <header className="[&>p]:mb-4 [&>p]:max-w-xl">
                    <h1 className="mb-6 text-3xl font-medium lg:text-4xl">
                        Welcome to SeshMap!
                    </h1>
                    <p>
                        SeshMap is your one-stop resource and planning hub, for
                        all things related to the online University of London
                        BSc. Computer Science degree!
                    </p>
                    <p>
                        All information related to modules can be found across
                        these pages; you may also browse through course-specific
                        data to make informed decisions about your next session.
                    </p>
                </header>
                <section className="text-center">
                    <h2 className="text-3xl lg:text-4xl">week</h2>
                    <span
                        className="text-8xl"
                        data-testid="HomeBanner-weekNumber"
                    >
                        {getSemesterWeekNumber(DateTime.local())}
                    </span>
                </section>
            </div>
        </div>
    );
}

export const getSemesterWeekNumber = (today: DateTime): number => {
    const diffInWeeks = Math.ceil(today.diff(semesterStartDate, 'weeks').weeks);

    if (diffInWeeks < 1 || diffInWeeks > 22) {
        return 0;
    }

    return diffInWeeks;
};
