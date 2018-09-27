import { helper } from '@ember/component/helper';

/**
 * Divides two or more numbers
 *
 * ```hbs
 * {{div a b}}
 * ```
 *
 * @param {number[]} numbers A list of numbers to divide
 * @return {number} The result of dividing all the passed numbers
 */
export function div(numbers) {
  return numbers.reduce((a, b) => Number(a) / Number(b));
}

export default helper(div);
