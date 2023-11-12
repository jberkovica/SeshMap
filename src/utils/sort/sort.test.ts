import { describe, expect, test } from 'vitest';
import {
    sortObjectsByPropertyNumber,
    sortObjectsByPropertyNumberAsc,
    sortObjectsByPropertyNumberDesc,
    sortObjectsByPropertyString,
    sortObjectsByPropertyStringAsc,
    sortObjectsByPropertyStringDesc,
} from '@/utils/sort/sort';

describe('sort', () => {
    describe('sortObjectsByPropertyString', () => {
        test('sorts ascending correctly', () => {
            const array = [
                { property: 'c' },
                { property: 'd' },
                { property: 'a' },
                { property: 'b' },
                { property: 'e' },
            ];
            const result = array.sort(
                sortObjectsByPropertyString('property', true)
            );
            expect(result).toEqual([
                { property: 'a' },
                { property: 'b' },
                { property: 'c' },
                { property: 'd' },
                { property: 'e' },
            ]);
        });

        test('sorts descending correctly', () => {
            const array = [
                { property: 'c' },
                { property: 'd' },
                { property: 'a' },
                { property: 'b' },
                { property: 'e' },
            ];
            const result = array.sort(
                sortObjectsByPropertyString('property', false)
            );
            expect(result).toEqual([
                { property: 'e' },
                { property: 'd' },
                { property: 'c' },
                { property: 'b' },
                { property: 'a' },
            ]);
        });

        test('sorts correctly with same string as the property values', () => {
            const array = [
                { property: 'c' },
                { property: 'd' },
                { property: 'a' },
                { property: 'b' },
                { property: 'b' },
            ];
            const result = array.sort(
                sortObjectsByPropertyString('property', true)
            );
            expect(result).toEqual([
                { property: 'a' },
                { property: 'b' },
                { property: 'b' },
                { property: 'c' },
                { property: 'd' },
            ]);
        });

        test('sortObjectsByPropertyStringAsc sorts correctly', () => {
            const array = [
                { property: 'c' },
                { property: 'd' },
                { property: 'a' },
                { property: 'b' },
                { property: 'e' },
            ];
            const result = array.sort(
                sortObjectsByPropertyStringAsc('property')
            );
            expect(result).toEqual([
                { property: 'a' },
                { property: 'b' },
                { property: 'c' },
                { property: 'd' },
                { property: 'e' },
            ]);
        });

        test('sortObjectsByPropertyStringDesc sorts correctly', () => {
            const array = [
                { property: 'c' },
                { property: 'd' },
                { property: 'a' },
                { property: 'b' },
                { property: 'e' },
            ];
            const result = array.sort(
                sortObjectsByPropertyStringDesc('property')
            );
            expect(result).toEqual([
                { property: 'e' },
                { property: 'd' },
                { property: 'c' },
                { property: 'b' },
                { property: 'a' },
            ]);
        });
    });

    describe('sortObjectsByPropertyNumber', () => {
        test('sorts ascending correctly', () => {
            const array = [
                { property: 3 },
                { property: 4 },
                { property: 1 },
                { property: 2 },
                { property: 5 },
            ];
            const result = array.sort(
                sortObjectsByPropertyNumber('property', true)
            );
            expect(result).toEqual([
                { property: 1 },
                { property: 2 },
                { property: 3 },
                { property: 4 },
                { property: 5 },
            ]);
        });

        test('sorts descending correctly', () => {
            const array = [
                { property: 3 },
                { property: 4 },
                { property: 1 },
                { property: 2 },
                { property: 5 },
            ];
            const result = array.sort(
                sortObjectsByPropertyNumber('property', false)
            );
            expect(result).toEqual([
                { property: 5 },
                { property: 4 },
                { property: 3 },
                { property: 2 },
                { property: 1 },
            ]);
        });

        test('sorts correctly with same number as the property values', () => {
            const array = [
                { property: 3 },
                { property: 4 },
                { property: 1 },
                { property: 2 },
                { property: 2 },
            ];
            const result = array.sort(
                sortObjectsByPropertyNumber('property', true)
            );
            expect(result).toEqual([
                { property: 1 },
                { property: 2 },
                { property: 2 },
                { property: 3 },
                { property: 4 },
            ]);
        });

        test('sortObjectsByPropertyNumberAsc sorts correctly', () => {
            const array = [
                { property: 3 },
                { property: 4 },
                { property: 1 },
                { property: 2 },
                { property: 5 },
            ];
            const result = array.sort(
                sortObjectsByPropertyNumberAsc('property')
            );
            expect(result).toEqual([
                { property: 1 },
                { property: 2 },
                { property: 3 },
                { property: 4 },
                { property: 5 },
            ]);
        });

        test('sortObjectsByPropertyNumberDesc sorts correctly', () => {
            const array = [
                { property: 3 },
                { property: 4 },
                { property: 1 },
                { property: 2 },
                { property: 5 },
            ];
            const result = array.sort(
                sortObjectsByPropertyNumberDesc('property')
            );
            expect(result).toEqual([
                { property: 5 },
                { property: 4 },
                { property: 3 },
                { property: 2 },
                { property: 1 },
            ]);
        });
    });
});
