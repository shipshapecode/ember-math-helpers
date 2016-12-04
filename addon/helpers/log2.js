import Ember from 'ember';
const { Helper } = Ember;

export function log2(params) {
  return Math.log2(params[0]);
}

export default Helper.helper(log2);
