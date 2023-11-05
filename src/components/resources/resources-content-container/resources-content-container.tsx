import { CourseId, courseInfoMap } from '@/consts/course';
import { ResourcesContent } from './resources-content';

export type ResourcesContentContainerProps = {
    courseId: CourseId | '';
};

export function ResourcesContentContainer({
    courseId,
}: ResourcesContentContainerProps) {
    return (
        <section
            className="container py-12"
            data-testid="ResourcesContentContainer"
        >
            {courseId === '' ? null : (
                <ResourcesContent courseInfo={courseInfoMap[courseId]} />
            )}
        </section>
    );
}
