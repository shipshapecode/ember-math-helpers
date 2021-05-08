import { helper } from '@ember/component/helper';

// adapted from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#Decimal_rounding
/**
 * Decimal adjustment of a number.
 *
 * @param {Number} value The number.
 * @param {Integer} exp The exponent (the 10 logarithm of the adjustment base).
 * @return {Number} The adjusted value.
 */
function decimalAdjust(value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math.round(value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (
    value === null ||
    isNaN(value) ||
    !(typeof exp === 'number' && exp % 1 === 0)
  ) {
    return NaN;
  }
  // If the value is negative...
  if (value < 0) {
    return -decimalAdjust(-value, exp);
  }
  // Shift
  value = value.toString().split('e');
  value = Math.round(+`${value[0]}e${value[1] ? +value[1] - exp : -exp}`);
  // Shift back
  value = value.toString().split('e');
  return +`${value[0]}e${value[1] ? +value[1] + exp : exp}`;
}

export function round(number, namedArgs) {
  if (namedArgs) {
    if (namedArgs.decimals) {
      return decimalAdjust(number[0], -namedArgs.decimals);
    }
    if (namedArgs.exp) {
      return decimalAdjust(number[0], namedArgs.exp);
    }
  }
  return Math.round(number[0]);
}

export default helper(round);
