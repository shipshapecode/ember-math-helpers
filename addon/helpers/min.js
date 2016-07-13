import Ember from 'ember';

export function min(params) {
  return Math.min(...params);
}

export default Ember.Helper.helper(min);
