'use client';

import { useEffect, useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { Semester } from './semester';
import { useSemesters } from './use-semesters';

export function SessionPlannerSemesters() {
    // Adding for hydration issues
    // https://github.com/facebook/react/issues/25627#issuecomment-1444073227
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const {
        addNewSemester,
        changeCourseInSemester,
        semesters,
        removeSemester,
    } = useSemesters();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return !isMounted ? null : (
        <section
            className="container my-12"
            data-testid="SessionPlannerSemesters"
        >
            <div className="flex flex-col gap-12">
                {semesters.map((semester, index) => (
                    <Semester
                        key={index}
                        semester={semester}
                        updateSemester={(courseIdx, newValue) =>
                            changeCourseInSemester(index, courseIdx, newValue)
                        }
                        removeSemester={() => removeSemester(index)}
                        semesterNumber={index + 1}
                    />
                ))}
            </div>
            <div className="my-12 flex items-center justify-center">
                <button
                    className="text-blue-600 dark:text-blue-400"
                    aria-label="Add a semester"
                    data-testid="SessionPlannerSemesters-addButton"
                    onClick={addNewSemester}
                >
                    <BsPlusCircle size="2.5rem" />
                </button>
            </div>
        </section>
    );
}
