import { helper } from '@ember/component/helper';

/**
 * Executes `Math.cbrt` on the number passed to the helper.
 *
 * ```hbs
 * {{cbrt a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.cbrt`
 * @return {number} The cbrt of the passed number
 */
export function cbrt([number]) {
  return Math.cbrt(number);
}

export default helper(cbrt);
