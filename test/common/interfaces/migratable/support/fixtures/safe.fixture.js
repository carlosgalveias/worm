/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'safe',
  connection: 'migratable',
  migrate: 'safe',

  attributes: {
    name: 'string',
    age: 'integer'
  }

});
