import { helper } from '@ember/component/helper';

export function mult(params) {
  return params.reduce((a, b) => Number(a) * Number(b));
}

export default helper(mult);
