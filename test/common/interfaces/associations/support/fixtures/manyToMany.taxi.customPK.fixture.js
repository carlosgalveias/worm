/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'taxiTableCustomPK',
  identity: 'taxicustom',
  connection: 'associations',

  autoPK: false,

  attributes: {
    vin: {
      type: 'string',
      primaryKey: true
    },
    medallion: 'integer',
    drivers: {
      collection: 'drivercustom',
      via: 'taxis'
    }
  }
});
