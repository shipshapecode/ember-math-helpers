import { helper } from '@ember/component/helper';

export function sign(params) {
  return Math.sign(params[0]);
}

export default helper(sign);
