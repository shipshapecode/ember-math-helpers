import Ember from 'ember';
const { Helper } = Ember;

export function hypot(params) {
  return Math.hypot.apply(null, params);
}

export default Helper.helper(hypot);
