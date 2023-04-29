const qrcode = require('qrcode-terminal');
const myMock = require('./mock');
const axios = require("axios");

const { Client, LocalAuth  } = require('whatsapp-web.js');

const url = process.env.MY_ENVIROMENT == "production" ? "teste" : "http://localhost:3000";

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
      message.getContact().then(contact => {
        axios.post(`${url}/player_per_matches`, { player_name: contact.pushname, player_number: contact.number, status: "confirmed" } )
          .then(response => {
            message.reply(response.data);
          })
          .catch(error => {
            message.reply("Não foi possivel fazer sua inscrição");
          });
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
