import Ember from 'ember';
const { Helper } = Ember;

export function fround(params) {
  return Math.fround(params[0]);
}

export default Helper.helper(fround);
