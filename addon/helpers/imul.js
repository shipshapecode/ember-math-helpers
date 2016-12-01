import Ember from 'ember';
const { Helper } = Ember;

export function imul(params) {
  return Math.imul(params[0], params[1]);
}

export default Helper.helper(imul);
