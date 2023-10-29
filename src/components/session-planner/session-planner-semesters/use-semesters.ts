import { useCallback, useEffect, useState } from 'react';
import { courseIds } from '@/consts/course';
import { CourseState, SemesterState } from './types';

export const SEMESTERS_KEY = 'semesters';

export const useSemesters = () => {
    const initialSemesters = getInitialSemesters(
        localStorage.getItem(SEMESTERS_KEY)
    );
    const [semesters, setSemesters] =
        useState<SemesterState[]>(initialSemesters);

    useEffect(() => {
        localStorage.setItem(SEMESTERS_KEY, JSON.stringify(semesters));
    }, [semesters]);

    const addNewSemester = useCallback(() => {
        setSemesters([...semesters, getEmptySemester()]);
    }, [semesters, setSemesters]);

    const removeSemester = useCallback(
        (idx: number) => {
            if (idx < 0 || idx >= semesters.length) {
                return;
            }

            setSemesters([
                ...semesters.slice(0, idx),
                ...semesters.slice(idx + 1),
            ]);
        },
        [semesters, setSemesters]
    );

    const changeCourseInSemester = useCallback(
        (semesterIdx: number, courseIdx: number, newValue: CourseState) => {
            if (semesterIdx < 0 || semesterIdx >= semesters.length) {
                return;
            }
            if (courseIdx < 0 || courseIdx >= 4) {
                return;
            }

            const semester = semesters[semesterIdx];
            semester[courseIdx] = newValue;

            setSemesters([
                ...semesters.slice(0, semesterIdx),
                semester,
                ...semesters.slice(semesterIdx + 1),
            ]);
        },
        [semesters, setSemesters]
    );

    return {
        addNewSemester,
        changeCourseInSemester,
        semesters,
        setSemesters,
        removeSemester,
    };
};

export const getInitialSemesters = (
    semestersFromLocalStorage: string | null
): SemesterState[] => {
    if (!semestersFromLocalStorage) {
        return [getEmptySemester()];
    }

    const parsedSemesters = JSON.parse(semestersFromLocalStorage);

    if (!Array.isArray(parsedSemesters)) {
        return [getEmptySemester()];
    }

    const validSemesters = filterValidSemesters(parsedSemesters);

    return validSemesters.length ? validSemesters : [getEmptySemester()];
};

export const filterValidSemesters = (semesters: unknown[]) => {
    return semesters.filter((semester) => {
        if (!Array.isArray(semester)) {
            return false;
        }

        if (semester.length !== 4) {
            return false;
        }

        return semester.every(
            (courseId) => courseIds.includes(courseId) || courseId === ''
        );
    }) as SemesterState[];
};

export const getEmptySemester = (): SemesterState => ['', '', '', ''];
