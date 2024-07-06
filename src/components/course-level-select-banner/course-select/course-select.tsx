'use client';
import { useEffect } from 'react';
import { CourseId, courseIdsByLevelMap, Level } from '@/consts/course';
import { Select } from '@/lib/select';

export type CourseSelectProps = {
    level: Level;
    handleChange(newCourse: CourseId | ''): void;
    value: CourseId | '';
};

export function CourseSelect({
    level,
    handleChange,
    value,
}: CourseSelectProps) {
    useEffect(() => {
        if (value !== '' && !courseIdsByLevelMap[level].includes(value)) {
            handleChange('');
        }
    }, [handleChange, level, value]);

    return (
        <Select
            aria-label="Select a module"
            data-testid="CourseSelect"
            onChange={(e) => handleChange(e.target.value as CourseId)}
            value={value}
        >
            <option value="">Select module</option>
            {courseIdsByLevelMap[level].map((courseId) => (
                <option value={courseId} key={courseId}>
                    {courseId}
                </option>
            ))}
        </Select>
    );
}
