import { helper } from '@ember/component/helper';

export function acosh(params) {
  return Math.acosh(params[0]);
}

export default helper(acosh);
