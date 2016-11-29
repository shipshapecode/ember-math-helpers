import Ember from 'ember';
const { Helper } = Ember;

export function acos(params) {
  return Math.acos(params[0]);
}

export default Helper.helper(acos);
