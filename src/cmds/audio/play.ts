import * as path from "path";
import * as Commando from "discord.js-commando";
import { VoiceConnection } from "discord.js";

module.exports = class PlayAudioCommand extends (
  Commando.Command
) {
  constructor(client: Commando.CommandoClient) {
    super(client, {
      name: "play",
      group: "audio",
      memberName: "play",
      description: "Plays some audio",
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async run(message: Commando.CommandoMessage, args: string | string[]) {
    console.log("--play command--");
    if (
      message.member && message.member.roles.cache.some((r) =>
        ["Volunteer", "Paizo Society", "Magnetrons", "PlayAudio"].includes(
          r.name
        )
      )
    ) {
      const { voice } = message.member;

      if (!voice.channelID) {
        return message.reply("You must be in a voice channel.");
      }

      console.log("connecting to voice");
      if (voice.channel) {
        return voice.channel.join().then((connection: VoiceConnection) => {
          console.log("playing " + path.join(__dirname, args + ".wav"));
          connection.play(path.join(__dirname, args + ".wav"));
          // const dispatcher = connection.play(path.join(__dirname, args + ".wav"));
          console.log("played");
          // dispatcher.on("finish", (finish) => {
          //   //console.log("leaving voice")
          //   //voice.channel.leave()
          // });
          return message;
        });
      }
      else {
        return message.reply("Unable to join Voice Channel");
      }
    }
    else {
      console.log("no permission");
      message.reply("You don't have permission for this command.");
      return message;
    }
  }
};
