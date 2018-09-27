import { helper } from '@ember/component/helper';

/**
 * Executes `Math.atanh` on the number passed to the helper.
 *
 * ```hbs
 * {{atanh a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.atanh`
 * @return {number} The atanh of the passed number
 */
export function atanh([number]) {
  return Math.atanh(number);
}

export default helper(atanh);
