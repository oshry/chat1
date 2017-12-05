var express = require('express');
var path = require('path');
const melingoConnection = require('./MelingoConnection');
var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var jsonHandler = require('./JsonHandler')

var conversation = new ConversationV1({
    // username: 'cadc5eca-e0ec-432c-92ef-e4c01959fecd',
    username: '17250809-0680-43e6-bc5b-3444dd7d18bf',
    // password: 'zBo0LQRCkneD',
    password: 'qcYSXOcCVZ3x',
    version_date: ConversationV1.VERSION_DATE_2017_05_26
});

module.exports = {
    getBotMessage(messageFromUser, res) {
        // console.log('Request body received:' + req);
        console.log('oshry3: '+messageFromUser);
        melingoConnection.getMelingoResponseOnMessage(messageFromUser , function (intentString) {
            console.log("Message from user");
            console.log(intentString);
            //intentString = intentString.intent;
            // var params = {
            //     workspace_id: '32bc6bb6-27b8-4912-a022-12f49165cbff',
            //     intent: intentString,
            //     // intent: 'What\'s the weather?',
            //     export: true
            // };

            // conversation.getIntent(params, function(err, response) {
            //     if (err) {
            //         console.error('Conversaton error111'+ err);
            //     } else {
            //         var botResponse = jsonHandler.getIntentResponseExample(JSON.stringify(response, null, 2));
            //         res.header("Content-Type",'text/html');
            //         res.send(botResponse);
            //     }
            // });
            conversation.message({
                input: { text: intentString },
                workspace_id: '349764b5-9487-4c71-bee5-76401d48b71a'
            }, function(err, response) {
                if (err) {
                    console.error('Conversaton error222'+ err);
                }else{
                    //var blat = JSON.parse(JSON.stringify(response, null, 2));
                    // var blat = response);

                    // console.log(blat);
                    // console.log(blat.output.text);
                    //var blat = JSON.stringify(response., null, 2);

                    var botResponse = jsonHandler.getIntentResponseExample(JSON.stringify(response, null, 2));
                    res.header("Content-Type",'text/html');
                    console.log('Yessss');
                    console.log(botResponse);
                    res.send(botResponse);
                    // console.log(JSON.parse(response.output));
                }
            });
        });


    }

}
