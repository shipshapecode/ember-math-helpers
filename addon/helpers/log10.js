import Ember from 'ember';
const { Helper } = Ember;

export function log10(params) {
  return Math.log10(params[0]);
}

export default Helper.helper(log10);
