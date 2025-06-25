/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'paymentTable',
  identity: 'payment',
  connection: 'associations',

  attributes: {
    amount: 'integer',
    type: 'string',
    apartment: {
      model: 'apartment',
      columnName: 'apartment_id'
    },
    a_customer: {
      model: 'Customer',
      columnName: 'customer_id'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.type;
      return obj;
    }
  }

});
