import Ember from 'ember';
const { Helper } = Ember;

export function tanh(params) {
  return Math.tanh(params[0]);
}

export default Helper.helper(tanh);
