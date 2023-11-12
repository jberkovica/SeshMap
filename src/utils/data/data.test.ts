import { describe, expect, test } from 'vitest';
import { getPercentage } from '@/utils/data/data';

describe('data', () => {
    describe('getPercentage', () => {
        test('gets correct percentage number', () => {
            const result = getPercentage(4, 10);
            expect(result).toBe(40);
        });
    });
});
