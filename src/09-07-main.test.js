// viết unit test

import { checkIfAllEven } from './09-07-main';

describe('checkIfAllEven()', () => {
    test('should return False when is not array', () => {
        expect(checkIfAllEven(1)).toBe(false);
        expect(checkIfAllEven('')).toBe(false);
        expect(checkIfAllEven({})).toBe(false);
        expect(checkIfAllEven(null)).toBe(false);
        expect(checkIfAllEven(undefined)).toBe(false);
    });
    test('should return False when array is empty', () => {
        expect(checkIfAllEven([])).toBe(false);
    });
    test('should return False when array is not even', () => {

        expect(checkIfAllEven([3, 5, 7])).toBe(false);
    });
    test('should return False when a number is not even', () => {
        expect(checkIfAllEven([3, 4, 7])).toBe(false);
    });
    test('should return True when all number on array is Even', () => {
        expect(checkIfAllEven([2, 4, 6])).toBe(true);
    });
});
