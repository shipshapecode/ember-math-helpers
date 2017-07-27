import { helper } from '@ember/component/helper';

export function min(params) {
  return Math.min(...params);
}

export default helper(min);
