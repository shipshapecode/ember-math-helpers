import Ember from 'ember';
const { Helper } = Ember;

export function min(params) {
  return Math.min(...params);
}

export default Helper.helper(min);
