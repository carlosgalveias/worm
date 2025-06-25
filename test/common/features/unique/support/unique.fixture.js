/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  identity: 'unique',
  tableName: 'uniqueTable',
  connection: 'uniqueConn',

  attributes: {
    name: 'string',
    email: {
      type: 'string',
      unique: true
    },
    type: 'string'
  }

});
