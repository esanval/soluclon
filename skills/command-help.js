//
// Command: help
//
module.exports = function (controller) {

    controller.hears(["help", "who"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.enrichCommand(message, ".commons") + ": shows metadata about myself";
        text += "\n- " + bot.enrichCommand(message, "room") + ": Clones a new room from this one";
        text += "\n- " + bot.enrichCommand(message, "añadir") + ": Añade una persona al espacio";
        text += "\n- " + bot.enrichCommand(message, "help") + ": spreads the word about my skills";
        bot.reply(message, text);
    });
}
