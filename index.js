var express = require('express');
var app = express();

var request = require('request');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/imagesize/', function (req, res) {
    res.render('pages/imagesize');
});

app.post('/push', function (req, res) {
    request.post('https://api.goroost.com/api/push', {
        'auth' : {
            'user' : 'jihv65d7wsm9dqlxaqyi5vsqp9w4d0um',
            'pass' : '2gqlqi6l4qvo6id8rpfggzjl43blid8n'
        },
        'json' : true,
        'body' : {
            alert: 'Prenumeruokite itin svarbių DELFI naujienų momentinius pranešimus tiesiai į jūsų kompiuterį.',
            url: 'http://google.com'
        }        
    }); 
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


