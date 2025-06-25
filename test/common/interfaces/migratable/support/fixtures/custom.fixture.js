/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  // tableName: 'customTable',
  identity: 'custom',
  connection: 'migratable',
  migrate: 'alter',

  attributes: {
    name: {
    	type: 'string',
    	columnName: 'nameColumn'
    },
    age: 'integer'
  }

});
