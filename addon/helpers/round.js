import Ember from 'ember';
const {Helper} = Ember;

export function round(number) {
  return Math.round(number[0]);
}

export default Helper.helper(round);
