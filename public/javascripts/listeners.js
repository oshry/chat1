$(document).ready(function(){
    $('#chatForm').on('submit', function(e) {
        e.preventDefault();
        var input = $("input[name='inputMessage']").val();
        var context = $('.chat').data('context');
        if (!context) {
            context = {}
        }

        // Remove input text
        $("input[name='inputMessage']").val('');

        // indicating this is client message - showing message of user on screen
        sendMessage('client', input);

        // Send to server
        getBotMessage(input, context, function(response) {
            $('.chat').data('context', context);
            if (response > 0)
                // Bots respond from conversation
                sendMessage("bot", response);
            else
                sendMessage("bot", "אני לא בטוח שאני מבין, אתה יכול לנסח מחדש?");
        });
    });

});
