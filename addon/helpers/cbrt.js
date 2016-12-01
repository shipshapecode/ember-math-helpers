import Ember from 'ember';
const { Helper } = Ember;

export function cbrt(params) {
  return Math.cbrt(params[0]);
}

export default Helper.helper(cbrt);
