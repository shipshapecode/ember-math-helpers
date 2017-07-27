import { helper } from '@ember/component/helper';

export function tanh(params) {
  return Math.tanh(params[0]);
}

export default helper(tanh);
