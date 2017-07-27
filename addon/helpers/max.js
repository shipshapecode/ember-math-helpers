import { helper } from '@ember/component/helper';

export function max(params) {
  return Math.max(...params);
}

export default helper(max);
