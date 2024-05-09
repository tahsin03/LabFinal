const { isPalindrome } = require("../src/isPalindrome");

describe('isPalindrome', () => {
  it('should return true for palindromic numbers', () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(1221)).toBe(true);
    expect(isPalindrome(12321)).toBe(true);
  });

  it('should return false for non-palindromic numbers', () => {
    expect(isPalindrome(123)).toBe(false);
    expect(isPalindrome(1234)).toBe(false);
    expect(isPalindrome(12345)).toBe(false);
  });

  it('should return true for single-digit numbers', () => {
    expect(isPalindrome(0)).toBe(true);
    expect(isPalindrome(5)).toBe(true);
    expect(isPalindrome(9)).toBe(true);
  });

  it('should handle negative numbers correctly', () => {
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindrome(-12321)).toBe(false);
    expect(isPalindrome(-1221)).toBe(false);
  });

  it('should return true for numbers with leading zeros', () => {
    expect(isPalindrome(1001)).toBe(true);
    expect(isPalindrome(2002)).toBe(true);
    expect(isPalindrome(30003)).toBe(true);
  });

  it('should return true for numbers ending with zeros', () => {
    expect(isPalindrome(1010)).toBe(false);
    expect(isPalindrome(20020)).toBe(false);
    expect(isPalindrome(300300)).toBe(false);
  });
});
