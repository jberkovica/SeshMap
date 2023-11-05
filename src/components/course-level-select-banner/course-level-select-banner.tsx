import { CourseId, Level } from '@/consts/course';
import { CourseSelect } from './course-select';
import { LevelSelect } from './level-select';

export type CourseLevelSelectBannerProps = {
    courseId?: CourseId | '';
    level: Level;
    setCourseId?(courseId: CourseId | ''): void;
    setLevel(level: Level): void;
};

export function CourseLevelSelectBanner({
    level,
    courseId,
    setLevel,
    setCourseId,
}: CourseLevelSelectBannerProps) {
    const title =
        courseId !== undefined && setCourseId !== undefined
            ? 'Please select Level and Module'
            : 'Please select Level';

    return (
        <div
            className="bg-neutral-200 text-gray-900 dark:bg-neutral-600 dark:text-white"
            data-testid="CourseLevelSelectBanner"
        >
            <header className="container flex flex-col justify-between gap-4 py-10 md:flex-row md:items-center">
                <h2 className="text-xl font-light">{title}</h2>
                <div className="flex gap-6">
                    <LevelSelect handleChange={setLevel} value={level} />
                    {courseId !== undefined && setCourseId !== undefined && (
                        <CourseSelect
                            level={level}
                            handleChange={setCourseId}
                            value={courseId}
                        />
                    )}
                </div>
            </header>
        </div>
    );
}
