import { helper } from '@ember/component/helper';

/**
 * Executes `Math.cos` on the number passed to the helper.
 *
 * ```hbs
 * {{cos a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.cos`
 * @return {number} The cos of the passed number
 */
export function cos([number]) {
  return Math.cos(number);
}

export default helper(cos);
