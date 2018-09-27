import { helper } from '@ember/component/helper';

/**
 * Executes `Math.sin` on the number passed to the helper.
 *
 * ```hbs
 * {{sin a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.sin`
 * @return {number} The sin of the passed number
 */
export function sin([number]) {
  return Math.sin(number);
}

export default helper(sin);
