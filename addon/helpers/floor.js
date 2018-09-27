import { helper } from '@ember/component/helper';

/**
 * Executes `Math.floor` on the number passed to the helper.
 *
 * ```hbs
 * {{floor a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.floor`
 * @return {number} The floor of the passed number
 */
export function floor([number]) {
  return Math.floor(number);
}

export default helper(floor);
