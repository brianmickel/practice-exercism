/**
 * @fileoverview Implementation for SpaceAge: Given an age
 * in seconds, SpaceAge calculates how old someone would
 * be on various planets.
 */
const EARTH_SECONDS_PER_YEAR = 31557600;

const enum EARTH_YEARS_PER_YEAR {
  EARTH = 1,
  MERCURY = 0.2408467,
  VENUS = 0.61519726,
  MARS = 1.8808158,
  JUPITER = 11.862615,
  SATURN = 29.447498,
  URANUS = 84.016846,
  NEPTUNE = 164.79132
}

function round(num: number, decimalPlaces: number): number {
  if (decimalPlaces > 15) {
    decimalPlaces = 15;
  }
  let denominator = Math.pow(10, decimalPlaces);
  return Math.round(num * denominator) / denominator;
}

export default class SpaceAge {
  private _earthYears: number;
  public readonly seconds: number;

  constructor(seconds: number) {
    this.seconds = seconds;
    this._earthYears = seconds / EARTH_SECONDS_PER_YEAR;
  }

  onMercury(): number {
    return round(this._earthYears / EARTH_YEARS_PER_YEAR.MERCURY, 2);
  }

  onVenus(): number {
    return round(this._earthYears / EARTH_YEARS_PER_YEAR.VENUS, 2);
  }

  onEarth(): number {
    return round(this._earthYears / EARTH_YEARS_PER_YEAR.EARTH, 2);
  }

  onMars(): number {
    return round(this._earthYears / EARTH_YEARS_PER_YEAR.MARS, 2);
  }

  onJupiter(): number {
    return round(this._earthYears / EARTH_YEARS_PER_YEAR.JUPITER, 2);
  }

  onSaturn(): number {
    return round(this._earthYears / EARTH_YEARS_PER_YEAR.SATURN, 2);
  }

  onUranus(): number {
    return round(this._earthYears / EARTH_YEARS_PER_YEAR.URANUS, 2);
  }

  onNeptune(): number {
    return round(this._earthYears / EARTH_YEARS_PER_YEAR.NEPTUNE, 2);
  }
}
