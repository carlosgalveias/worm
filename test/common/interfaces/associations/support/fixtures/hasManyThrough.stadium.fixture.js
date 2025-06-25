/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  tableName: 'stadiumTable',
  identity: 'stadium',
  connection: 'associations',

  attributes: {
    name: 'string',
    teams: {
      collection: 'Team',
      through: 'venue',
      via: 'stadium'
    }
  }

});
