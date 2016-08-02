import Ember from 'ember';
const { Helper } = Ember;

export function ceil(params) {
  return Math.ceil(params[0]);
}

export default Helper.helper(ceil);
