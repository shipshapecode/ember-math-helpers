import { helper } from '@ember/component/helper';

/**
 * Uses `Math.abs` to take the absolute value of the number passed to the helper.
 *
 * ```hbs
 * {{abs a}}
 * ```
 *
 * @param {number} number The number to take the absolute value of
 * @return {number} The absolute value of the passed number
 */
export function abs([number]) {
  return Math.abs(number);
}

export default helper(abs);
