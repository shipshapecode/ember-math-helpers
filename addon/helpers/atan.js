import Ember from 'ember';
const { Helper } = Ember;

export function atan(params) {
  return Math.atan(params[0]);
}

export default Helper.helper(atan);
