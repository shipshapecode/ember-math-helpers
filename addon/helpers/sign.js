import Ember from 'ember';
const { Helper } = Ember;

export function sign(params) {
  return Math.sign(params[0]);
}

export default Helper.helper(sign);
