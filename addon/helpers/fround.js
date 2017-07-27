import { helper } from '@ember/component/helper';

export function fround(params) {
  return Math.fround(params[0]);
}

export default helper(fround);
