const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "공부";
const byeChannelName = "공부";
const welcomeChannelComment = "안녕하세요";
const byeChannelComment = "드디어 나갔군요!";

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
    message.reply('욕은 나빠요!');
  }
});

client.on('message', (message) => {
  if(message.content === 'ㅅㅂ') {
    message.reply('욕은 듣기 해로우니 자제해주세요!');
  }
});

client.on('message', (message) => {
    if(message.content === 'ㅃ2') {
      message.reply('넵 안녕히계세요');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅇㅇ') {
      message.reply('아 그렇군요!');
    }
  });

client.on('message', (message) => {
    if(message.content === '왓더뻑?') {
      message.reply('네? 무슨말씀을 하시는건지...');
    }
  });

client.on('message', (message) => {
    if(message.content === '??') {
      message.reply('저도 의문이 드는군요.. -.-');
    }
  });

 client.on('message', (message) => {
    if(message.content === '?') {
      message.reply('저도 의문이 드는군요.. -.-');
    }
  });

client.on('message', (message) => {
    if(message.content === '???') {
      message.reply('저도 의문이 드는군요.. -.-');
    }
  });

client.on('message', (message) => {
    if(message.content === '????') {
      message.reply('저도 의문이 드는군요.. -.-');
    }
  });

client.on('message', (message) => {
    if(message.content === '?????') {
      message.reply('저도 의문이 드는군요.. -.-');
    }
  });

client.on('message', (message) => {
    if(message.content === '??????') {
      message.reply('저도 의문이 드는군요.. -.-');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

  client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ') {
      message.reply('님도 웃으니 저도 웃기네요 ㅎㅎㅎ');
    }
  });

client.on('message', (message) => {
    if(message.content === '$하이드로펌프') {
      message.reply('다른사람한테 피해를 입히는건 옳지 않아요. 빨리 화장실에 가는것을 권장드릴게요');
    }
  });

client.on('message', (message) => {
    if(message.content === '아 ㅅㅂ') {
      message.reply('욕을 자제해주세요 ㅠㅠ');
    }
  });

client.on('message', (message) => {
    if(message.content === '나가뒤져') {
      message.reply('나가뒤지는건 니새끼고');
    }
  });

client.on('message', (message) => {
    if(message.content === '나가죽어') {
      message.reply('이 시발새끼가 ');
    }
  });

client.on('message', (message) => {
    if(message.content === 'ㅗ') {
      message.reply('ㅗ요? 엿을 의미하는건가요? 아님 오(5)를 의미하는건가요?');
    }
  });

client.on('message', (message) => {
    if(message.content === '슷칼봇 주식 정보') {
      message.reply('음.. 안봐도 뻔하네요..');
    }
  });

client.on('message', (message) => {
    if(message.content === '슷지갑') {
      message.reply('.... 답이 없네요....');
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

client.on('message', (message) => {
    if(message.content === '왜불러') {
      message.reply('왜부르긴요. 나랑 사귀자');
    }
  });

client.on('message', (message) => {
    if(message.content === '선익') {
      message.reply('https://ifh.cc/g/xENpWi.jpg');
    }
  });

  client.on('message', (message) => {
    if(message.content === '선익시스템') {
      message.reply('선익 시스템 바로가기 : http://www.sunic.co.kr/\n제보해준 저요 저요 감사합니다 ');
    }
  });

client.login(token);
