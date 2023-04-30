# Bot do volêibol da PIB

Esté bot foi criado com o intuito de automatizar o processo de comparacimento as partidas de vôlei na PIB.

<br/>

Caso você entenda de programação e queria sugerir alguma melhoria, sinta-se livre para abrir issues a este projeto.

## Regras

No dia que foi gerado esse documento os jogos na PIB ocorrem as terças e sextas, Por tanto um dia antes (segunda, e quinta) é aberto a inscrição dos participantes, membros da igreja possuem prioridade na lista e a lista está limitada a 24 pessoas, gerando assim uma lista de espera, conforme as pessoas vão desistindo os reservas devem ir preenchendo as vagas restantes.

## Comandos do bot

Comando    | Ação
---------- | ------
/inscrever | Insere seu nome da lista do jogo atual.
/inscrever-pib | Insere seu nome na lista com uma prioridade sobre os demais.
/inscrever-amigo -nome | Insere o nome na lista de uma pessoa que não está no grupo do whatsapp.
/desistir  | Remove seu noma da lista do jogo atual.
/lista| Exibe todos os jogadores que inseriram seu nome.
/cancelar-partida | Cancela o próximo jogo. (ADM)
/ajuda     | Lista os comandos do bot.

## API
Foi criado está [API](https://github.com/joao-saraiva/pib_whatsapp_api) para lidar com o CRUD do sistema, você também pode colaborar nela.