import { studentResult } from './05-09-main';

// trong unit test bên dưới có sử dụng 3 cách expect khác nhau. phụ hợp các trường hợp
describe('studentResult()', () => {
    test('should return Invalid mark! when n < 0', () => {
        const value = studentResult(-1);
        expect(value).toBe('Invalid mark!');
    });
    test('should return Invalid mark! when n > 10', () => {
        const value = studentResult(11);
        expect(value).toBe('Invalid mark!');
    });
    test('should return Excellence when n > 8', () => {
        expect(studentResult(9)).toBe('Excellence');
        expect(studentResult(10)).toBe('Excellence');
    });
    test('should return Good when [7,8]', () => {
        expect(studentResult(7)).toBe('Good');
        expect(studentResult(8)).toBe('Good');
    });
    test('should return Not Good when n [4,5,6]', () => {
        [4, 5, 6].forEach(n => {
            expect(studentResult(n)).toBe('Not Good');
        })
    });
    test('should return Bad when n [0,1,2,3]', () => {
        [0, 1, 2, 3].forEach(n => {
            expect(studentResult(n)).toBe('Bad');
        })
    });
});