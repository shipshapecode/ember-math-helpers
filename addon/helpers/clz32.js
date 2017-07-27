import { helper } from '@ember/component/helper';

export function clz32(params) {
  return Math.clz32(params[0]);
}

export default helper(clz32);
