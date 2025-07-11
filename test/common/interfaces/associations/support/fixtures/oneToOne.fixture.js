/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports.user_resource = Waterline.Collection.extend({

  tableName: 'user_resourceTable',
  identity: 'user_resource',
  connection: 'associations',

  attributes: {
    name: 'string',
    quantity: 'integer',
    profile: {
      model: 'profile',
      columnName: 'profile_id'
    }
  }

});

module.exports.profile = Waterline.Collection.extend({

  tableName: 'profileTable',
  identity: 'profile',
  connection: 'associations',

  attributes: {
    name: 'string',
    level : 'integer',
    user: {
      model: 'user_resource',
      columnName: 'user_resource_id'
    }
  }

});
