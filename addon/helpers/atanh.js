import { helper } from '@ember/component/helper';

export function atanh(params) {
  return Math.atanh(params[0]);
}

export default helper(atanh);
