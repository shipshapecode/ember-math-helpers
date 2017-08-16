/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const path = require('path');
const intersection = require('./lib/intersection');
const difference = require('./lib/difference');

module.exports = {
  name: 'ember-math-helpers',

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;
    this.app.options = this.app.options || {};

    var config = this.app.options[this.name] || {};
    this.whitelist = this.generateWhitelist(config);
    this.blacklist = this.generateBlacklist(config);
  },

  treeForAddon: function() {
    // see: https://github.com/ember-cli/ember-cli/issues/4463
    const tree = this._super.treeForAddon.apply(this, arguments);
    const moduleRegexp = '(^modules\/)?' + this.name + '\/helpers\/';
    return this.filterHelpers(tree, new RegExp(moduleRegexp, 'i'));
  },

  filterHelpers: function(tree, regex) {
    const whitelist = this.whitelist;
    const blacklist = this.blacklist;
    const _this = this;

    // exit early if no opts defined
    if ((!whitelist || whitelist.length === 0) && (!blacklist || blacklist.length === 0)) {
      return new Funnel(tree);
    }

    return new Funnel(tree, {
      exclude: [function(name) {
        return _this.exclusionFilter(name, regex, {
          whitelist: whitelist,
          blacklist: blacklist
        });
      }]
    });
  },

  exclusionFilter: function(name, regex, lists) {
    const whitelist = lists.whitelist || [];
    const blacklist = lists.blacklist || [];
    const isAddonHelper = regex.test(name);
    const helperName = path.basename(name, '.js');
    const isWhitelisted = whitelist.indexOf(helperName) !== -1;
    const isBlacklisted = blacklist.indexOf(helperName) !== -1;

    // non-helper, don't exclude
    if (!isAddonHelper) {
      return false;
    }

    // don't exclude if both lists are empty
    if (whitelist.length === 0 && blacklist.length === 0) {
      return false;
    }

    // don't exclude if both whitelisted and blacklisted
    if (isWhitelisted && isBlacklisted) {
      return false;
    }

    // only whitelist defined
    if (whitelist.length && blacklist.length === 0) {
      return !isWhitelisted;
    }

    // only blacklist defined
    if (blacklist.length && whitelist.length === 0) {
      return isBlacklisted;
    }

    return !isWhitelisted || isBlacklisted;
  },

  generateWhitelist: function(addonConfig) {
    const only = addonConfig.only || [];
    const except = addonConfig.except || [];

    if (except && except.length) {
      return difference(only, except);
    }

    return only;
  },

  generateBlacklist: function(addonConfig) {
    const only = addonConfig.only || [];
    const except = addonConfig.except || [];

    if (only && only.length) {
      return intersection(except, only);
    }

    return except;
  }
};
