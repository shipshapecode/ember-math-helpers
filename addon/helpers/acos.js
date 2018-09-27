import { helper } from '@ember/component/helper';

/**
 * Executes `Math.acos` on the number passed to the helper.
 *
 * ```hbs
 * {{acos a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.acos`
 * @return {number} The acos of the passed number
 */
export function acos([number]) {
  return Math.acos(number);
}

export default helper(acos);
