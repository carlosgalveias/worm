/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'create',
  connection: 'migratable',
  migrate: 'create',

  attributes: {
    name: 'string',
    age: 'integer'
  }

});
