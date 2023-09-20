import { UNITS } from "../constant";

function getOppositUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}

export { getOppositUnit };
