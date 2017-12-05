var express = require('express');
var request = require('request');
var melingoSender = express();

function getMax(arr, prop) {
    var max;
    for (var i=0 ; i<arr.length ; i++) {
        if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i];
    }
    return max;
}

module.exports = {
    getHighestRanked(json) {
        json = json.replace(/\//g, "");
        var melingoResponse = JSON.parse(json);
        var intents = melingoResponse.applicationjson.intents;
        var output = '';
        if(intents[0]){
            output+= intents[0].intent;
            // console.log('output1: '+output);
        }
        if(melingoResponse.applicationjson.entities[0]){
            output+=' '+melingoResponse.applicationjson.entities[0].entity;
            // console.log('po po po');
            // console.log(melingoResponse.applicationjson.entities[0].entity);
            // console.log('output2: '+output);
        }
        console.log('output melingo: '+output);
        // console.log(output);
        //if(melingoResponse.applicationjson)
        // obj = [Object.keys(melingoResponse)[0]];
        // var newJson = JSON.stringify(obj);
        // console.log(intents);
        // console.log('poooooo:');
        return output;
        // var intents = melingoResponse.app.intents;
        // var maxIntent = getMax(intents, "confidence");
        // return maxIntent.intent;
    },
     getIntentResponseExample(json) {
         var intent = JSON.parse(json);
         var output = intent.output.text;
         output = JSON.stringify(output);
         output = output.replace(/^\[([\s\S]*)]$/, "$1");
         output = output.replace(/"/g,"");
         return output;
    }
}