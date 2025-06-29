/**
 * Module Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js')),
    _ = require('lodash');

// Require Fixtures
var fixtures = {
  UserFixture: require('./fixtures/crud.fixture'),
  ProjectFixture: require('./fixtures/schema.fixture'),
  AlterFixture: require('./fixtures/alter.fixture'),
  CreateFixture: require('./fixtures/create.fixture'),
  CustomFixture: require('./fixtures/custom.fixture'),
  DropFixture: require('./fixtures/drop.fixture'),
  SafeFixture: require('./fixtures/safe.fixture')
};


module.exports = function(newFixtures, cb) {
  if(!cb){
    cb = newFixtures;
    newFixtures = undefined;
  }
  newFixtures = newFixtures || {};
  fixtures = _.defaults(newFixtures, fixtures);

  var waterline = new Waterline();

  Object.keys(fixtures).forEach(function(key) {
    waterline.loadCollection(fixtures[key]);
  });

  var connections = { migratable: _.clone(Connections.test) };

  waterline.initialize({ adapters: { wl_tests: Adapter }, connections: connections }, function(err, _ontology) {
    if(err) return cb(err);
    cb(null, { waterline: waterline, ontology: _ontology });
  });

};
