var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  identity: 'compositePrimaryKey',
  tableName: 'compositePrimaryKeyTable',
  connection: 'compositePrimaryKeyConnection',
  autoPK: false,

  attributes: {
    name: 'string',
    pkOne: {
      type: 'integer',
      primaryKey: true
    },

    pkTwo: {
      type: 'string',
      primaryKey: true
    }
  }

});

