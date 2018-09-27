import { helper } from '@ember/component/helper';

/**
 * Takes two or more numbers, and finds the max of the set using `Math.max`
 *
 * ```hbs
 * {{max a b}}
 * ```
 *
 * @param {number[]} numbers A list of numbers to pass to `Math.max`
 * @return {number} The max of the set of numbers
 */
export function max(numbers) {
  return Math.max(...numbers);
}

export default helper(max);
