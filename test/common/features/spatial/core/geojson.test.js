var assert = require('assert');
var _ = require('lodash');

describe('spatial feature', function () {  var path = require('path');
  var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));
  var defaults = { migrate: 'alter' };
  var waterline;

  var Models = require('../support/models.js');
  var Fixtures = require('../support/fixtures.js');
  var Model;

  describe('geojson', function () {

    it('shoud create geometries', function (done) {
      Model.create({
          name: 'pointA',
          prop1: 'foo',
          marker: Fixtures.point
        })
        .then(function (model) {
          assert(_.isObject(model.marker));
          assert.equal(model.marker.type, 'Point');
          assert(model.id);

          done();
        })
    })

    it('should return geojson features if queried normally', function (done) {
      Model.find().then(function (models) {
        assert(models);
        assert(models.length)
        done();
      });
    });
    it.skip('should return a FeatureCollection if queried with .asGeojson()', function (done) {
      done();
    })
  });

  before(function(done) {
    waterline = new Waterline();
    waterline.loadCollection(Models);

    var connections = { geoConnection: _.clone(Connections.test) };
    Adapter.teardown('geoConnection', function adapterTeardown(){
      waterline.initialize({ adapters: { wl_tests: Adapter }, connections: connections, defaults: defaults }, function(err, ontology) {
        if(err) return done(err);
        Model = ontology.collections['geomodel'];
        done();
      });
    });
  });
  after(function(done) {
    done()
    if(!Adapter.hasOwnProperty('drop')) {
      waterline.teardown(done);
      done()
    } else {
      Model.drop(function(err1) {
        done()
        waterline.teardown(function(err2) {
          return done(err1 || err2);
        });
      });
    }
  });

});;
