const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "공부";
const byeChannelName = "공부";
const welcomeChannelComment = "왔냐 새꺄? 잘왔어 ㅋㅋ";
const byeChannelComment = "ㄲㅈ";

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
  if(message.content === '토스야 ㅎㅇ') {
    message.reply('ㅎㅇ');
  }
});

client.on('message', (message) => {
    if(message.content === '토스야 시발') {
      message.reply('뭐 이새꺄 ');
    }
  });

client.on('message', (message) => {
    if(message.content === '토스야 입닥쳐') {
      message.reply('너나 좀 닥쳐줄래?');
    }
  });

client.on('message', (message) => {
    if(message.content === '토스야 사랑해') {
      message.reply('역겨워 ㅅㅂ ㅋㅋㅋㅋ');
    }
  });

client.on('message', (message) => {
    if(message.content === '토스야 뒤져') {
      message.reply('움짤 보낼줄 알았냐? 내가 배추봇 짝퉁이여도 이런건 안따라해 새꺄');
    }
  });

client.on('message', (message) => {
    if(message.content === '토스야 하이드로펌프') {
      message.reply('https://ifh.cc/g/B6iDbB.png');
    }
  });

client.on('message', (message) => {
    if(message.content === '토스야 하이드로펌프') {
      message.reply('아 빨리 화장실 가라.... 여기에 싸지말고...');
    }
  });

client.on('message', (message) => {
    if(message.content === '토스야 왜사니?') {
      message.reply('제작자 새끼가 나 만들어서 어쩔수 없이 사는중..');
    }
  });
  
client.on('message', (message) => {
    if(message.content === '토스야 제일중 시간표 봇') {
      message.reply('그쉑이 나 홍보해주는중ㅋㅋㅋㅋㅋ');
    }
  });
client.login(token);