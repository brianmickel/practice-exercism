export default class Squares {
  public squareOfSum: number;
  public sumOfSquares: number;
  public difference: number;

  constructor(num: number) {
    const nums = [...Array(num + 1).keys()];
    let initialSum = 0;
    for (let i = 0; i < nums.length; i++) {
      initialSum += nums[i];
      nums[i] = nums[i] ** 2;
    }
    this.squareOfSum = initialSum ** 2;
    this.sumOfSquares = nums.reduce((a, b) => a + b, 0);
    this.difference = Math.abs(this.squareOfSum - this.sumOfSquares);
  }
}
