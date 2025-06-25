/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'driverTableCustomPK',
  identity: 'drivercustom',
  connection: 'associations',

  autoPK: false,

  attributes: {
    number: {
      type: 'integer',
      primaryKey: true
    },
    name: 'string',
    taxis: {
      collection: 'taxicustom',
      via: 'drivers',
      dominant: true
    }
  }
});
