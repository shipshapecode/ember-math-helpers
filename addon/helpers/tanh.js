import { helper } from '@ember/component/helper';

/**
 * Executes `Math.tanh` on the number passed to the helper.
 *
 * ```hbs
 * {{tanh a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.tanh`
 * @return {number} The tanh of the passed number
 */
export function tanh([number]) {
  return Math.tanh(number);
}

export default helper(tanh);
