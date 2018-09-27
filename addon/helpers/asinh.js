import { helper } from '@ember/component/helper';

/**
 * Executes `Math.asinh` on the number passed to the helper.
 *
 * ```hbs
 * {{asinh a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.asinh`
 * @return {number} The asinh of the passed number
 */
export function asinh([number]) {
  return Math.asinh(number);
}

export default helper(asinh);
