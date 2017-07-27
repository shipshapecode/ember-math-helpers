import { helper } from '@ember/component/helper';

export function logE(params) {
  return Math.log(params[0]);
}

export default helper(logE);
