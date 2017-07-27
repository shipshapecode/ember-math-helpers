import { helper } from '@ember/component/helper';

export function sqrt(params) {
  return Math.sqrt(params[0]);
}

export default helper(sqrt);
