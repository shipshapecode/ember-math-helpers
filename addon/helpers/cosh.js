import { helper } from '@ember/component/helper';

export function cosh(params) {
  return Math.cosh(params[0]);
}

export default helper(cosh);
