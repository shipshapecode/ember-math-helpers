import Ember from 'ember';
const { Helper } = Ember;

export function acosh(params) {
  return Math.acosh(params[0]);
}

export default Helper.helper(acosh);
