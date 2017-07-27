import { helper } from '@ember/component/helper';

export function cos(params) {
  return Math.cos(params[0]);
}

export default helper(cos);
