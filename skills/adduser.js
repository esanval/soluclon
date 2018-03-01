module.exports = function(controller) {
  controller.hears(["añadir"], 'direct_message,direct_mention', function(bot, message) {
    var email = message.user;
    var CiscoSpark = require('node-ciscospark');
    var async = require('async');
    var spark = new CiscoSpark(process.env.SPARK_TOKEN);

    bot.startConversation(message, function(err, convo) {
      var question = "A quién deseas añadir a la sala?";
      convo.ask(question, [{
        default: true,
        callback: function(response, convo) {
          var membershipParameters = {
            "roomId": message.channel,
            "personEmail": response.text,
            "isModerator": true
          };
          var newUser = response.text;
          convo.say("Añadiendo al espacio el usuario" + "**" + newUser + "**...");
          async.waterfall([
            function(callback) {
              spark.memberships.create(membershipParameters, function(err, response) {
                if (err) {
                  console.log(err);
                  convo.say("No hemos podido crear el usuario: " + newUser);
                  convo.next();
                }
              }
            }
          ]);
        }
      }]);
    });
  });
}