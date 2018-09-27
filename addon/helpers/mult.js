import { helper } from '@ember/component/helper';

/**
 * Multiplies two or more numbers
 *
 * ```hbs
 * {{mult a b}}
 * ```
 *
 * @param {number[]} numbers A list of numbers to multiply
 * @return {number} The product of all the passed numbers
 */
export function mult(numbers) {
  return numbers.reduce((a, b) => Number(a) * Number(b));
}

export default helper(mult);
