import Ember from 'ember';

export function max(params) {
  return Math.max(...params);
}

export default Ember.Helper.helper(max);
