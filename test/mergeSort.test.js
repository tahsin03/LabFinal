const { mergeSort } = require("../src/mergeSort");

describe('mergeSort', () => {
  it('should correctly sort an array', () => {
    expect(mergeSort([3, 5, 8, 5, 99, 1])).toEqual([1, 3, 5, 5, 8, 99]);
    expect(mergeSort([9, 3, 5, 1, 8, 2, 7])).toEqual([1, 2, 3, 5, 7, 8, 9]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array when input is empty', () => {
    expect(mergeSort([])).toEqual([]);
  });

  it('should return the input array if it has only one element', () => {
    expect(mergeSort([42])).toEqual([42]);
  });

  it('should correctly sort negative numbers', () => {
    expect(mergeSort([-3, -5, -1, -8])).toEqual([-8, -5, -3, -1]);
  });

  it('should handle duplicate elements correctly', () => {
    expect(mergeSort([5, 5, 3, 3, 2, 2, 1, 1])).toEqual([1, 1, 2, 2, 3, 3, 5, 5]);
  });

  it('should handle large arrays', () => {
    const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    const sortedArray = largeArray.slice().sort((a, b) => a - b);
    expect(mergeSort(largeArray)).toEqual(sortedArray);
  });
});
