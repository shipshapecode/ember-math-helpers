import { helper } from '@ember/component/helper';

export function abs(params) {
  return Math.abs(params[0]);
}

export default helper(abs);
