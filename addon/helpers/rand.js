import Ember from 'ember';

export function rand(params) {
  return Math.random(params);
}

export default Ember.Helper.helper(rand);
