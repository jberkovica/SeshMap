import { useMemo } from 'react';
import {
    CourseDifficulty,
    CourseId,
    courseInfoMap,
    CourseInterest,
    CourseLearning,
    CourseQuality,
    CourseSelfStudy,
    courseTEMPORARYFeatureMap,
    CourseTime,
} from '@/consts/course';
import { getPercentage } from '@/utils/data';
import { RankingsBarChart } from './rankings-bar-chart';

const difficultyLabels = Object.values(CourseDifficulty);
const timeLabels = Object.values(CourseTime);
const qualityLabels = Object.values(CourseQuality);
const selfStudyLabels = Object.values(CourseSelfStudy);
const learningLabels = Object.values(CourseLearning);
const interestLabels = Object.values(CourseInterest);
const difficultyMax = Object.values(CourseDifficulty).length;
const timeMax = Object.values(CourseTime).length;
const qualityMax = Object.values(CourseQuality).length;
const selfStudyMax = Object.values(CourseSelfStudy).length;
const learningMax = Object.values(CourseLearning).length;
const interestMax = Object.values(CourseInterest).length;

export type RankingsBarsProps = {
    courseIds: CourseId[];
};

export function RankingsBars({ courseIds }: RankingsBarsProps) {
    const xLabels = useMemo(
        () => courseIds.map((courseId) => courseInfoMap[courseId].id),
        [courseIds]
    );
    const courseData = useMemo(
        () => courseIds.map((courseId) => courseTEMPORARYFeatureMap[courseId]),
        [courseIds]
    );
    const barData = useMemo(() => {
        const output: (number | null)[][] = new Array(6);

        output[0] = courseData.map((course) =>
            course?.difficulty
                ? getPercentage(course.difficulty, difficultyMax)
                : null
        );
        output[1] = courseData.map((course) =>
            course?.time ? getPercentage(course.time, timeMax) : null
        );
        output[2] = courseData.map((course) =>
            course?.quality ? getPercentage(course.quality, qualityMax) : null
        );
        output[3] = courseData.map((course) =>
            course?.selfStudy
                ? getPercentage(course.selfStudy, selfStudyMax)
                : null
        );
        output[4] = courseData.map((course) =>
            course?.learning
                ? getPercentage(course.learning, learningMax)
                : null
        );
        output[5] = courseData.map((course) =>
            course?.interest
                ? getPercentage(course.interest, interestMax)
                : null
        );

        return output;
    }, [courseData]);

    return (
        <section data-testid="RankingsBars">
            <h2 className="mb-8 text-center text-4xl font-light">
                Metrics Comparison
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                <RankingsBarChart
                    data={barData[0]}
                    title="Course Difficulty"
                    xLabels={xLabels}
                    yLabels={difficultyLabels}
                />
                <RankingsBarChart
                    data={barData[1]}
                    title="Time"
                    xLabels={xLabels}
                    yLabels={timeLabels}
                />
                <RankingsBarChart
                    data={barData[2]}
                    title="Quality"
                    xLabels={xLabels}
                    yLabels={qualityLabels}
                />
                <RankingsBarChart
                    data={barData[3]}
                    title="Self Learning"
                    xLabels={xLabels}
                    yLabels={selfStudyLabels}
                />
                <RankingsBarChart
                    data={barData[4]}
                    title="Learning"
                    xLabels={xLabels}
                    yLabels={learningLabels}
                />
                <RankingsBarChart
                    data={barData[5]}
                    title="Interest"
                    xLabels={xLabels}
                    yLabels={interestLabels}
                />
            </div>
        </section>
    );
}
