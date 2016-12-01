import Ember from 'ember';
const { Helper } = Ember;

export function exp(params) {
  return Math.exp(params[0]);
}

export default Helper.helper(exp);
