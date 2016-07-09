import Ember from 'ember';
const {Helper} = Ember;

export function floor(params) {
  return Math.floor(params[0]);
}

export default Helper.helper(floor);
