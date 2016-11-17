import Ember from 'ember';
const { Helper } = Ember;

export function cos(params) {
  return Math.cos(params[0]);
}

export default Helper.helper(cos);
