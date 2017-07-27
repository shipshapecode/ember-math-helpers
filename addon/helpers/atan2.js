import { helper } from '@ember/component/helper';

export function atan2(params) {
  return Math.atan2(params[0], params[1]);
}

export default helper(atan2);
