import { helper } from '@ember/component/helper';

/**
 * Returns the greatest positive integer that divides each of two integers
 */
export function gcd([_a = 0, _b = 0]) {
  const a = Math.abs(_a);
  const b = Math.abs(_b);

  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  return gcd([b, a % b]);
}

export default helper(gcd);
