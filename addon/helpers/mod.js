import Ember from 'ember';

export function mod(params/*, hash*/) {
  return params.reduce((a, b) => a % b);
}

export default Ember.Helper.helper(mod);
