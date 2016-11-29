import Ember from 'ember';
const { Helper } = Ember;

export function asinh(params) {
  return Math.asinh(params[0]);
}

export default Helper.helper(asinh);
