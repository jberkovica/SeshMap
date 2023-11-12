import { CourseId } from '@/consts/course';

export type CourseState = CourseId | '';

export type SemesterState = [
    CourseState,
    CourseState,
    CourseState,
    CourseState,
];
