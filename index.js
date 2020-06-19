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
  if(message.content === '야 머하냐') {
    message.reply('사칭하는중 왜?');
  }
});

client.on('message', (message) => {
    if(message.content === '아니 ㅅㅂ ㅋㅋㅋ 사칭을 왜해?') {
      message.reply('하고 싶으니까 하지  ');
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
    if(message.content === '하이드로펌프') {
      message.reply('https://ifh.cc/g/B6iDbB.png');
    }
  });

client.on('message', (message) => {
    if(message.content === '하이드로펌프') {
      message.reply('아 빨리 화장실 가라.... 여기에 싸지말고...');
    }
  });

client.on('message', (message) => {
    if(message.content === '왜사니?') {
      message.reply('제작자 새끼가 나 만들어서 어쩔수 없이 사는중..');
    }
  });
  
client.on('message', (message) => {
    if(message.content === '제일중 시간표 봇') {
      message.reply('그쉑이 나 홍보해주는중ㅋㅋㅋㅋㅋ');
    }
  });
client.login(token);