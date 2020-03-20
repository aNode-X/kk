const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const db = require("quick.db");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config.js");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const Enmap = require("enmap");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const dbg = new Enmap({ name: "Giveaway" });
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const r1 = require("snekfetch");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyC-cxrwR4E2lizvODfupRtCIFht7taB_FM");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);

  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " JavaScript " ]`);
  console.log(
    `Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`
  );

  client.user.setActivity(` ${prefix}help-me `, { type: "Playing" });
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "Emojis1")) {
    /// امر القائمه
    let help = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL).setDescription(`**
           Clear The Space In (< a) To (<a)
<a:overify:688707812225712152> | < a:overify:688707812225712152>
<a:bc:688710946981806104> | < a:bc:688710946981806104>
<a:no:688711030364176486> | < a:no:688711030364176486>
<a:yes:688710968821547010> | < a:yes:688710968821547010>
<a:Really:688728781522993218> | < a:Really:688728781522993218>
<a:nitro:688728775801962518> | < a:nitro:688728775801962518>
<a:wtf:688728780776538164> | < a:wtf:688728780776538164>
<a:yeee:688728778356162628> | < a:yeee:688728778356162628>
<a:RinCaT:688728778289315853> | < a:RinCaT:688728778289315853>
<a:wow:688728778175676437> | < a:wow:688728778175676437>
<a:Rainbow:688728776519057468> | < a:Rainbow:688728776519057468>
<a:Orangejust:688728776162541640> | < a:Orangejust:688728776162541640>
<a:cryr:688728772589125731> | < a:cryr:688728772589125731>
<a:dumb:688728773084053554> | < a:dumb:688728773084053554>
<a:craft:688728772639195290> | < a:craft:688728772639195290>
<a:heartss:689024205584728095> | < a:heartss:689024205584728095>
**`);
    message.channel.sendEmbed(help);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "Emojis2")) {
    /// امر القائمه
    let help = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL).setDescription(`**
           Clear The Space In (< a) To (<a)
<a:FortSteve:688728775185137666> | < a:FortSteve:688728775185137666>
<a:Gun:688728774103400674> | < a:Gun:688728774103400674>
<a:eate:688728774099075169> | < a:eate:688728774099075169>
<a:Dance1:688728774174310569> | < a:Dance1:688728774174310569>
<a:shet:688728780436668540> | < a:shet:688728780436668540>
<a:Pin:688728775789379705> | < a:Pin:688728775789379705>
<a:gifwin:688728774245744677> | < a:gifwin:688728774245744677>
<a:mad:688728775181336587> | < a:mad:688728775181336587>
<a:left:688728774904250570> | < a:left:688728774904250570>
<a:X1:688734748276817929> | < a:X1:688734748276817929>
<a:Check:688734712294015082> | < a:Check:688734712294015082>
<a:warn:688734871660527753> | < a:warn:688734871660527753>
<a:ofu:688790982375899157> | < a:ofu:688790982375899157>
<a:need:688791009706115077> | < a:need:688791009706115077>
<a:LOL:688791083337252930> | < a:LOL:688791083337252930>
<a:heartr:689024243991969872> | < a:heartr:689024243991969872>
**`);
    message.channel.sendEmbed(help);
  }
});

client["on"]("message", message => {
  if (message["author"]["bot"]) return undefined;
  let args = message["content"]["split"](" ");
  if (message["content"]["startsWith"](prefix + "kick")) {
    if (!message["member"]["hasPermission"]("MANAGE_GUILD"))
      return message["channel"].send(`**:x:\`| You Not Have Permission\`**`);
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[1])
    );
    if (!user)
      return message["channel"]["send"](
        `**Usage | ${prefix}kick \`[User/UserID]\`**`
      );
    let Reason = message["content"]
      ["split"](" ")
      .slice(2)
      .join(" ");
    if (!Reason)
      return message["channel"]["send"](`:x:| **Please Type Reason**`);
    message.guild.member(user).kick(Reason);
    message["channel"]["send"](
      `**:white_check_mark: | Done Has Kicked <a:overify:688707812225712152><@${user.id}> Reason: \`${Reason}\`**`
    );
  }
});

client["on"]("message", message => {
  var prefix = "#";
  if (message["author"]["bot"]) return undefined;
  let args = message["content"]["split"](" ");
  if (message["content"]["startsWith"](prefix + "ban")) {
    if (!message["member"]["hasPermission"]("MANAGE_GUILD"))
      return message["channel"].send(`**:x:\`| You Not Have Permission\`**`);
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[1])
    );
    if (!user)
      return message["channel"]["send"](
        `**Usage | ${prefix}ban \`[User/UserID]\`**`
      );
    let Reason = message["content"]
      ["split"](" ")
      .slice(2)
      .join(" ");
    if (!Reason)
      return message["channel"]["send"](`:x:| **Please Type Reason**`);
    message.guild.member(user).ban(Reason);
    message["channel"]["send"](
      `**:white_check_mark: | Done Has Banned <@${user.id}> Reason: \`${Reason}\`**`
    );
  }
});


client.on("guildMemberAdd", member => {
  let channel = member.guild.channels.get("688802738704089213");
  var h = member.user;
  let embed = new Discord.RichEmbed()

    .setColor("RANDOM")
    .setThumbnail(h.avatarURL)
    .setTitle(
      `Weclome The The Server <a:heartss:689024205584728095>${member.user.username}  `
    )
    .addField(
      "Created At",
      `${moment(member.user.createdAt).format("D/M/YYYY ")} `
    )
    .addField("JoinedAt", `${moment(member.joinedAt).format("D/M/YYYY  ")} `);
  channel.send({ embed: embed });
});

client.on("guildMemberRemove", member => {
  let channel = member.guild.channels.get("688802738704089213");
  var h = member.user;
  let embed = new Discord.RichEmbed()

    .setColor("RANDOM")
    .setThumbnail(h.avatarURL)
    .setTitle(
      `See You Again <a:cryr:688728772589125731><a:heartss:689024205584728095>${member.user.username}  `
    )
    .addField(
      "Created At",
      `${moment(member.user.createdAt).format("D/M/YYYY ")} `
    )
    .addField("JoinedAt", `${moment(member.joinedAt).format("D/M/YYYY  ")} `);
  channel.send({ embed: embed });
});
/*

*/
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "clear")) {
    if (!message.channel.guild)
      return message.reply("⛔ | This Command For Servers Only!");
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "⛔ | You dont have **MANAGE_MESSAGES** Permission!"
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "⛔ | I dont have **MANAGE_MESSAGES** Permission!"
      );
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 99)
      return message
        .reply("**Can't**")
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";
    message.channel
      .fetchMessages({ limit: messagecount + 1 })
      .then(messages => message.channel.bulkDelete(messages));
    message.channel
      .send(
        `\`${args}\`** : <a:overify:688707812225712152> Cleared**`
      )
      .then(messages => messages.delete(5000));
  }
});

client.on("guildMemberAdd", member => {

  var role = member.guild.roles.find("name", "Ultra ★ Members"); 
  member.addRole(role); 
});

client.on("message", message => {
  if (message.author.bot) return; 
  if (message.content === prefix + "help-me") {
    message.channel.sendMessage(`**
 <a:warn:688734871660527753>╔[❖════════════❖]╗<a:warn:688734871660527753>
>                       『#helpjs
<a:warn:688734871660527753> ╚[❖════════════❖]╝<a:warn:688734871660527753>
**`); 
  } 
}); 

client.on("message", message => {
  if (message.author.bot) return; 
  if (message.content === prefix + "helpjs") {
    message.channel.sendMessage(`**
 ╔[❖════════════❖]╗
           『<a:Earth:690164594353766421>#helpjs-Public
           『<a:Music:690164856124735511>#helpjs-Music
           『<:Game:690165871091515417>#helpjs-Games
           『<:Admin:690166400182255698>#helpjs-admins
 ╚[❖════════════❖]╝
**`); 
  } 
}); 

client.on("message", message => {
  if (message.author.bot) return; 
  if (message.content === prefix + "helpjs-Public") {
    message.channel.sendMessage(`**
 ╔[❖════════════❖]╗
           『<a:Earth:690164594353766421>#helpjs-Public-1    [كود كريدت برو بوت]
           『<a:Earth:690164594353766421>#helpjs-Public-2    [كود التحقق بألارقام و تاخذ رتبة]
           『<a:Earth:690164594353766421>#helpjs-Public-3    [توب برو بوت]
           『<a:Earth:690164594353766421>#helpjs-Public-4    []
           『<a:Earth:690164594353766421>#helpjs-Public-5    []
 ╚[❖════════════❖]╝
**`); 
  } 
}); 

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "helpjs-Public-1")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/zxMLQ5cC`)
    message.author.send(embed) 
   
  }

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "helpjs-Public-2")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(` https://pastebin.com/54U6FXQp`)
    message.author.send(embed) 
  }
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "helpjs-Public-3")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/JnLcqwZ5`)
    message.author.send(embed) 
  }
})











































client.on("message", message => {
  if (message.author.bot) return; 
  if (message.content === prefix + "helpjs-Admins") {
    message.channel.sendMessage(`**
 ╔[❖════════════❖]╗
           『<:Admin:690166400182255698>#helpjs-Admins-1    [كود بان و طرد بل ايدي + المنشن]
           『<:Admin:690166400182255698>#helpjs-Admins-2    [كود برودكاست بروبوت]
           『<:Admin:690166400182255698>#helpjs-Admins-3    [كود لوق]
           『<:Admin:690166400182255698>#helpjs-Admins-4    [كود قيف اواي]
           『<:Admin:690166400182255698>#helpjs-Admins-5    [كود صنع الوان]
 ╚[❖════════════❖]╝
**`); 
  } 
}); 


client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "helpjs-Admins-1")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/Gv7tgxqQ`)
    message.author.send(embed) 
  }
})
client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "helpjs-Admins-2")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/HGdkkPwF`)
    message.author.send(embed) 
  }
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "helpjs-Admins-3")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/545Cb7yT`)
    message.author.send(embed) 
  }
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "helpjs-Admins-4")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/QpLcEejK`)
    message.author.send(embed) 
  }
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "helpjs-Admins-5")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/0Kyx41kN`)
    message.author.send(embed) 
  }
})




































client.on("message", message => {
  if (message.author.bot) return; 
  if (message.content === prefix + "helpjs-Music") {
    message.channel.sendMessage(`**
 ╔[❖════════════❖]╗
           『<a:Music:690164856124735511>#helpjs-Music-1    [كود ميوزك]
           『<a:Music:690164856124735511>#helpjs-Music-2    []
           『<a:Music:690164856124735511>#helpjs-Music-3    []
           『<a:Music:690164856124735511>#helpjs-Music-4    []
           『<a:Music:690164856124735511>#helpjs-Music-5    []
 ╚[❖════════════❖]╝
**`); 
  } 
}); 

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "helpjs-Music-1")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/tdz58Zpz`)
    message.author.send(embed) 
  }
})


























































































client.on("message", message => {
  // تقديم اداره
  if (message.content.startsWith("#apply")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    let channel = message.guild.channels.find("name", "𝗦ubmits");
    if (!channel)
      return message.reply(
        "****"
      );
    if (channel) {
      message.channel.send(message.member + "`1`").then(m => {
        m.edit(message.member + ", Your Name");
        m.channel
          .awaitMessages(m1 => m1.author == message.author, {
            maxMatches: 1,
            time: 60 * 1000
          })
          .then(m1 => {
            m1 = m1.first();
            var name = m1.content;
            m1.delete();
            m.edit(message.member + "`2`").then(m => {
              m.edit(message.member + ", Your Age");
              setTimeout(() => {
                m.delete();
              }, 2500);
              m.channel
                .awaitMessages(m2 => m2.author == message.author, {
                  maxMatches: 1,
                  time: 60 * 1000
                })
                .then(m2 => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete();
                  message.channel.send(message.member + "`3`").then(m => {
                    m.edit(message.member + "Did You Help Us? ");
                  setTimeout(() => {
                      m.delete();
                    }, 2500);
                    m.channel
                      .awaitMessages(m1 => m1.author == message.author, {
                        maxMatches: 1,
                        time: 60 * 1000
                      })
                      .then(m3 => {
                        m3 = m3.first();
                        var ask = m3.content;
                        m3.delete();
                        message.channel.send(message.member + "`4`").then(m => {
                          m.edit(message.member + "Did you know all Rules? ");
                          setTimeout(() => {
                            m.delete();
                          }, 2500);
                          m.channel
                            .awaitMessages(m1 => m1.author == message.author, {
                              maxMatches: 1,
                              time: 60 * 1000
                            })
                            .then(m4 => {
                              m4 = m4.first();
                              var ask2 = m4.content;
                              m4.delete();
                              message.channel
                                .send(message.member + "``5``")
                                .then(m => {
                                  m.edit(message.member + "How Many Hours Online ");
                                  m.channel
                                    .awaitMessages(
                                      m1 => m1.author == message.author,
                                      { maxMatches: 1, time: 60 * 1000 }
                                    )
                                    .then(m5 => {
                                      m5 = m5.first();
                                      var ask3 = m5.content;
                                      m5.delete();
                                      m.edit(
                                        message.member + "<a:overify:688707812225712152> "
                                      ).then(mtime => {
                                        setTimeout(() => {
                                          let embed = new Discord.RichEmbed()
                                            .setAuthor(
                                              message.author.username,
                                              message.author.avatarURL
                                            )
                                            .setColor("#c3cdff")
                                            .setTitle(
                                              `\ <a:overify:688707812225712152> \n > ID: ${message.author.id}`
                                            )
                                            .addField(
                                              " Name:",
                                              ` ** ${name} ** `,
                                              true
                                            )
                                            .addField(
                                              " age",
                                              ` ** ${age} ** `,
                                              true
                                            )
                                            .addField(
                                              " ask",
                                              `** ${ask} ** `,
                                              true
                                            )
                                            .addField(
                                              " Rule? ",
                                              ` ** ${ask2} ** `,
                                              true
                                            )
                                            .addField(
                                              " Online? ",
                                              ` ** ${ask3} ** `,
                                              true
                                            )
                                            .addField(
                                              "> __Acoount Created__",
                                              ` ${message.author.createdAt}  `,
                                              true
                                            );
                                          channel.send(embed);
                                        }, 2500);
                                        setTimeout(() => {
                                          mtime.delete();
                                        }, 3000);
                                      });
                                    });
                                });
                            });
                        });
                      });
                  });
                });
            });
          });
      });
    }
  }
});
client.on("message", async message => {
  let mention = message.mentions.members.first();
  if (message.content.startsWith("#accept")) {
    if (!message.channel.guild) return;
    let acRoom = message.guild.channels.find("name", "𝗦ubmit-apply");
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return;
    if (!mention) return message.reply("Please Mention");

    acRoom.send(
      `[<@&688810706535055364>] <a:yes:688710968821547010> You are accepted and given a rank}`
    );
  }
});

client.on("message", async message => {
  let mention = message.mentions.members.first();
  if (message.content.startsWith("#refusal")) {
    if (!message.channel.guild) return;
    let acRoom = message.guild.channels.find("name", "𝗦ubmit-apply");
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return;
    if (!mention) return message.reply("Please Mention");

    acRoom.send(
      `Unfortunately, you have been rejected <a:no:688711030364176486> \n ${mention} :pleading_face: `
    );
  }
});

client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;
  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command === `play`) {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.channel.send("**YOU MUST IN VOICE CHAANEL**");
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send("*Im Not Have a Permissions**");
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.send("**Im Not Have a Permissions**");
    }

    if (!permissions.has("EMBED_LINKS")) {
      return msg.channel.sendMessage("**`EMBED LINKS Must be Permissions **");
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();

      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, msg, voiceChannel, true);
      }
      return msg.channel.send(
        ` **${playlist.title}**** <a:overify:688707812225712152>Added in list**`
      );
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 5);
          let index = 0;
          const embed1 = new Discord.RichEmbed()
            .setDescription(
              `**Please Choose a Video** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join("\n")}`
            )

            .setFooter("UltraBot");
          msg.channel.sendEmbed(embed1).then(message => {
            message.delete(20000);
          });

          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 15000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel.send("**No track was selected**");
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send("**:X: No search results available** ");
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === `skip`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("**You are not an VoiceChannel**.");
    if (!serverQueue) return msg.channel.send("**There is no clip to skip it**");
    serverQueue.connection.dispatcher.end("Skpied<a:overify:688707812225712152>");
    return undefined;
  } else if (command === `stop`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("You are not an VoiceChannel .");
    if (!serverQueue) return msg.channel.send("**No clip to stop**");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("تم إيقاف المقطع<a:overify:688707812225712152>");
    return undefined;
  } else if (command === `vol`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("**You are not an VoiceChannel **.");
    if (!serverQueue) return msg.channel.send("**There is nothing operational.**");
    if (!args[1])
      return msg.channel.send(
        `:loud_sound: **Sound level** **${serverQueue.volume}**`
      );
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
    return msg.channel.send(`:speaker: <a:overify:688707812225712152> **${args[1]}**`);
  } else if (command === `np`) {
    if (!serverQueue) return msg.channel.send("**There is nothing current to do.**");
    const embedNP = new Discord.RichEmbed().setDescription(
      `:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`
    );
    return msg.channel.sendEmbed(embedNP);
  } else if (command === `queue`) {
    if (!serverQueue) return msg.channel.send("**There is nothing current to do**.");
    let index = 0;

    const embedqu = new Discord.RichEmbed().setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join("\n")}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`);
    return msg.channel.sendEmbed(embedqu);
  } else if (command === `pause`) {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send("**Stoped The Music<a:overify:688707812225712152>ا**!");
    }
    return msg.channel.send("**There is nothing current to do**");
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send("**Music resumed for you!**");
    }
    return msg.channel.send("**There is nothing current to do**");
  }

  return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  console.log(video);

  //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send(`**I can't Join**${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else
      return msg.channel.send(
        ` **${song.title}****<a:overify:688707812225712152> Added in Song List!**`
      );
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      if (reason === "Stream is not generating quickly enough.")
        console.log("Song ended.");
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  serverQueue.textChannel.send(`Start: **${song.title}**`);
}
const adminprefix = "#";
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.sendMessage(`**${argresult}** :<a:overify:688707812225712152> تم تغيير أسم البوت إلى`);
    return message.reply(
      "**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **"
    );
  } else if (message.content.startsWith(adminprefix + "setavatar")) {
    client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : <a:overify:688707812225712152>تم تغير صورة البوت`);
  }
})});

client.on("message", async message => {
var prefix = "#"
  if (message.content == prefix + "invites") {
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.RichEmbed()
        .setTitle(` **[Your Invites]** ${Username}`)
        .setThumbnail(client.user.avatarURL)
        .addField("**Invites**", `**➥** [ ppel **${Number(inviteCount)}** ]`)
        .addField(
          "**Joined Server At**",
          `**➥** [ day **${daysJoined.toFixed(0)}** ]`
        )
        .addField(
          "**Joined With**",
          `**➥** [ **https://discord.gg/${inviteCode || "Zm2U6we"}** ]`
        )
        .setColor("")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});

const Canvas = require("canvas");
client.on("guildMemberAdd", member => {
  const welcomer = member.guild.channels.find(channel => channel.id === "688802740528349206");
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
const w = [''];
             let Image = Canvas.Image,
                canvas = Canvas.createCanvas(500, 260),
                  ctx = canvas.getContext('2d');
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);

      })
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + "file.png" : member.user.displayAvatarURL;
                      jimp.read(url, (err, avatar) => {
                          if (err) return console.log(err);
                          avatar.getBuffer(jimp.MIME_PNG, (err, buf) => {
                          
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 265, 162);

                                                     var guild;
    while (!guild)
                        guild = member.guild
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {

})
})
                              //AVATAR?
    let Avatar = Canvas.Image;
                              let avatar = new Avatar;
                              avatar.src = buf;
                              ctx.beginPath();
                 ctx.arc(132.4, 117.7, 92.7, 0, Math.PI*2, true);
                   ctx.closePath();
                                 ctx.clip();
                        ctx.drawImage(avatar, 7, 8, 227, 225);
                              ctx.closePath();
 welcomer.send({
        files: [
          {
            attachment: canvas.toBuffer(),
            name: "Welcome-V5.png"
          }
        ]
      })
})
})
});