import { helper } from '@ember/component/helper';

export function trunc(params) {
  return Math.trunc(params[0]);
}

export default helper(trunc);
