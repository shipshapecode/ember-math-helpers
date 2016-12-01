import Ember from 'ember';
const { Helper } = Ember;

export function atan2(params) {
  return Math.atan2(params[0], params[1]);
}

export default Helper.helper(atan2);
