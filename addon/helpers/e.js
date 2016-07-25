import Ember from 'ember';
const {Helper} = Ember;

export function e() {
  return Math.E;
}

export default Helper.helper(e);
