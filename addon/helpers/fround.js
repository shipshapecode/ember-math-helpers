import { helper } from '@ember/component/helper';

/**
 * Executes `Math.fround` on the number passed to the helper.
 *
 * ```hbs
 * {{fround a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.fround`
 * @return {number} The fround of the passed number
 */
export function fround([number]) {
  return Math.fround(number);
}

export default helper(fround);
