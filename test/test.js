var request = require('supertest');
var app = require('../index.js');

describe('GET /nonexistentpage', function () {
  it('should respond with 404 page not found', function (done) {
    request(app)
      .get('/nonexistentpage')
      .expect(404)
      .end(function (err, res) {
        if (err) {
          // Log the error and pass it to the done callback
          console.error(err);
          return done(err);
        }
        // Test passed
        done();
      });
  });
});

