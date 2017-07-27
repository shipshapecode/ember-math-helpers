import { helper } from '@ember/component/helper';

export function log10(params) {
  return Math.log10(params[0]);
}

export default helper(log10);
