'use client';

import { useState } from 'react';
import {
    ResourcesBanner,
    ResourcesContentContainer,
} from '@/components/resources';
import { CourseId, Level } from '@/consts/course';

export default function Resources() {
    const [level, setLevel] = useState<Level>(Level.Four);
    const [courseId, setCourseId] = useState<CourseId | ''>(CourseId.ITP1);

    return (
        <main>
            <ResourcesBanner
                level={level}
                setLevel={setLevel}
                courseId={courseId}
                setCourseId={setCourseId}
            />
            <ResourcesContentContainer courseId={courseId} />
        </main>
    );
}
