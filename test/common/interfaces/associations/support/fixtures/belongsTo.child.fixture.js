/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'paymentbelongsTable',
  identity: 'paymentbelongs',
  connection: 'associations',

  attributes: {
    amount: 'integer',
    type: 'string',
    customer: {
      model: 'Customerbelongs',
      columnName: 'customer_belongs'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.type;
      return obj;
    }
  }

});
