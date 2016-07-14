import Ember from 'ember';
const {Helper} = Ember;

export function max(params) {
  return Math.max(...params);
}

export default Helper.helper(max);
