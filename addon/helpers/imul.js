import { helper } from '@ember/component/helper';

export function imul(params) {
  return Math.imul(params[0], params[1]);
}

export default helper(imul);
