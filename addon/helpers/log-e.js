import { helper } from '@ember/component/helper';

/**
 * Executes `Math.log` on the number passed to the helper.
 *
 * ```hbs
 * {{log-e a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.log`
 * @return {number} The log of the passed number
 */
export function logE([number]) {
  return Math.log(number);
}

export default helper(logE);
