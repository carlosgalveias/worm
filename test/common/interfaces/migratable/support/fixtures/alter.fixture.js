/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'alter',
  connection: 'migratable',
  migrate: 'alter',

  attributes: {
    name: 'string',
    age: 'integer'
  }

});
