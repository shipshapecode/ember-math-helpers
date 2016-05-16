import Ember from 'ember';
const {Helper} = Ember;

export function sub(params) {
  return params.reduce((a, b) => a - b);
}

export default Helper.helper(sub);
