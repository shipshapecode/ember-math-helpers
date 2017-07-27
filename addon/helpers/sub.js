import { helper } from '@ember/component/helper';

export function sub(params) {
  return params.reduce((a, b) => Number(a) - Number(b));
}

export default helper(sub);
