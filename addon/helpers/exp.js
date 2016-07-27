import Ember from 'ember';
const {Helper} = Ember;

export function exp(params) {
  return Math.exp(params);
}

export default Helper.helper(exp);
