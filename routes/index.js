var express = require('express');

var router = express();
var bodyParser = require('body-parser');
var url = require('url');
var chatbot = require('./../melingo/ChatbotManager');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/message', function (req, res, next) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var message = req.query.text;
    //res.send('po po po: '+text);
    chatbot.getBotMessage(message, res);
});

/* GET home page. */
router.post('/getWorkspace', function (req, res, next) {
  const workspaceHandler = require('./../melingo/getWorkspace') 
});

module.exports = router;
