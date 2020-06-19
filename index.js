const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "공부";
const byeChannelName = "공부";
const welcomeChannelComment = "안녕하세요";
const byeChannelComment = "와 이제 쟤 나가서 속이 다 풀린다 ㅅㅂ ㅋㅋㅋ";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === 'ㄱㅅㄲ') {
    message.reply('ㅅㅂ새끼');
  }
});

client.on('message', (message) => {
    if(message.content === 'ㅃ2') {
      message.reply('그래~~ 잘꺼져~~');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅇㅇ') {
      message.reply('어쩌라는거지?');
    }
  });

client.on('message', (message) => {
    if(message.content === '왓더뻑?') {
      message.reply('역겨워 ㅅㅂ ㅋㅋㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === '??') {
      message.reply('닥치삼');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

  client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('뭘 쳐웃어 새꺄ㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === '$하이드로펌프') {
      message.reply('아 빨리 화장실 가라.... 여기에 싸지말고...');
    }
  });

client.on('message', (message) => {
    if(message.content === '아 ㅅㅂ') {
      message.reply('욕 작작 쳐해 개새끼야');
    }
  });
  
client.login(token);