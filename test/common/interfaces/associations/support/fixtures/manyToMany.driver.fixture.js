/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'driverTable',
  identity: 'driver',
  connection: 'associations',

  // migrate: 'drop',
  attributes: {
    name: 'string',
    taxis: {
      collection: 'taxi',
      via: 'drivers',
      dominant: true
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.name;
      return obj;
    }
  }
});
