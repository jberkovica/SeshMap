import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CourseId } from '@/consts/course';
import { ResourcesContentContainer } from './resources-content-container';

describe('ResourcesContentContainer', () => {
    test('renders component', () => {
        render(<ResourcesContentContainer courseId="" />);
        expect(screen.getByTestId('ResourcesContentContainer')).toBeDefined();
    });

    test('renders ResourcesContent if courseId is not empty', () => {
        render(<ResourcesContentContainer courseId={CourseId.ASP} />);
        expect(screen.getByTestId('ResourcesContent')).toBeDefined();
    });

    test('does not render ResourcesContent if courseId is empty', () => {
        render(<ResourcesContentContainer courseId="" />);
        expect(screen.queryByTestId('ResourcesContent')).toBeNull();
    });
});
