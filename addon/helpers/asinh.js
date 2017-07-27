import { helper } from '@ember/component/helper';

export function asinh(params) {
  return Math.asinh(params[0]);
}

export default helper(asinh);
