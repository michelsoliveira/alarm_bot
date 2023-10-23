# Bot de alarme/lembrete para Telegram
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)


![GitHub repo size](https://img.shields.io/github/repo-size/michelsoliveira/alarm_bot)
![GitHub language count](https://img.shields.io/github/languages/count/michelsoliveira/alarm_bot)
![GitHub forks](https://img.shields.io/github/forks/michelsoliveira/alarm_bot)


<img src="reminder_bot.png" alt="Reminder Bot" width="250" height="250">

>Este projeto é um simples bot para envio de lembretes ou alarmes através do Telegram, utilizando a sintaxe cron para agendar as mensagens.


## Pré-Requisitos

- Node Js: `>=18.18`
- TypeScript: `>=5.2.2`
- Docker

## Instalação
### Telegram
1. Gere um bot no Telegram e copie o token de autenticação do bot. Caso nao saiba como gerar um bot siga o passo a passo descrito neste [LINK](https://tecnoblog.net/responde/como-criar-um-bot-no-telegram/)

### Docker
1. Abra o arquivo DockerFile.
2. Altere a variável **BOT_TOKEN** e adicione o token gerado anteriormente.
3. Abra um terminal, na pasta onde está o projeto.
4. Execute o comando: `docker build -t alarmbot:latest .`
5. Para executar o programa: `docker run -i -t alarmbot:latest`

### Node
1. Abra um terminal, na pasta onde está o projeto.
2. Execute o comando `npm install`.
3. Execute o comando `npm run build`.
4. Para executar o programa: `npm start`


