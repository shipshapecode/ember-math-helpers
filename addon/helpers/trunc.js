import { helper } from '@ember/component/helper';

/**
 * Executes `Math.trunc` on the number passed to the helper.
 *
 * ```hbs
 * {{trunc a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.trunc`
 * @return {number} The trunc of the passed number
 */
export function trunc([number]) {
  return Math.trunc(number);
}

export default helper(trunc);
