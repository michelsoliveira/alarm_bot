# Telegram Alarm/Reminder Bot
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)


![GitHub repo size](https://img.shields.io/github/repo-size/michelsoliveira/alarm_bot)
![GitHub language count](https://img.shields.io/github/languages/count/michelsoliveira/alarm_bot)
![GitHub forks](https://img.shields.io/github/forks/michelsoliveira/alarm_bot)


<img src="reminder_bot.png" alt="Reminder Bot" width="250" height="250">

>This project is a simple bot for sending reminders or alarms through Telegram, using cron syntax to schedule the messages.

## Prerequisites

- Node Js: `>=18.18`
- TypeScript: `>=5.2.2`
- Docker

## Installation
### Telegram
1. Generate a bot on Telegram and copy the bot's authentication token. If you don't know how to create a bot, follow the step-by-step guide described in this [LINK](https://learn.microsoft.com/en-us/azure/bot-service/bot-service-channel-connect-telegram?view=azure-bot-service-4.0)

### Docker
1. Open the DockerFile.
2. Change thel **BOT_TOKEN** variable and add the token generated earlier.
3. Open a terminal in the project's folder.
4. Run the command: `docker build -t alarmbot:latest`.
5. To run the program: `docker run -i -t alarmbot:latest`

### Node
1. Open a terminal in the project's folder.
2. Run the command: `npm install`.
3. Run the command: `npm run build`.
4. To run the program: `npm start`
