import { helper } from '@ember/component/helper';

export function cbrt(params) {
  return Math.cbrt(params[0]);
}

export default helper(cbrt);
