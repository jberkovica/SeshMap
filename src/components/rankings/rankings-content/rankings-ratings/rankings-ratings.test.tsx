import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CourseId, courseInfoMap, level4CourseIds } from '@/consts/course';
import { RankingsRatings } from './rankings-ratings';

describe('RankingsRatings', () => {
    test('renders all the table headers correctly', () => {
        render(<RankingsRatings courseIds={[CourseId.ITP1]} />);
        expect(screen.getByText('Module Name')).toBeDefined();
        expect(screen.getByText('Difficulty')).toBeDefined();
        expect(screen.getByText('Time')).toBeDefined();
        expect(screen.getByText('Quality')).toBeDefined();
        expect(screen.getByText('Self-Study')).toBeDefined();
        expect(screen.getByText('Learning')).toBeDefined();
        expect(screen.getByText('Interest')).toBeDefined();
        expect(screen.getByText('Total')).toBeDefined();
    });

    test('renders a the rows correctly', () => {
        render(<RankingsRatings courseIds={level4CourseIds} />);
        expect(
            screen.getByText(courseInfoMap[CourseId.ITP1].name)
        ).toBeDefined();
        expect(
            screen.getByText(courseInfoMap[CourseId.HCW].name)
        ).toBeDefined();
        expect(screen.getByText(courseInfoMap[CourseId.WD].name)).toBeDefined();
        expect(
            screen.getByText(courseInfoMap[CourseId.ADS1].name)
        ).toBeDefined();
        expect(
            screen.getByText(courseInfoMap[CourseId.ITP2].name)
        ).toBeDefined();
        expect(screen.getByText(courseInfoMap[CourseId.CM].name)).toBeDefined();
        expect(
            screen.getByText(courseInfoMap[CourseId.FCS].name)
        ).toBeDefined();
        expect(screen.getByText(courseInfoMap[CourseId.DM].name)).toBeDefined();
    });

    test('able to sort by module name', () => {
        render(<RankingsRatings courseIds={level4CourseIds} />);
        fireEvent.click(screen.getByLabelText('Sort by module name'));
        const moduleNameEls = screen.getAllByTestId('TdBold');

        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );

        // desc
        fireEvent.click(screen.getByLabelText('Sort by module name'));
        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
    });

    test('able to sort by difficulty', () => {
        render(<RankingsRatings courseIds={level4CourseIds} />);
        fireEvent.click(screen.getByLabelText('Sort by difficulty'));
        const moduleNameEls = screen.getAllByTestId('TdBold');

        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );

        // desc
        fireEvent.click(screen.getByLabelText('Sort by difficulty'));
        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
    });

    test('able to sort by time', () => {
        render(<RankingsRatings courseIds={level4CourseIds} />);
        fireEvent.click(screen.getByLabelText('Sort by time'));
        const moduleNameEls = screen.getAllByTestId('TdBold');

        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );

        // desc
        fireEvent.click(screen.getByLabelText('Sort by time'));
        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
    });

    test('able to sort by quality', () => {
        render(<RankingsRatings courseIds={level4CourseIds} />);
        fireEvent.click(screen.getByLabelText('Sort by quality'));
        const moduleNameEls = screen.getAllByTestId('TdBold');

        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );

        // desc
        fireEvent.click(screen.getByLabelText('Sort by quality'));
        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
    });

    test('able to sort by self-study', () => {
        render(<RankingsRatings courseIds={level4CourseIds} />);
        fireEvent.click(screen.getByLabelText('Sort by self-study'));
        const moduleNameEls = screen.getAllByTestId('TdBold');

        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );

        // desc
        fireEvent.click(screen.getByLabelText('Sort by self-study'));
        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
    });

    test('able to sort by learning', () => {
        render(<RankingsRatings courseIds={level4CourseIds} />);
        fireEvent.click(screen.getByLabelText('Sort by learning'));
        const moduleNameEls = screen.getAllByTestId('TdBold');

        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );

        // desc
        fireEvent.click(screen.getByLabelText('Sort by learning'));
        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
    });

    test('able to sort by interest', () => {
        render(<RankingsRatings courseIds={level4CourseIds} />);
        fireEvent.click(screen.getByLabelText('Sort by interest'));
        const moduleNameEls = screen.getAllByTestId('TdBold');

        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );

        // desc
        fireEvent.click(screen.getByLabelText('Sort by interest'));
        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
    });

    test('able to sort by total', () => {
        render(<RankingsRatings courseIds={level4CourseIds} />);
        fireEvent.click(screen.getByLabelText('Sort by total'));
        const moduleNameEls = screen.getAllByTestId('TdBold');

        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );

        // desc
        fireEvent.click(screen.getByLabelText('Sort by total'));
        expect(moduleNameEls[0].textContent).toBe(
            courseInfoMap[CourseId.WD].name
        );
        expect(moduleNameEls[1].textContent).toBe(
            courseInfoMap[CourseId.CM].name
        );
        expect(moduleNameEls[2].textContent).toBe(
            courseInfoMap[CourseId.DM].name
        );
        expect(moduleNameEls[3].textContent).toBe(
            courseInfoMap[CourseId.FCS].name
        );
        expect(moduleNameEls[4].textContent).toBe(
            courseInfoMap[CourseId.ITP2].name
        );
        expect(moduleNameEls[5].textContent).toBe(
            courseInfoMap[CourseId.ADS1].name
        );
        expect(moduleNameEls[6].textContent).toBe(
            courseInfoMap[CourseId.ITP1].name
        );
        expect(moduleNameEls[7].textContent).toBe(
            courseInfoMap[CourseId.HCW].name
        );
    });
});
