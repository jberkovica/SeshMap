import { graphColors } from '@/consts/colors';
import { CourseId } from '@/consts/course';
import { RankingsRadar } from './rankings-radar';

export type RankingsRadarsProps = {
    courseIds: CourseId[];
};

export function RankingsRadars({ courseIds }: RankingsRadarsProps) {
    return (
        <section data-testid="RankingsRadars">
            <h2 className="mb-8 text-center text-4xl font-light">
                Module Features
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {courseIds.map((courseId, i) => (
                    <RankingsRadar
                        courseId={courseId}
                        color={graphColors[i]}
                        key={courseId}
                    />
                ))}
            </div>
        </section>
    );
}
