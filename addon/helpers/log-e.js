import Ember from 'ember';
const { Helper } = Ember;

export function logE(params) {
  return Math.log(params[0]);
}

export default Helper.helper(logE);
