import { Telegraf } from 'telegraf';
import Constants from './constants';
import 'dotenv/config';

const bot = new Telegraf(process.env.BOT_TOKEN || '');

bot.start((ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, Constants.startMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Set a new alarm', callback_data: 'add' }
                ]
            ]
        }
    });
});

bot.action('add', (ctx) => {
    if (ctx.chat) {
        const chatId = ctx.chat.id;
        
        let reminderMessage = '';
        let replied = false;

        const cron = require('node-cron');

        ctx.reply('Please enter the alarm message:');

        bot.on('text', (ctx) => {
            if (ctx.message && !replied) {
                reminderMessage = ctx.message.text;
                ctx.sendMessage('Please enter the time for the reminder (e.g., 2023-10-20T15:00):');
                replied = true;
            }
            else{
                if (ctx.message) {
                    const reminderTime = ctx.message.text;
    
                    ctx.reply('Reminder set!');
    
                    cron.schedule(reminderTime, () => {
                        bot.telegram.sendMessage(chatId, reminderMessage);
                    });
                }
            }
        });
    }
});

bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


    