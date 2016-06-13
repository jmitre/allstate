var http = require('http')
var fs = require('fs');

function handleRequest(req, res){
  fs.readFile('home.html', function(err, data){
    //res.write(data);
    if(req.url === '/first-of-pair')
      res.end('<p>Secret Path discovered!!!</p>');
    else if (req.url === '/second-of-pair')
      res.end('<p>Secret Path 2 discovered!!!</p>');
    else if(req.url === '/the-pair')
      res.end('<p>Secret Path 3 discovered!!!</p>');
    else if(req.url.slice(0,9)==='/greeting'){
      var names = ['Unamed','Friend'];
      if(req.url.split('=')[1] != undefined){
        var bothNames = req.url.split('?fname=')[1];
        names = bothNames.split('?lname=');
      }
      else {
        var name ='';
      }
      res.end('<p>Welcome ' + (names[0]||'') + (names[1] ? " " : "")+ (names[1]||'') + '!</p>')
    }
    else if (req.url !== '/'){
      res.end('<p>Error Code 404 - I would make a wittey joke, but I can\'t spel</p>');
    }
    res.end(data);
  });

}


var server = http.createServer(handleRequest);
server.listen(3000);
