var watson = require('watson-developer-cloud');
// Imports the Google Cloud client library
const Translate = require('@google-cloud/translate');

var conversation = watson.conversation({
    username: 'b945b670-8860-451e-957b-bb5637133b3e',
    password: 'C70oPs1BXsDC',
    version: 'v1',
    version_date: '2017-05-26'
});

module.exports = {
    getMessage(req, res, next) {

        // Instantiates a client
        const translate = Translate();

        // The target language, e.g. "ru"
        const target = 'en';

        // Translates the text into the target language. "text" can be a string for
        // translating a single piece of text, or an array of strings for translating
        // multiple texts.
        translate.translate(req.body.message, target)
            .then((results) => {
                let translations = results[0];
                translations = Array.isArray(translations) ? translations : [translations];

                translations.forEach((translation, i) => {
                    conversation.message({
                        workspace_id: 'a9970e0c-e197-47c4-8d1a-3f733e055a8a',
                        input: {'text': translation },
                        context: req.body.context
                    },  function(err, response) {
                        if (err)
                            res.send('error');
                        else{
                            console.log(response);
                            var results = {
                                input: req.body.message,
                                output: response.output.text,
                                context: response.context
                            };
                            res.send(results);
                        }
                    });

                    console.log(`${text[i]} => (${target}) ${translation}`);
                });
            })
            .catch((err) => {
                console.error('ERROR:', err);
            });
    }
}
