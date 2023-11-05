import { CourseSelect } from '@/components/course-select';
import { LevelSelect } from '@/components/level-select';
import { CourseId, Level } from '@/consts/course';

export type ResourcesBannerProps = {
    courseId: CourseId | '';
    level: Level;
    setCourseId(courseId: CourseId | ''): void;
    setLevel(level: Level): void;
};

export function ResourcesBanner({
    level,
    courseId,
    setLevel,
    setCourseId,
}: ResourcesBannerProps) {
    return (
        <div
            className="bg-neutral-200 text-gray-900 dark:bg-neutral-600 dark:text-white"
            data-testid="ResourcesBanner"
        >
            <header className="container flex flex-col justify-between gap-4 py-10 md:flex-row md:items-center">
                <h2 className="text-xl font-light">
                    Please select Level and Module
                </h2>
                <div className="flex gap-6">
                    <LevelSelect handleChange={setLevel} value={level} />
                    <CourseSelect
                        level={level}
                        handleChange={setCourseId}
                        value={courseId}
                    />
                </div>
            </header>
        </div>
    );
}
