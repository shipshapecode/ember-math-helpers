import Ember from 'ember';
const { Helper } = Ember;

export function abs(params) {
  return Math.abs(params[0]);
}

export default Helper.helper(abs);
