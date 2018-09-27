import { helper } from '@ember/component/helper';

/**
 * Takes the modulus of two or more numbers
 *
 * ```hbs
 * {{mod a b}}
 * ```
 *
 * @param {number[]} numbers A list of numbers to modulus
 * @return {number} The modulus of all the passed numbers
 */
export function mod(numbers) {
  return numbers.reduce((a, b) => Number(a) % Number(b));
}

export default helper(mod);
