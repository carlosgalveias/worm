/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  identity: 'autoInc',
  tableName: 'autoIncTable',
  connection: 'autoIncConn',

  attributes: {
    name: 'string',
    normalField: 'integer',
    type: 'string'
  }

});
