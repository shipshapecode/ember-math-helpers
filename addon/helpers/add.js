import Ember from 'ember';
const { Helper } = Ember;

export function add(params) {
  return params.reduce((a, b) => a + b);
}

export default Helper.helper(add);
