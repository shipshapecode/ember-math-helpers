import Ember from 'ember';
const { Helper } = Ember;

export function log1p(params) {
  return Math.log1p(params[0]);
}

export default Helper.helper(log1p);
