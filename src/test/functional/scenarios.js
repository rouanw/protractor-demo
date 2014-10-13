'use strict';

describe('my tests', function() {

  beforeEach(function(){
    browser.ignoreSynchronization = true;
  });

  it('should do stuff', function() {
    browser.get('http://www.google.co.za');
  });

});
