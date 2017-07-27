import { helper } from '@ember/component/helper';

export function exp(params) {
  return Math.exp(params[0]);
}

export default helper(exp);
