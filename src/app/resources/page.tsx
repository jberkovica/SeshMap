'use client';

import { useState } from 'react';
import { CourseLevelSelectBanner } from '@/components/course-level-select-banner';
import { ResourcesContentContainer } from '@/components/resources';
import { CourseId, Level } from '@/consts/course';

export default function Resources() {
    const [level, setLevel] = useState<Level>(Level.Four);
    const [courseId, setCourseId] = useState<CourseId | ''>(CourseId.ITP1);

    return (
        <main>
            <CourseLevelSelectBanner
                level={level}
                setLevel={setLevel}
                courseId={courseId}
                setCourseId={setCourseId}
            />
            <ResourcesContentContainer courseId={courseId} />
        </main>
    );
}
