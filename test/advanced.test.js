const advancedCalculator = require("../src/advanced");

describe('Pow', () => {
    test('returns correct result for positive exponent', () => {
        expect(advancedCalculator.pow(2, 3)).toBe(8);
    });

    test('returns correct result for zero exponent', () => {
        expect(advancedCalculator.pow(5, 0)).toBe(1);
    });

    
});

describe('Modulo', () => {
    test('returns correct result for positive numbers', () => {
        expect(advancedCalculator.modulo(5, 2)).toBe(1);
    });

    test('returns correct result for negative numbers', () => {
        expect(advancedCalculator.modulo(-17, -35)).toBe(-17);
    });

    
});

describe('Selection Sort', () => {
    test('sorts an array in ascending order', () => {
        const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
        const sortedArray = [1, 1, 2, 3, 4, 5, 5, 6, 9];
        expect(advancedCalculator.selectionSort(inputArray)).toEqual(sortedArray);
    });

    test('returns an empty array if input array is empty', () => {
        const inputArray = [];
        const sortedArray = [];
        expect(advancedCalculator.selectionSort(inputArray)).toEqual(sortedArray);
    });


});

describe('Insertion Sort', () => {
    test('sorts an array in ascending order', () => {
        const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
        const sortedArray = [1, 1, 2, 3, 4, 5, 5, 6, 9];
        expect(advancedCalculator.insertionSort(inputArray)).toEqual(sortedArray);
    });

    test('returns an empty array if input array is empty', () => {
        const inputArray = [];
        const sortedArray = [];
        expect(advancedCalculator.insertionSort(inputArray)).toEqual(sortedArray);
    });

});



