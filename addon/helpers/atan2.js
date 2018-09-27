import { helper } from '@ember/component/helper';

/**
 * Executes `Math.atan2` on the numbers passed to the helper.
 *
 * ```hbs
 * {{atan2 a b}}
 * ```
 *
 * @param {number} number1 The first number to pass to `Math.atan2`
 * @param {number} number2 The second number to pass to `Math.atan2`
 * @return {number} The atan2 of the passed numbers
 */
export function atan2([number1, number2]) {
  return Math.atan2(number1, number2);
}

export default helper(atan2);
