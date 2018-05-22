//ques1
describe("Positive Numbers", function () {
  it("should return the sum of all the numbers When the numbers are all positive", function () {
    expect(positiveSum([3, 5])).toEqual(8);
  });

  it("should not be included as part of the sum When there is a negative number in the provided array", function () {
    expect(positiveSum([-3, 5])).toEqual(5);
  });

  it("should return a sum of 0 When the provided array is empty", function () {
    expect(positiveSum([])).toEqual(0);
  });

  it("should return a sum of 0 When the provided array is all negative numbers", function () {
    expect(positiveSum([-3, -5])).toEqual(0);
  });
});


//ques2
describe("Provided Divisors", function () {
  it("should return true When a number is divisible by both of the provided divisors", function () {
    expect(isDivisible(6, 2, 3)).toEqual(true);
  });

  it("should return false When the number is smaller then both the provided divisors", function () {
    expect(isDivisible(4, 2, 8)).toEqual(false);
  });

  it("should return false When the number is not divisible by only one of the provided divisors", function () {
    expect(isDivisible(8, 4, 5)).toEqual(false);
  });

  it("should return false When the number is not divisible by any of the provided divisors", function () {
    expect(isDivisible(7, 3, 16)).toEqual(false);
  });
});


//ques3
describe("Characters in the string", function () {
  it("should returns itself When there is only 1 characters in the string", function () {
    expect(solution('P')).toEqual('P');
  });

  it("should returns the reversed string When there are multiple characters in the string", function () {
    expect(solution('DHILLON')).toEqual('NOLLIHD');
  });

  it("should returns empty string When there are no characters in the string", function () {
    expect(solution('')).toEqual('');
  });
});


//ques4
describe("Reverse Sequences", function () {
  it("should returns error when value of n is negative", function () {
    expect(reverseSeq(-9)).toEqual([]);
  
  });
});