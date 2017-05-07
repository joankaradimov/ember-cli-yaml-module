/* jshint node: true */
'use strict';

var Filter = require('broccoli-persistent-filter');
var Yaml = require('js-yaml');
var merge = require('lodash.merge');

YamlModule.prototype = Object.create(Filter.prototype);
YamlModule.prototype.constructor = YamlModule;
YamlModule.prototype.extensions = ['yaml', 'yml'];
YamlModule.prototype.targetExtension = 'js';

function YamlModule(inputTree, options) {
  if (!(this instanceof YamlModule)) {
    return new YamlModule(inputTree, options);
  }

  this.options = merge({ space: 2 }, options);

  Filter.call(this, inputTree, {
    annotation: this.options.annotation
  });
}

YamlModule.prototype.processString = function (string) {
  return "export default " + JSON.stringify(Yaml.safeLoad(string), null, this.options.space) + ";";
}

module.exports = {
  name: 'ember-cli-yaml-module',

  treeForApp: function() {
    return YamlModule(this.app.trees.app);
  },

  treeForTestSupport: function() {
    return YamlModule(this.app.trees.tests);
  }
};
