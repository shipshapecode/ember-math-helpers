import Ember from 'ember';
const { Helper } = Ember;

export function expm1(params) {
  return Math.expm1(params[0]);
}

export default Helper.helper(expm1);
