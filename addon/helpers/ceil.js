import { helper } from '@ember/component/helper';

export function ceil(params) {
  return Math.ceil(params[0]);
}

export default helper(ceil);
