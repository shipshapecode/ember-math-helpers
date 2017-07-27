import { helper } from '@ember/component/helper';

export function log2(params) {
  return Math.log2(params[0]);
}

export default helper(log2);
