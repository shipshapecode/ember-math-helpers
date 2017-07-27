import { helper } from '@ember/component/helper';

export function add(params) {
  return params.reduce((a, b) => Number(a) + Number(b));
}

export default helper(add);
