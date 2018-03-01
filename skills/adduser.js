controller.hears(["add", "agregar"], 'direct_message,direct_mention', function(bot, message) {
var email = message.user;
var CiscoSpark = require('node-ciscospark');
var async = require('async');
var spark = new CiscoSpark(process.env.SPARK_TOKEN);
console.log("Paso por aquí???");

bot.startConversation(message, function(err, convo) {
  var question = "A quién deseas añadir a la sala?";
  });
});
