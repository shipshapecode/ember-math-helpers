import { helper } from '@ember/component/helper';

export function atan(params) {
  return Math.atan(params[0]);
}

export default helper(atan);
