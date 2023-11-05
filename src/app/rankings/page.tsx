'use client';

import { useState } from 'react';
import { CourseLevelSelectBanner } from '@/components/course-level-select-banner';
import { Level } from '@/consts/course';

export default function Rankings() {
    const [level, setLevel] = useState<Level>(Level.Four);

    return (
        <main>
            <CourseLevelSelectBanner level={level} setLevel={setLevel} />
        </main>
    );
}
