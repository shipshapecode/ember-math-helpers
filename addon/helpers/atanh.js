import Ember from 'ember';
const { Helper } = Ember;

export function atanh(params) {
  return Math.atanh(params[0]);
}

export default Helper.helper(atanh);
