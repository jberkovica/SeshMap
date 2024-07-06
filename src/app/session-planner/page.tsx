import {
    SessionPlannerBanner,
    SessionPlannerSemesters,
} from '@/components/session-planner';

export default function SessionPlanner() {
    return (
        <main>
            <SessionPlannerBanner />
            <SessionPlannerSemesters />
        </main>
    );
}
