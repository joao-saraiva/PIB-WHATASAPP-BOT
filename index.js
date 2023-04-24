const qrcode = require('qrcode-terminal');
const myMock = require('./mock');

import { defaultWrongText, helperText } from './mock.js'

const { Client, LocalAuth  } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', message => {
  switch(message.body){
    case '/ajuda':
      message.reply(helperText);
    default:
      if(message.body.startsWith("/")){
        message.reply(defaultWrongText);
      }
  }
});

client.initialize();
