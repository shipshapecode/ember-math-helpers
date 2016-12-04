import Ember from 'ember';
const { Helper } = Ember;

export function tan(params) {
  return Math.tan(params[0]);
}

export default Helper.helper(tan);
