import { helper } from '@ember/component/helper';

/**
 * Executes `Math.acosh` on the number passed to the helper.
 *
 * ```hbs
 * {{acosh a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.acosh`
 * @return {number} The acosh of the passed number
 */
export function acosh([number]) {
  return Math.acosh(number);
}

export default helper(acosh);
