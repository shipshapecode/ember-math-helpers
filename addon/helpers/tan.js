import { helper } from '@ember/component/helper';

/**
 * Executes `Math.tan` on the number passed to the helper.
 *
 * ```hbs
 * {{tan a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.tan`
 * @return {number} The tan of the passed number
 */
export function tan([number]) {
  return Math.tan(number);
}

export default helper(tan);
