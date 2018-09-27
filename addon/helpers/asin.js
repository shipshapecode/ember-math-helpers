import { helper } from '@ember/component/helper';

/**
 * Executes `Math.asin` on the number passed to the helper.
 *
 * ```hbs
 * {{asin a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.asin`
 * @return {number} The asin of the passed number
 */
export function asin([number]) {
  return Math.asin(number);
}

export default helper(asin);
