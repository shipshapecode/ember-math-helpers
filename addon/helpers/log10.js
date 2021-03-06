import { helper } from '@ember/component/helper';

/**
 * Executes `Math.log10` on the number passed to the helper.
 *
 * ```hbs
 * {{log10 a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.log10`
 * @return {number} The log10 of the passed number
 */
export function log10([number]) {
  return Math.log10(number);
}

export default helper(log10);
