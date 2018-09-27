import { helper } from '@ember/component/helper';

/**
 * Executes `Math.cosh` on the number passed to the helper.
 *
 * ```hbs
 * {{cosh a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.cosh`
 * @return {number} The cosh of the passed number
 */
export function cosh([number]) {
  return Math.cosh(number);
}

export default helper(cosh);
