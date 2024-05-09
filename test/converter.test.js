const { WeightConverter } = require("../src/converter");

describe('WeightConverter', () => {
  it('should convert ounces to pounds and tons', () => {
    expect(WeightConverter('ounces', 16)).toEqual(['1.00 pounds', '0.00 tons']);
    expect(WeightConverter('ounces', 32)).toEqual(['2.00 pounds', '0.00 tons']);
  });

  it('should convert pounds to ounces and tons', () => {
    expect(WeightConverter('pounds', 2)).toEqual(['32.00 ounces', '0.00 tons']);
    expect(WeightConverter('pounds', 5)).toEqual(['80.00 ounces', '0.00 tons']);
  });

  it('should convert tons to pounds and ounces', () => {
    expect(WeightConverter('tons', 1)).toEqual(['2000.00 pounds', '32000.00 ounces']);
    expect(WeightConverter('tons', 2.5)).toEqual(['5000.00 pounds', '80000.00 ounces']);
  });

  it('should return "wrong input" for unknown measurement', () => {
    expect(WeightConverter('kilograms', 1)).toBe('wrong input');
    expect(WeightConverter('grams', 1000)).toBe('wrong input');
  });

  it('should handle decimal values correctly', () => {
    expect(WeightConverter('ounces', 0.5)).toEqual(['0.03 pounds', '0.00 tons']);
    expect(WeightConverter('pounds', 0.25)).toEqual(['4.00 ounces', '0.00 tons']);
    expect(WeightConverter('tons', 0.75)).toEqual(['1500.00 pounds', '24000.00 ounces']);
  });

  it('should return 0 ounces and 0 tons for 0 input value', () => {
    expect(WeightConverter('ounces', 0)).toEqual(['0.00 pounds', '0.00 tons']);
    expect(WeightConverter('pounds', 0)).toEqual(['0.00 ounces', '0.00 tons']);
    expect(WeightConverter('tons', 0)).toEqual(['0.00 pounds', '0.00 ounces']);
  });
});
