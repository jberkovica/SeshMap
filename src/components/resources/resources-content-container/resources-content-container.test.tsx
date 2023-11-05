import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CourseId } from '@/consts/course';
import { ResourcesContentContainer } from './resources-content-container';

describe('ResourcesContentContainer', () => {
    test('renders component', () => {
        render(<ResourcesContentContainer courseId="" />);
        expect(screen.getByTestId('ResourcesContentContainer')).toBeTruthy();
    });

    test('renders ResourcesContent if courseId is not empty', () => {
        render(<ResourcesContentContainer courseId={CourseId.ASP} />);
        expect(screen.getByTestId('ResourcesContent')).toBeTruthy();
    });

    test('does not render ResourcesContent if courseId is empty', () => {
        render(<ResourcesContentContainer courseId="" />);
        expect(screen.queryByTestId('ResourcesContent')).toBeFalsy();
    });
});
