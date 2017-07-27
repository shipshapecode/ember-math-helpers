import { helper } from '@ember/component/helper';

export function asin(params) {
  return Math.asin(params[0]);
}

export default helper(asin);
