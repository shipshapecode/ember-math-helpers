import { helper } from '@ember/component/helper';

/**
 * Executes `Math.log1p` on the number passed to the helper.
 *
 * ```hbs
 * {{log1p a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.log1p`
 * @return {number} The log1p of the passed number
 */
export function log1p([number]) {
  return Math.log1p(number);
}

export default helper(log1p);
