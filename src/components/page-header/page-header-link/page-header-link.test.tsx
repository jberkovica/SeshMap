import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Route } from '@/consts/routing';
import { PageHeaderLink } from './page-header-link';

describe('PageHeaderLink', () => {
    test('renders a link', () => {
        render(
            <PageHeaderLink href={Route.sessionPlanner}>
                Click here
            </PageHeaderLink>
        );
        expect(screen.getByText('Click here')).toBeTruthy();
    });
});
