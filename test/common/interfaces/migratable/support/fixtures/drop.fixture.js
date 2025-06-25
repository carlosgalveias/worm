/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'drop',
  connection: 'migratable',
  migrate: 'drop',

  attributes: {
    name: 'string',
    age: 'integer'
  }

});
