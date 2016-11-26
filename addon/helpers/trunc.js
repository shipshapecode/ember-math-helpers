import Ember from 'ember';
const { Helper } = Ember;

export function trunc(params) {
  return Math.trunc(params[0]);
}

export default Helper.helper(trunc);
