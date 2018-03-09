var should = require('should')

require('..')()

describe('LOGORAN-RUN with add-module-exports', function() {
  describe('GET /', function(){
    this.timeout(20000)
    it('respond sucess', function(){
      require(__dirname + '/bin/export').should.equal('foo');  
    })
  })
});