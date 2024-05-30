import { Markup, Telegraf } from "telegraf";
import { config } from "./config.js";
import { getLocation } from "./location.js";
import { closeMenu, showMenu } from "./menu.js";

const bot = new Telegraf(config.token, {});

bot.start((ctx) => {
  ctx.reply('Добро пожаловать! Для продолжения заполните анкету \n 1. Ваше имя \n 2. Номер телефона \n 3. Марка и модель машины (опционально) \n 4. Гос номер машины (опционально)')
})

bot.on("message", async ctx => {
  const chatId = ctx.chat.id;

  if(ctx.message.text) {
    if (ctx.message.text === "Вызвать такси" && "Найти пассажира"){
      getLocation(bot, chatId)
      ctx.reply('Ищем..')
    } 
  } else if (ctx.message.location) {
    return('Ищем пассажиров')
  } else if (ctx.message.text === "Закрыть") {
    closeMenu(bot, chatId)
  }
})


bot.launch()