const qrcode = require('qrcode-terminal');
const myMock = require('./mock');
const axios = require("axios")

const { Client, LocalAuth  } = require('whatsapp-web.js');

const baseUrl = process.env.NODE_ENV == 'production' ? '' : 'localhost:3000/';

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
    case '/inscrever':
      const inscriptionData = { name: message.sender.name, number: message.from }

      axios.post(`${baseUrl}/player_per_matches`, inscriptionData)
        .then(() => {
          message.reply(response.data);
        })
        .catch(() => {
          message.reply(response.data);
        });
      break;
    case '/ajuda':
      message.reply(myMock.helperText);
      break;
    default:
      if(message.body.startsWith("/")){
        message.reply(myMock.defaultWrongText);
      }
  }
});

client.initialize();
