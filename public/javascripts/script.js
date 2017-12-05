/**
 * Created by erantoledano on 18/09/2017.
 */

botInfo = {
    direction: "right",
    avatar: "http://placehold.it/50/FA6F57/fff&text=BOT",
    name: "Hot-Bot",
    strongClass: "pull-right",
    smallClass: ""
};

ClientInfo = {
    direction: "left",
    avatar: "http://placehold.it/50/55C1E7/fff&text=U",
    name: "You",
    stronglass: "",
    smallClass: "pull-right"
};

function sendMessage(from,message) {
    var info;
    if(from === "bot") {C
        info = botInfo
    } else {
        info = ClientInfo
    }
    var html = '<li class="'+ info.direction +' clearfix"><span class="chat-img pull-'+ info.direction +'">\
        <img src="'+ info.avatar +'" alt="User Avatar" class="img-circle" />\
            </span>\
            <div class="chat-body clearfix">\
            <div class="header">\
            <small class="text-muted '+info.smallClass+'"><span class="glyphicon glyphicon-time"></span>Now</small>\
        <strong class="'+info.strongClass+' primary-font">'+ info.name +'</strong>\
        </div>\
        <p class="pull-right" dir="rtl">' +message+ '</p>\
        </div>\
        </li>';

    $('.chat').append(html);
    $('.panel-body').animate({scrollTop: $('.panel-body').prop("scrollHeight")}, 100);

}

function sendGreeting() {
    getBotMessage("hello", {}, function (json) {
        $('.chat').data('context',json.context);
        sendMessage("bot", json.output[0]);
    });
}

function getBotMessage(message, context, callback) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3200/message",
        "method": "POST",
        "headers": {
            "cache-control": "no-cache"
        },
        "data": {
            "message": message,
            "context": context
        }
    };


    $.ajax(settings).done(function (response) {
        callback(response);
    });
}
