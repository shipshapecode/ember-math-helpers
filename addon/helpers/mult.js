import Ember from 'ember';
const { Helper } = Ember;

export function mult(params) {
  return params.reduce((a, b) => Number(a) * Number(b));
}

export default Helper.helper(mult);
