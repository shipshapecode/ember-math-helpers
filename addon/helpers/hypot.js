import { helper } from '@ember/component/helper';

export function hypot(params) {
  return Math.hypot(...params);
}

export default helper(hypot);
