import Ember from 'ember';
const { Helper } = Ember;

export function asin(params) {
  return Math.asin(params[0]);
}

export default Helper.helper(asin);
