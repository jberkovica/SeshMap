import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Th } from './th';
import { TableColumnAlign } from '../types';

describe('Th', () => {
    test('renders passed title', () => {
        render(
            <table>
                <thead>
                    <tr>
                        <Th
                            column="Title"
                            columnProps={{ title: 'This is the Title' }}
                            sortState={null}
                            setSortState={vi.fn()}
                        />
                    </tr>
                </thead>
            </table>
        );
        expect(screen.getByText('This is the Title')).toBeDefined();
    });

    describe('Th > ThWithSort', () => {
        test('renders ThWithSort when sort is defined in columnProps', () => {
            render(
                <table>
                    <thead>
                        <tr>
                            <Th
                                column="Title"
                                columnProps={{
                                    sort: { asc: vi.fn(), desc: vi.fn() },
                                    title: 'This is the Title',
                                }}
                                sortState={null}
                                setSortState={vi.fn()}
                            />
                        </tr>
                    </thead>
                </table>
            );
            expect(screen.getByTestId('ThWithSort')).toBeDefined();
            expect(screen.queryByTestId('ThReadOnly')).toBeNull();
            expect(screen.queryByTestId('ThWithoutSort')).toBeNull();
        });

        test('renders ThWithSort with correct align', () => {
            render(
                <table>
                    <thead>
                        <tr>
                            <Th
                                column="Title"
                                columnProps={{
                                    align: TableColumnAlign.right,
                                    sort: { asc: vi.fn(), desc: vi.fn() },
                                    title: 'This is the Title',
                                }}
                                sortState={null}
                                setSortState={vi.fn()}
                            />
                        </tr>
                    </thead>
                </table>
            );
            expect(screen.getByTestId('ThWithSort').className).include(
                'text-right'
            );
        });

        test('calls setSortState correctly when button is clicked when column didnt dictate sort', () => {
            const asc = vi.fn();
            const desc = vi.fn();
            const setSortState = vi.fn();

            render(
                <table>
                    <thead>
                        <tr>
                            <Th
                                column={'Title' as string}
                                columnProps={{
                                    align: TableColumnAlign.right,
                                    sort: { asc, desc },
                                    title: 'Title',
                                }}
                                sortState={{
                                    column: 'Some Other Column',
                                    isDesc: true,
                                    sort: { asc: vi.fn(), desc: vi.fn() },
                                }}
                                setSortState={setSortState}
                            />
                        </tr>
                    </thead>
                </table>
            );
            expect(setSortState).not.toHaveBeenCalled();
            fireEvent.click(screen.getByLabelText('Sort by title'));
            expect(setSortState).toHaveBeenCalledWith(
                expect.objectContaining({
                    column: 'Title',
                    isDesc: false,
                    sort: expect.objectContaining({ asc, desc }),
                })
            );
        });

        test('calls setSortState correctly when button is clicked when column dictated sort and !isDesc', () => {
            const asc = vi.fn();
            const desc = vi.fn();
            const setSortState = vi.fn();

            render(
                <table>
                    <thead>
                        <tr>
                            <Th
                                column={'Title' as string}
                                columnProps={{
                                    align: TableColumnAlign.right,
                                    sort: { asc, desc },
                                    title: 'Title',
                                }}
                                sortState={{
                                    column: 'Title',
                                    isDesc: false,
                                    sort: { asc: vi.fn(), desc: vi.fn() },
                                }}
                                setSortState={setSortState}
                            />
                        </tr>
                    </thead>
                </table>
            );
            expect(setSortState).not.toHaveBeenCalled();
            fireEvent.click(screen.getByLabelText('Sort by title'));
            expect(setSortState).toHaveBeenCalledWith(
                expect.objectContaining({
                    column: 'Title',
                    isDesc: true,
                    sort: expect.objectContaining({ asc, desc }),
                })
            );
        });

        test('calls setSortState correctly when button is clicked when column dictated sort and isDesc', () => {
            const asc = vi.fn();
            const desc = vi.fn();
            const setSortState = vi.fn();

            render(
                <table>
                    <thead>
                        <tr>
                            <Th
                                column={'Title' as string}
                                columnProps={{
                                    align: TableColumnAlign.right,
                                    sort: { asc, desc },
                                    title: 'Title',
                                }}
                                sortState={{
                                    column: 'Title',
                                    isDesc: true,
                                    sort: { asc: vi.fn(), desc: vi.fn() },
                                }}
                                setSortState={setSortState}
                            />
                        </tr>
                    </thead>
                </table>
            );
            expect(setSortState).not.toHaveBeenCalled();
            fireEvent.click(screen.getByLabelText('Sort by title'));
            expect(setSortState).toHaveBeenCalledWith(
                expect.objectContaining({
                    column: 'Title',
                    isDesc: false,
                    sort: expect.objectContaining({ asc, desc }),
                })
            );
        });
    });

    describe('Th > ThReadOnly', () => {
        test('renders ThReadOnly when readOnly is true in columnProps and sort is not in props', () => {
            render(
                <table>
                    <thead>
                        <tr>
                            <Th
                                column="Title"
                                columnProps={{
                                    title: 'This is the Title',
                                    readOnly: true,
                                }}
                                sortState={null}
                                setSortState={vi.fn()}
                            />
                        </tr>
                    </thead>
                </table>
            );
            expect(screen.getByTestId('ThReadOnly')).toBeDefined();
            expect(screen.queryByTestId('ThWithSort')).toBeNull();
            expect(screen.queryByTestId('ThWithoutSort')).toBeNull();
        });

        test('renders ThReadOnly with correct align', () => {
            render(
                <table>
                    <thead>
                        <tr>
                            <Th
                                column="Title"
                                columnProps={{
                                    align: TableColumnAlign.right,
                                    title: 'This is the Title',
                                    readOnly: true,
                                }}
                                sortState={null}
                                setSortState={vi.fn()}
                            />
                        </tr>
                    </thead>
                </table>
            );
            expect(screen.getByTestId('ThReadOnly').className).include(
                'text-right'
            );
        });
    });

    describe('Th > ThWithoutSort', () => {
        test('renders ThWithoutSort when readOnly is false in columnProps and sort is not in props', () => {
            render(
                <table>
                    <thead>
                        <tr>
                            <Th
                                column="Title"
                                columnProps={{
                                    title: 'This is the Title',
                                }}
                                sortState={null}
                                setSortState={vi.fn()}
                            />
                        </tr>
                    </thead>
                </table>
            );
            expect(screen.getByTestId('ThWithoutSort')).toBeDefined();
            expect(screen.queryByTestId('ThReadOnly')).toBeNull();
            expect(screen.queryByTestId('ThWithSort')).toBeNull();
        });

        test('renders ThWithoutSort with correct align', () => {
            render(
                <table>
                    <thead>
                        <tr>
                            <Th
                                column="Title"
                                columnProps={{
                                    align: TableColumnAlign.right,
                                    title: 'This is the Title',
                                }}
                                sortState={null}
                                setSortState={vi.fn()}
                            />
                        </tr>
                    </thead>
                </table>
            );
            expect(screen.getByTestId('ThWithoutSort').className).include(
                'text-right'
            );
        });
    });
});
