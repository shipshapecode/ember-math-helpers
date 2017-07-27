import { helper } from '@ember/component/helper';

export function log1p(params) {
  return Math.log1p(params[0]);
}

export default helper(log1p);
