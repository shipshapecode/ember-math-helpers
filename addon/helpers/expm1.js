import { helper } from '@ember/component/helper';

/**
 * Executes `Math.expm1` on the number passed to the helper.
 *
 * ```hbs
 * {{expm1 a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.expm1`
 * @return {number} The expm1 of the passed number
 */
export function expm1([number]) {
  return Math.expm1(number);
}

export default helper(expm1);
