var express = require('express');
var request = require('request');
var jsonHandler = require('./JsonHandler')
var melingoSender = express();

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

module.exports = {
    getMelingoResponseOnMessage(message , callback) {

        // Configure the request
        var options = {
            url: 'http://textapi.melingo.com:8000/get-intent-and-entity',
            method: 'POST',
            headers: headers,
            body: message,
            // form: {'userID': 'KPMG', 'query': 'מעוניין לחדש את ביטוח הרכב'}
            form: {'userID': 'KPMG', 'query': message}
        }
        console.log('Hiiii44');
        // Start the request
        // callback('test conversation');
        //todo: uncomment
        // request.post({url:'http://textapi.melingo.com:8000/get-intent-and-entity', form: {'userID': 'KPMG', 'query': message}},
        //     function(error, response, body){
        //         if (!error && response.statusCode == 200) {
        //                     body = body.toString('utf-8');
        //                     console.log('Hiiii111'+body);
        //                     // Send back highest rated intent.
        //                     callback(jsonHandler.getHighestRanked(body));
        //                     //callback(body);
        //                 }else{
        //                     console.log('Error_oshry:');
        //                     console.log(error);
        //                     // console.log('Error:'+response.statusCode);
        //                 }
        // });




        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                body = body.toString('utf-8');
                console.log('Hiiii111');
                // Send back highest rated intent.
                callback(jsonHandler.getHighestRanked(body));
                // callback(body);
            }else{
                console.log('Error_oshry:');
                console.log(error);
                // console.log('Error:'+response.statusCode);
            }
        })
   
    }
}
