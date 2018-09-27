import { helper } from '@ember/component/helper';

/**
 * Executes `Math.sign` on the number passed to the helper.
 *
 * ```hbs
 * {{sign a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.sign`
 * @return {number} The sign of the passed number
 */
export function sign([number]) {
  return Math.sign(number);
}

export default helper(sign);
