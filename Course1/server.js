var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    cons = require('consolidate');

// assign the swig engine to .html files
app.engine('html', cons.swig);

// set .html as the default extension
app.set('view engine', 'html');

//set location for the HTML files
app.set('views', __dirname + '/views');

//use JSON parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

// Handler for internal server errors
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render('error_template', { error: err });
}

app.get('/',function(req, res, next) {
    var doc = {name:'Sample Node server - site.'};
    res.render('index', doc);
});

app.get('*',function(req, res){
    res.status(404).render('error',
        {
            code: 404,
            message: 'not found'
        });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server has started and its listening on: 3000');