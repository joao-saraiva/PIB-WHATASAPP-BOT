const defaultWrongText = "Comando inválido, digite /ajuda para ver os comandos";

const commandHelpers = [
  {
    commandName: "/inscrever",
    commandDescription: "Insere seu nome da lista do jogo atual"
  }, 

  {
    commandName: "/inscrever-pib",
    commandDescription: "Insere seu nome na lista com uma prioridade sobre os demais."
  }, 

  {
    commandName: "/inscrever-amigo --nome",
    commandDescription: "Insere o nome na lista de uma pessoa que não está no grupo do whatsapp."
  }, 

  {
    commandName: "/desistir",
    commandDescription: "Remove seu noma da lista do jogo atual."
  }, 

  {
    commandName: "/confirmar",
    commandDescription: "Confirma a sua presença quando você é chamado pelos reservas."
  }, 

  {
    commandName: "/lista",
    commandDescription: "Exibe todos os jogadores que inseriram seu nome."
  }, 

  {
    commandName: "/cancelar",
    commandDescription: "Cancela o próximo jogo. (ADM)"
  }, 

  {
    commandName: "/banir --dias",
    commandDescription: "Bane a pessoa no total de dias escolhidos (ADM)"
  }, 

  {
    commandName: "/ajuda",
    commandDescription: "Lista os comandos do bot."
  }, 
]

const helperText = commandHelpers.map(commandHelper => `${commandHelper["commandName"]} -> ${commandHelper["commandDescription"]}`).join("\n");

module.exports = {
  defaultWrongText,
  helperText
};
