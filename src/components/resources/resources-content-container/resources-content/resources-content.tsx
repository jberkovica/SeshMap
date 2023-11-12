import { CourseInformation } from '@/consts/course';
import { ResourcesRow } from './resources-row';

export type ResourcesContentProps = {
    courseInfo: CourseInformation;
};

export function ResourcesContent({ courseInfo }: ResourcesContentProps) {
    return (
        <div
            data-testid="ResourcesContent"
            className="flex flex-col font-light dark:text-white"
        >
            <h1 className="pb-20 text-center text-xl md:text-3xl lg:text-5xl">
                {courseInfo.id}: {courseInfo.name}
            </h1>
            <div className="grid grid-cols-3 gap-y-20">
                <ResourcesRow
                    title="Syllabus"
                    description="Module structure and content with key concepts."
                    href={courseInfo.syllabus}
                />
                <ResourcesRow
                    title="Specification"
                    description="Module aims, topics and learning outcomes as well as assessment methods."
                    href={courseInfo.specification}
                />
                <ResourcesRow
                    title="Slack"
                    description="This is direct link to module dedicated slack channel. It is best practise to use this communication tool to discuss ongoing problems."
                    href={courseInfo.slack}
                />
                <ResourcesRow
                    title="REPL"
                    description="REPL stands for Resources Enriching Perennial Learners. It is an accumulation of resources collected by students including FAQs, Notes and other useful resources."
                    href={courseInfo.repl}
                />
                <ResourcesRow
                    title="Notes"
                    description="Useful notes, screenshots of lectures, summaries and additional readings compiled by students and professors."
                    href={courseInfo.notes}
                />
                <ResourcesRow
                    title="Midterm"
                    description="This is a link to available past midterms."
                    href={courseInfo.midterm}
                />
                <ResourcesRow
                    title="Final"
                    description="This is a link to past exams and available answer sheets."
                    href={courseInfo.final}
                />
            </div>
        </div>
    );
}
