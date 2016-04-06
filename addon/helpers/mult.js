import Ember from 'ember';

export function mult(params/*, hash*/) {
  return params.reduce((a, b) => a * b);
}

export default Ember.Helper.helper(mult);
