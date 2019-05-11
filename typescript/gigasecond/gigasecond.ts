export default class Gigasecond {
  private _gsDate: Date;
  constructor(date: Date) {
    this._gsDate = new Date(date.getTime() + 1000 * 10 ** 9);
  }

  date(): Date {
    return this._gsDate;
  }
}
