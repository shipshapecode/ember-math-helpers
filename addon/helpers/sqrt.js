import Ember from 'ember';
const { Helper } = Ember;

export function sqrt(params) {
  return Math.sqrt(params[0]);
}

export default Helper.helper(sqrt);
