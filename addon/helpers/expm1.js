import { helper } from '@ember/component/helper';

export function expm1(params) {
  return Math.expm1(params[0]);
}

export default helper(expm1);
