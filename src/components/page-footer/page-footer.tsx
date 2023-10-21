import { DateTime } from 'luxon';

export function PageFooter() {
    const today = DateTime.now();

    return (
        <footer className="bg-neutral-500 py-2 text-center text-white">
            <small>All rights reserved. @UoL {today.get('year')}</small>
        </footer>
    );
}
