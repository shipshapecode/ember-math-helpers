import Ember from 'ember';
const { Helper } = Ember;

export function sin(params) {
  return Math.sin(params[0]);
}

export default Helper.helper(sin);
