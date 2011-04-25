/**
 * Additional content section / block functions for body.
 */

var calipso = require("../../../../lib/calipso");

exports = module.exports = function(req,options,callback) {
      
      /**
       *  Get additional content for blocks in the template
       */  
      calipso.lib.step(
        function getContent() {          
          options.getContent(req,"home-col1",this.parallel());
          options.getContent(req,"home-col2",this.parallel());
          options.getContent(req,"home-col3",this.parallel());
        },
        function done(err,col1,col2,col3) {            
          callback({col1:col1,col2:col2,col3:col3});
        }
      )
            
      
}