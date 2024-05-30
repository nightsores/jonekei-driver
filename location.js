export const getLocation = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Отправь нам свою геолокацию!", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Поделиться геолокацией",
            request_location: true
          }
        ]
      ]
    }
  })
  return('Ищем..')
};
