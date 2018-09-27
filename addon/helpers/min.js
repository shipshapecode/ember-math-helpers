import { helper } from '@ember/component/helper';

/**
 * Takes two or more numbers, and finds the min of the set using `Math.min`
 *
 * ```hbs
 * {{min a b}}
 * ```
 *
 * @param {number[]} numbers A list of numbers to pass to `Math.min`
 * @return {number} The min of the set of numbers
 */
export function min(numbers) {
  return Math.min(...numbers);
}

export default helper(min);
