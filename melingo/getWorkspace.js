var watson = require("watson-developer-cloud");

var conversation = new watson.ConversationV1({
  username: '3a00f7a8-7d06-4c43-a71c-13ad6c790969',
  password: 'O5yRgmAjhWDI',
  version_date: '2017-05-26'
});

// conversation.listWorkspaces(function(err, response) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(JSON.stringify(response, null, 2));
//   }
//  });

var params = {
  workspace_id: '90e15576-cc14-458c-a2e6-0c583ff8de1c',
  export: true
};

conversation.getWorkspace(params, function(err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});