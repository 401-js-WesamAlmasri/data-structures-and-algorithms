const binarySearch = require('../arrayBinarySearch/binarySearch');

describe('binarySearch', () => {
    it('should return the index of the searched key', () => {
        expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toBe(2);
        expect(binarySearch([-131, -82, 0, 27, 42, 68, 179], 42)).toBe(4);
    })

    it('should return -1 if the key not found', () => {
        expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toBe(-1);
        expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toBe(-1);
    })
})