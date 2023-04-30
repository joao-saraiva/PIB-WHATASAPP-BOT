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
  if(message.body.startsWith('/inscrever-amigo')){
    message.getContact().then(contact => {
      const friendName = message.body.split('-')[2].trim();
      axios.post(`${url}/player_per_matches`, { player_name: contact.pushname, player_number: contact.number, player_pib_priority: false, friend_name: friendName} )
        .then(response => { message.reply(response.data)})
        .catch(() => message.reply("Não foi possivel inscrever o seu amigo, tente nesse formato /inscrever-amigo -Pedro"))
    })

    return
  }

  switch(message.body){
    case '/inscrever':
      message.getContact().then(contact => {
        axios.post(`${url}/player_per_matches`, { player_name: contact.pushname, player_number: contact.number, player_pib_priority: false } )
          .then(response => {
            message.reply(response.data);
          })
          .catch(error => {
            message.reply("Não foi possivel fazer sua inscrição");
          });
      });
      break;
    case '/inscrever-pib':
        message.getContact().then(contact => {
          axios.post(`${url}/player_per_matches`, { player_name: contact.pushname, player_number: contact.number,  player_pib_priority: true })
            .then(response => message.reply(response.data))
            .catch(() => message.reply("Não foi possivel fazer sua inscrição"));
        })
      break;
    case '/desistir':
        message.getContact().then(contact => {
          axios.patch(`${url}/player_per_matches/give_up`, { player_name: contact.pushname, player_number: contact.number } )
            .then(response => message.reply(response.data))
            .catch(() => message.reply("Falha ao desistir"));
        })
      break;
      case '/confirmar':
        message.getContact().then(contact => {
          axios.post(`${url}/player_per_matches/confirm`, { player_name: contact.pushname, player_number: contact.number } )
            .then(response => message.reply(response.data))
            .catch(() => message.reply("Falha ao confirmar"));
        })
      break;
      case '/lista':
        message.getContact().then(contact => {
          axios.get(`${url}/matches/print_list`)
            .then(response => message.reply(response.data))
            .catch(() => message.reply("Falha ao processar a lista"));
        })
      break;
      case '/cancelar-partida':
        message.getContact().then(contact => {
          axios.patch(`${url}/matches/cancel`)
            .then(response => message.reply(response.data))
            .catch(() => message.reply("Falha ao cancelar a partida"));
        })
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