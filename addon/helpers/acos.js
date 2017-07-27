import { helper } from '@ember/component/helper';

export function acos(params) {
  return Math.acos(params[0]);
}

export default helper(acos);
