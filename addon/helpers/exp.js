import { helper } from '@ember/component/helper';

/**
 * Executes `Math.exp` on the number passed to the helper.
 *
 * ```hbs
 * {{exp a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.exp`
 * @return {number} The exp of the passed number
 */
export function exp([number]) {
  return Math.exp(number);
}

export default helper(exp);
