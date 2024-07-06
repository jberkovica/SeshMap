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
import { RadarChart } from '@/lib/radar-chart';
import { getPercentage } from '@/utils/data';

export enum RankingsRadarsLabel {
    Difficulty = 'Difficulty',
    Time = 'Time',
    Quality = 'Quality',
    SelfStudy = 'Self-Study',
    Learning = 'Learning',
    Interest = 'Interest',
}
const labels = Object.values(RankingsRadarsLabel);
const difficultyMax = Object.values(CourseDifficulty).length;
const timeMax = Object.values(CourseTime).length;
const qualityMax = Object.values(CourseQuality).length;
const selfStudyMax = Object.values(CourseSelfStudy).length;
const learningMax = Object.values(CourseLearning).length;
const interestMax = Object.values(CourseInterest).length;

export type RankingsRadarProps = {
    courseId: CourseId;
    color: string;
};

export function RankingsRadar({ courseId, color }: RankingsRadarProps) {
    const courseData = courseTEMPORARYFeatureMap[courseId];
    const courseInfo = courseInfoMap[courseId];

    const data = useMemo(() => getRankingsRadarData(courseData), [courseData]);

    return (
        <div data-testid="RankingsRadar">
            <RadarChart
                color={color}
                data={data}
                labels={labels}
                title={courseInfo.name}
            />
        </div>
    );
}

export const getRankingsRadarData = (
    courseData: (typeof courseTEMPORARYFeatureMap)[CourseId]
): (number | null)[] => {
    return [
        courseData?.difficulty
            ? getPercentage(courseData.difficulty, difficultyMax)
            : null,
        courseData?.time ? getPercentage(courseData.time, timeMax) : null,
        courseData?.quality
            ? getPercentage(courseData.quality, qualityMax)
            : null,
        courseData?.selfStudy
            ? getPercentage(courseData.selfStudy, selfStudyMax)
            : null,
        courseData?.learning
            ? getPercentage(courseData.learning, learningMax)
            : null,
        courseData?.interest
            ? getPercentage(courseData.interest, interestMax)
            : null,
    ];
};
