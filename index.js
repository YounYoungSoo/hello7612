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
  if(message.content === 'ㅅㅂ') {
    message.reply('ㅈ까세요');
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
    if(message.content === '?') {
      message.reply('닥치삼');
    }
  });

client.on('message', (message) => {
    if(message.content === '???') {
      message.reply('닥치삼');
    }
  });

client.on('message', (message) => {
    if(message.content === '????') {
      message.reply('닥치삼');
    }
  });

client.on('message', (message) => {
    if(message.content === '?????') {
      message.reply('닥치삼');
    }
  });

client.on('message', (message) => {
    if(message.content === '??????') {
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

client.on('message', (message) => {
    if(message.content === '나가뒤져') {
      message.reply('ㅗㅗㅗㅗ');
    }
  });

client.on('message', (message) => {
    if(message.content === '나가죽어') {
      message.reply('노동 ㅈㄴ 시키네');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅗ') {
      message.reply('ㅈ까 ㅅㅂ아');
    }
  });

client.on('message', (message) => {
    if(message.content === '슷칼봇 주식 정보') {
      message.reply('봐서 뭐하냐? 니새끼가 망할건 안봐도 비디오다 ㅋㅋㅋㅋㅋㅋㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === '슷지갑') {
      message.reply('아... 불쌍해.... 안봐도 텅텅 비었자나 ㅠㅠ ㅋㅋㅋㅋㅋㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === '선익') {
      message.reply('tjsdlr\ntjsdlr\ndigkstjsdlr\n');
    }
  });

client.on('message', (message) => {
    if(message.content === '선익') {
      message.reply('해석\n선익\n선익\n야한선익\n');
    }
  });
client.login(token);