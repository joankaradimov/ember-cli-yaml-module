/* jshint node: true */
'use strict';

var JsonModule = require('broccoli-json-module');
var YamlToJson = require('broccoli-yaml');

module.exports = {
  name: 'ember-cli-yaml-module',

  treeForApp: function() {
    return JsonModule(YamlToJson(this.app.trees.app));
  },

  treeForTestSupport: function() {
    return JsonModule(YamlToJson(this.app.trees.tests));
  }
};
