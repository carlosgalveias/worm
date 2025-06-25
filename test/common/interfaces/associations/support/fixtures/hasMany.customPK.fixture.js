/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'apartmentTable',
  identity: 'apartment',
  connection: 'associations',
  autoPK: false,

  attributes: {
    building: 'string',
    number: {
      type: 'string',
      primaryKey: true,
      unique: true
    },
    payments: {
      collection: 'Payment',
      via: 'apartment'
    }
  }

});
