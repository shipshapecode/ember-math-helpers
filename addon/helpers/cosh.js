import Ember from 'ember';
const { Helper } = Ember;

export function cosh(params) {
  return Math.cosh(params[0]);
}

export default Helper.helper(cosh);
