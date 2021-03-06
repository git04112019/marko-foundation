require('marko/node-require').install();
require('marko/express'); //enable res.marko

var express 		= require('express');
var serveStatic     = require('serve-static');
var path            = require('path');
var favicon 		= require('serve-favicon');
var app 			= express();
var port 			= process.env.PORT || 8080;

// Resources for client
app.use('/public', express.static('public'));
app.use(favicon(path.join(__dirname, 'public/assets/img', 'favicon.ico') ));

var templatePages = './src/pages';
var indexTemplate = require(templatePages+'/index.marko');
// var test = require(src+'/page.marko');

var assets = './public/assets';


app.get('/', function(req, res) {
    res.marko(indexTemplate, {
            name: 'Frank',
            count: 30
        });
    // use mongoose to find users
    // var query = User.find({}).limit(10);
    // query.exec(function (err, user) {
    //     if (err) {
    //         throw Error;
    //     }
    //     res.marko(indexTemplate, {
    //     	users: user
    //     });
    //     //// res.render('home', {users: docs});
    // });
});


app.listen(port, function() {
    console.log('Server started! Try it out:\nhttp://localhost:' + port + '/');

    // if (process.send) {
    //     process.send('online');
    // }
});
