import Ember from 'ember';

export function add(params/*, hash*/) {
  return params[0] + params[1];
}

export default Ember.Helper.helper(add);
