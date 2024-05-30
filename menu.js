export const showMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Отлично, теперь выбери одну из двух кнопок!", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Вызвать такси",
            // request_location: true,
          }
        ],
        [
          {
            text: "Найти пассажиров",
            // request_location: true,
          }
        ],
        ["Закрыть"],
      ]
    }
  })
}

export const closeMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Клавиатура закрыта", {
    reply_markup: {
      remove_keyboard: true
    }
  })
}

// export const searchTaxi = (bot, chatId) => {
//   bot.telegram.sendMessage(chatId, "Поделиться геолокацией?", {
//     reply_markup: {
//       inline_keyboard: [
//         {
//           text: "Поделиться",
//           request_location: true,
//         }
//       ]
//     }
//   })
// }