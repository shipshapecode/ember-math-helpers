import Ember from 'ember';
const {Helper} = Ember;


export function pow(params) {
  return params.reduce((base, exponent) => Math.pow(base, exponent));
}

export default Helper.helper(pow);
