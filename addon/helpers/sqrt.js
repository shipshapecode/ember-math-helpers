import { helper } from '@ember/component/helper';

/**
 * Executes `Math.sqrt` on the number passed to the helper.
 *
 * ```hbs
 * {{sqrt a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.sqrt`
 * @return {number} The sqrt of the passed number
 */
export function sqrt([number]) {
  return Math.sqrt(number);
}

export default helper(sqrt);
