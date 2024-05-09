const calculator = require("../src/basic");

describe('Add', () =>{
    var BVAdataAdd = [
        [1,2,3],
        [4,5,9],
        [3,12,15],
        [4,6,10]
    ]

    describe.each(BVAdataAdd)('BVA: add(%i,%i), Expected: %i', (a,b,expected)=>{
        test(`returns ${calculator.add(a,b)}`, () => {
            expect(calculator.add(a,b)).toBe(expected);
        });
    });

    var DTdataAdd = [
        [0,89,89],
        [-17,-35,-52],
        [65,-12,53],
        [-78,24,-54]
    ]

    describe.each(DTdataAdd)('DT: add(%i, %i), Expected: %i', (a,b,expected) => {
        test(`returns ${calculator.add(a,b)}`,() => {
            expect(calculator.add(a,b)).toBe(expected);
        });
    });

});

describe('Subtract', () =>{
    var BVAdataSubtract = [
        [3, 2, 1],
        [9, 5, 4],
        [15, 12, 3],
        [10, 6, 4]
    ];

    describe.each(BVAdataSubtract)('BVA: subtract(%i, %i), Expected: %i', (a,b,expected)=>{
        test(`returns ${calculator.subtract(a,b)}`, () => {
            expect(calculator.subtract(a,b)).toBe(expected);
        });
    });

    var DTdataSubtract = [
        [89, 0, 89],
        [-17, -35, 18],
        [65, -12, 77],
        [-78, 24, -102]
    ];

    describe.each(DTdataSubtract)('DT: subtract(%i, %i), Expected: %i', (a,b,expected) => {
        test(`returns ${calculator.subtract(a,b)}`,() => {
            expect(calculator.subtract(a,b)).toBe(expected);
        });
    });
});

describe('Multiply', () =>{
    var BVAdataMultiply = [
        [1, 2, 2],
        [4, 5, 20],
        [3, 12, 36],
        [4, 6, 24]
    ];

    describe.each(BVAdataMultiply)('BVA: multiply(%i, %i), Expected: %i', (a,b,expected)=>{
        test(`returns ${calculator.multiply(a,b)}`, () => {
            expect(calculator.multiply(a,b)).toBe(expected);
        });
    });

    var DTdataMultiply = [
        [0, 89, 0],
        [-17, -35, 595],
        [65, -12, -780],
        [-78, 24, -1872]
    ];

    describe.each(DTdataMultiply)('DT: multiply(%i, %i), Expected: %i', (a,b,expected) => {
        test(`returns ${calculator.multiply(a,b)}`,() => {
            expect(calculator.multiply(a,b)).toBe(expected);
        });
    });
});

describe('Divide', () =>{
    var BVAdataDivide = [
        [2, 1, 2],
        [20, 5, 4],
        [36, 12, 3],
        [24, 6, 4]
    ];

    describe.each(BVAdataDivide)('BVA: divide(%i, %i), Expected: %i', (a,b,expected)=>{
        test(`returns ${calculator.divide(a,b)}`, () => {
            expect(calculator.divide(a,b)).toBe(expected);
        });
    });

    var DTdataDivide = [
        [89, 1, 89],
        [-17, -35, 0.4857142857142857],
        [65, -12, -5.416666666666667],
        [-78, 24, -3.25]
    ];

    describe.each(DTdataDivide)('DT: divide(%i, %i), Expected: %i', (a,b,expected) => {
        test(`returns ${calculator.divide(a,b)}`,() => {
            expect(calculator.divide(a,b)).toBe(expected);
        });
    });
});
