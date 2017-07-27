import { helper } from '@ember/component/helper';

export function floor(params) {
  return Math.floor(params[0]);
}

export default helper(floor);
