export default class ArmstrongNumbers {
  static isArmstrongNumber(num: number): boolean {
    let numAsString = num.toString();
    let numOfDigits = numAsString.length;
    let sumOfPowers = numAsString.split('')
                          .map(el => parseInt(el))
                          .reduce((acc, val) => acc + val ** numOfDigits, 0)
    return sumOfPowers === num;
  }
}