import { helper } from '@ember/component/helper';

export function sin(params) {
  return Math.sin(params[0]);
}

export default helper(sin);
