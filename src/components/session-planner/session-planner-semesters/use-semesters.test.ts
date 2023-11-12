import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import {
    filterValidSemesters,
    getEmptySemester,
    getInitialSemesters,
    SEMESTERS_KEY,
    useSemesters,
} from '@/components/session-planner/session-planner-semesters/use-semesters';
import { CourseId } from '@/consts/course';
import { SemesterState } from './types';

describe('useSemesters', () => {
    describe('useSemesters', () => {
        const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
        const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

        afterEach(() => {
            getItemSpy.mockClear();
            setItemSpy.mockClear();
            localStorage.clear();
        });

        test('returns one empty semester when localStorage is null', () => {
            const { result } = renderHook(() => useSemesters());
            expect(getItemSpy).toHaveBeenCalledWith(SEMESTERS_KEY);
            expect(result.current.semesters).toHaveLength(1);
            expect(result.current.semesters[0]).toEqual(getEmptySemester());
        });

        test('if localStorage is null, saves an empty semester onto it', () => {
            renderHook(() => useSemesters());
            expect(setItemSpy).toHaveBeenCalledWith(
                SEMESTERS_KEY,
                JSON.stringify([getEmptySemester()])
            );
        });

        test('Calling addNewSemesters adds a new empty semester and saves it', () => {
            const { result } = renderHook(() => useSemesters());
            expect(result.current.semesters).toHaveLength(1);
            act(() => result.current.addNewSemester());
            expect(result.current.semesters).toHaveLength(2);
            expect(result.current.semesters[1]).toEqual(getEmptySemester());
            expect(setItemSpy).toHaveBeenLastCalledWith(
                SEMESTERS_KEY,
                JSON.stringify([getEmptySemester(), getEmptySemester()])
            );
        });

        test('removeSemester within range removes the semester and saves it', () => {
            const { result } = renderHook(() => useSemesters());
            expect(result.current.semesters).toHaveLength(1);
            act(() => result.current.removeSemester(0));
            expect(result.current.semesters).toHaveLength(0);
            expect(setItemSpy).toHaveBeenLastCalledWith(
                SEMESTERS_KEY,
                JSON.stringify([])
            );
        });

        test('removeSemester outside range does nothing', () => {
            const { result } = renderHook(() => useSemesters());
            expect(result.current.semesters).toHaveLength(1);
            act(() => result.current.removeSemester(1));
            expect(result.current.semesters).toHaveLength(1);
            expect(setItemSpy).not.toHaveBeenLastCalledWith(
                SEMESTERS_KEY,
                JSON.stringify([])
            );
        });

        test('setSemesters sets semesters correctly', () => {
            const { result } = renderHook(() => useSemesters());

            const semesters: SemesterState[] = [
                [CourseId.ITP1, CourseId.DM, CourseId.CM, CourseId.FCS],
                [CourseId.ITP2, CourseId.ADS1, CourseId.WD, ''],
                [CourseId.SDD, CourseId.ASP, '', ''],
            ];

            act(() => result.current.setSemesters(semesters));
            expect(result.current.semesters).toHaveLength(3);
            expect(setItemSpy).toHaveBeenLastCalledWith(
                SEMESTERS_KEY,
                JSON.stringify(semesters)
            );
        });

        test('updating a course in semester within bound works correctly', () => {
            const { result } = renderHook(() => useSemesters());

            const semesters: SemesterState[] = [
                [CourseId.ITP1, CourseId.DM, CourseId.CM, CourseId.FCS],
                [CourseId.ITP2, CourseId.ADS1, CourseId.WD, ''],
                [CourseId.SDD, CourseId.ASP, '', ''],
            ];

            act(() => result.current.setSemesters(semesters));

            // testing all three semesters to ensure slice is working correctly

            act(() =>
                result.current.changeCourseInSemester(0, 0, CourseId.HCW)
            );
            expect(setItemSpy).toHaveBeenLastCalledWith(
                SEMESTERS_KEY,
                JSON.stringify([
                    [CourseId.HCW, CourseId.DM, CourseId.CM, CourseId.FCS],
                    [CourseId.ITP2, CourseId.ADS1, CourseId.WD, ''],
                    [CourseId.SDD, CourseId.ASP, '', ''],
                ])
            );

            act(() =>
                result.current.changeCourseInSemester(1, 3, CourseId.OOP)
            );
            expect(setItemSpy).toHaveBeenLastCalledWith(
                SEMESTERS_KEY,
                JSON.stringify([
                    [CourseId.HCW, CourseId.DM, CourseId.CM, CourseId.FCS],
                    [CourseId.ITP2, CourseId.ADS1, CourseId.WD, CourseId.OOP],
                    [CourseId.SDD, CourseId.ASP, '', ''],
                ])
            );

            act(() =>
                result.current.changeCourseInSemester(2, 2, CourseId.CSec)
            );
            expect(setItemSpy).toHaveBeenLastCalledWith(
                SEMESTERS_KEY,
                JSON.stringify([
                    [CourseId.HCW, CourseId.DM, CourseId.CM, CourseId.FCS],
                    [CourseId.ITP2, CourseId.ADS1, CourseId.WD, CourseId.OOP],
                    [CourseId.SDD, CourseId.ASP, CourseId.CSec, ''],
                ])
            );
        });

        test('updating a course out of bounds does nothing', () => {
            const { result } = renderHook(() => useSemesters());

            expect(setItemSpy).toHaveBeenCalledOnce();
            act(() =>
                result.current.changeCourseInSemester(1, 0, CourseId.HCW)
            );
            expect(setItemSpy).toHaveBeenCalledOnce();
            act(() =>
                result.current.changeCourseInSemester(0, 4, CourseId.HCW)
            );
            expect(setItemSpy).toHaveBeenCalledOnce();
        });
    });

    describe('getInitialSemesters', () => {
        test('returns one empty semester if arg is null', () => {
            const result = getInitialSemesters(null);
            expect(result).toEqual([getEmptySemester()]);
        });

        test('returns one empty semester if arg is not an array', () => {
            const result = getInitialSemesters(
                JSON.stringify({ course: 'id' })
            );
            expect(result).toEqual([getEmptySemester()]);
        });

        test('returns all the valid semesters', () => {
            const result = getInitialSemesters(
                JSON.stringify([
                    [CourseId.ADS1, CourseId.ADS2, CourseId.AI, CourseId.DADT],
                    [CourseId.DM, CourseId.FP, CourseId.CSec, ''],
                    ['', '', '', ''],
                    'wrong',
                    [CourseId.CM],
                ])
            );
            expect(result).toHaveLength(3);
        });
    });

    describe('filterValidSemesters', () => {
        test('filters out invalid ones', () => {
            const semesters = [true, 'semester', { semester: ['id'] }];
            const result = filterValidSemesters(semesters);
            expect(result).toHaveLength(0);
        });

        test('filters out semesters of wrong length', () => {
            const semesters = [
                [CourseId.ADS2, CourseId.ADS1, CourseId.AI],
                [
                    CourseId.AWD,
                    CourseId.CM,
                    CourseId.DADT,
                    CourseId.CSec,
                    CourseId.FP,
                ],
            ];
            const result = filterValidSemesters(semesters);
            expect(result).toHaveLength(0);
        });

        test('filters out semesters with invalid courses', () => {
            const semesters = [
                ['wrong-semester', CourseId.ADS2, CourseId.ADS1, CourseId.AWD],
            ];
            const result = filterValidSemesters(semesters);
            expect(result).toHaveLength(0);
        });

        test('filters in valid semesters', () => {
            const semesters = [
                [CourseId.ADS1, CourseId.ADS2, CourseId.AI, CourseId.DADT],
                [CourseId.DM, CourseId.FP, CourseId.CSec, ''],
                ['', '', '', ''],
            ];
            const result = filterValidSemesters(semesters);
            expect(result).toHaveLength(3);
        });
    });

    describe('getEmptySemester', () => {
        test('returns valid empty semester', () => {
            expect(getEmptySemester()).toEqual(['', '', '', '']);
        });
    });
});
