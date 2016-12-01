import Ember from 'ember';
const { Helper } = Ember;

export function log(params) {
  return Math.log(params[0]);
}

export default Helper.helper(log);
