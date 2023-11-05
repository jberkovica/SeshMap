import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ResourcesRow } from './resources-row';

describe('ResourcesRow', () => {
    test('renders all props', () => {
        const title = 'this is the title';
        const description = 'this is the description';
        const href = 'https://google.com';

        render(
            <ResourcesRow title={title} description={description} href={href} />
        );

        expect(screen.getByText(title)).toBeTruthy();
        expect(screen.getByText(description)).toBeTruthy();
        expect(screen.getByRole('link', { name: 'Open' })).toBeTruthy();
    });
});
