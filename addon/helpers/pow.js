import { helper } from '@ember/component/helper';

export function pow(params) {
  return params.reduce((base, exponent) => Math.pow(base, exponent));
}

export default helper(pow);
