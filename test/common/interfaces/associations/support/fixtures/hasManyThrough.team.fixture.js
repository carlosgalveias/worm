/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'teamTable',
  identity: 'team',
  connection: 'associations',

  attributes: {
    name: 'string',
    mascot: 'string',
    stadiums: {
      collection: 'Stadium',
      through: 'venue',
      via: 'team'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.mascot;
      return obj;
    }
  }

});
