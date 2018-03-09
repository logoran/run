var request = require('request');
var should = require('should')

describe('LOGORAN-RUN with cli', function() {
  it('should logoran-run ' + __dirname + '/bin/www', function(done) {
    var coffee = require('coffee');

    coffee.spawn('logoran-run ' ,[__dirname + '/bin/www'])

    request('http://127.0.0.1:3000', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body) // Show the HTML for the Google homepage.
        body.should.equal('Hello Logoran in app.js');
        
        done()
      }
    })
    
  })
  
  it('should logoran-run ' + 'test/bin/www', function(done) {
    var coffee = require('coffee');

    coffee.spawn('logoran-run ' ,['test/bin/www'])

    request('http://127.0.0.1:3000', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body) // Show the HTML for the Google homepage.
        body.should.equal('Hello Logoran in app.js');
        
        done()
      }
    })
    
  })
  
  it('should use async/await(ES7) logoran-run ' + __dirname + '/bin/async', function(done) {
    var coffee = require('coffee');

    coffee.spawn('logoran-run ' ,[__dirname + '/bin/async'])
    
    request('http://127.0.0.1:3000', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body) // Show the HTML for the Google homepage.
        body.should.equal('Hello Logoran in app.js');
        
        done()
      }
    })
    
  })
  
  it('should use async/await(ES7) logoran-run ' + 'test/bin/async', function(done) {
    var coffee = require('coffee');

    coffee.spawn('logoran-run ' ,['test/bin/async'])
    
    request('http://127.0.0.1:3000', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body) // Show the HTML for the Google homepage.
        body.should.equal('Hello Logoran in app.js');
        
        done()
      }
    })
    
  })

  
})
