import Controller from 'ember-controller';

export default Controller.extend({
  addTemplate: '{{add 1 2}}',
  divTemplate: '{{div 20 10}}',
  modTemplate: '{{mod 11 10}}',
  multTemplate: '{{mult 6 6}}',
  subTemplate: '{{sub 10 2}}',

  composableSub: '{{sub 10 1 2 3}}',
  composableComplex: '{{mult (div (add 15 5) 2) 10}}'
});
