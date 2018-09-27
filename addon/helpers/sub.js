import { helper } from '@ember/component/helper';

/**
 * Subtracts two or more numbers
 *
 * ```hbs
 * {{sub a b}}
 * ```
 *
 * @param {number[]} numbers A list of numbers to subtract
 * @return {number} The difference of all the passed numbers
 */
export function sub(numbers) {
  return numbers.reduce((a, b) => Number(a) - Number(b));
}

export default helper(sub);
