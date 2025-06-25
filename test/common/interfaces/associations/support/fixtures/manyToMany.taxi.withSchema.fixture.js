/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'taxiWithSchemaTable',
  meta: {
    schemaName: 'bar'
  },
  identity: 'taxiwithschema',
  connection: 'associations',

  // migrate: 'drop', 
  attributes: {
    medallion: 'integer',
    drivers: {
      collection: 'driver',
      via: 'taxis'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.medallion;
      return obj;
    }
  }
});
