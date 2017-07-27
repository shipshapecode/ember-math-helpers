import { helper } from '@ember/component/helper';

export function tan(params) {
  return Math.tan(params[0]);
}

export default helper(tan);
