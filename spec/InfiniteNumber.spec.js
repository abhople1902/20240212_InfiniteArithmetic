const InfiniteNumber = require('../dependencies/InfiniteNumber');
const { testInfiniteNumberConstruction } = require('../dependencies/index');

describe('InfiniteNumber', () => {
  let inf1;

  beforeEach(() => {
    // Initialize a new InfiniteNumber instance before each test
    inf1 = null;
  });

  describe('Construction', () => {
    it('should correctly initialize with a number input', () => {
      inf1 = new InfiniteNumber(123);
      expect(inf1.getInternalArray()).toEqual([1, 2, 3]);
    });

    it('should correctly initialize with a string input', () => {
      inf1 = new InfiniteNumber("456");
      expect(inf1.getInternalArray()).toEqual([4, 5, 6]);
    });

    it('should correctly initialize with an array input', () => {
      inf1 = new InfiniteNumber([7, 8, 9]);
      expect(inf1.getInternalArray()).toEqual([7, 8, 9]);
    });

    it('should correctly initialize with an object input', () => {
      inf1 = new InfiniteNumber({ array: [1, 2, 3] });
      expect(inf1.getInternalArray()).toEqual([1, 2, 3]);
    });

    it('should throw error when input is NaN', () => {
      expect(() => new InfiniteNumber(NaN)).toThrow();
    });

    // Add more construction test cases as needed
  });

  describe('Addition Method (Add)', () => {
    it('should correctly add two positive numbers', () => {
      inf1 = new InfiniteNumber(123);
      const inf2 = new InfiniteNumber(456);
      const result = inf1.Add(inf2);
      expect(result).toEqual([5, 7, 9]);
    });

    // Add more addition test cases as needed
  });

  describe('Subtraction Method (Sub)', () => {
    it('should correctly subtract two positive numbers', () => {
      inf1 = new InfiniteNumber(789);
      const inf2 = new InfiniteNumber(456);
      const result = inf1.Sub(inf2);
      expect(result).toEqual([3, 3, 3]);
    });

    // Add more subtraction test cases as needed
  });
});

describe('testInfiniteNumberConstruction', () => {
  it('should correctly initialize with various inputs', () => {
    spyOn(console, 'log'); // Mock console.log

    testInfiniteNumberConstruction(123);
    testInfiniteNumberConstruction("456");
    testInfiniteNumberConstruction([7, 8, 9]);
    testInfiniteNumberConstruction({ array: [1, 2, 3] });

    expect(console.log).toHaveBeenCalledTimes(4);
    // Add expectation for each input type
  });

  // Add more testInfiniteNumberConstruction test cases as needed
});
