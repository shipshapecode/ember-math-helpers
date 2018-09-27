import { helper } from '@ember/component/helper';

/**
 * Sums two or more numbers
 *
 * ```hbs
 * {{add a b}}
 * ```
 *
 * @param {number[]} numbers A list of numbers to sum
 * @return {number} The sum of all the passed numbers
 */
export function add(numbers) {
  return numbers.reduce((a, b) => Number(a) + Number(b));
}

export default helper(add);
