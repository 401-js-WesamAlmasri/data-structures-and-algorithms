const insertShiftArray = require('../arrayShift/arrayShift');

describe('insertShiftArray', () => {
    it('should insert 5 at the mid array', () => {
        expect(insertShiftArray([2, 4, 6, -8], 5)).toEqual([2, 4, 5, 6, -8]);
    })

    it('should insert 5 at the mid array', () => {
        expect(insertShiftArray([24, 8, 15, 23, 42, 16], 16)).toEqual([24, 8, 15, 16, 23, 42, 16]);
    })

    it('should return -1 if the send not an array', () => {
        expect(insertShiftArray(5, 16)).toBe(-1);
    })
})