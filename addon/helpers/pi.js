import Ember from 'ember';
const {Helper} = Ember;

export function pi() {
  return Math.PI;
}

export default Helper.helper(pi);
