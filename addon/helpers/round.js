import { helper } from '@ember/component/helper';

export function round(number) {
  return Math.round(number[0]);
}

export default helper(round);
