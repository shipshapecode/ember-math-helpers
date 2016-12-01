import Ember from 'ember';
const { Helper } = Ember;

export function clz32(params) {
  return Math.clz32(params[0]);
}

export default Helper.helper(clz32);
