import Helper from 'ember-helper';

export function percent([number, total]) {
  return (number / 100) * total;
}

export default Helper.helper(percent);
