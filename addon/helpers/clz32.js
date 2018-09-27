import { helper } from '@ember/component/helper';

/**
 * Executes `Math.clz32` on the number passed to the helper.
 *
 * ```hbs
 * {{clz32 a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.clz32`
 * @return {number} The clz32 of the passed number
 */
export function clz32([number]) {
  return Math.clz32(number);
}

export default helper(clz32);
