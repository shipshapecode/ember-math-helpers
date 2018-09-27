import { helper } from '@ember/component/helper';

/**
 * Executes `Math.ceil` on the number passed to the helper.
 *
 * ```hbs
 * {{ceil a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.ceil`
 * @return {number} The ceil of the passed number
 */
export function ceil([number]) {
  return Math.ceil(number);
}

export default helper(ceil);
