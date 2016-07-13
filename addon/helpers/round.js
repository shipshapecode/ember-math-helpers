import Ember from 'ember';

export function round(number) {
  return Math.round(number[0]);
}

export default Ember.Helper.helper(round);
