'use strict'
const services = require('../../services')

const text = process.env.MENU_TEXT

// Default Command (Shows a Message and Buttons Menu)
module.exports = async (ctx) => {

  let options = {
    caption: text,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Actividad Actual',
            callback_data: 'Actividad Actual'
          },
          {
            text: 'Actividad Futura',
            callback_data: 'Actividad Futura'
          }
        ],
        [
          {
            text: 'Actividades ya Ejecutadas',
            callback_data: 'Actividades ya Ejecutadas'
          },
        ],
        [
          {
            text: 'Encargados de los Roles Actuales',
            callback_data: 'Encargados de los Roles Actuales'
          }
        ],
        [
          {
            text: 'Linktree',
            callback_data: 'Linktree'
          },
        ],
      ]
    }
  }

  try {
    await ctx.editMessageCaption(text, options)
  } catch {
    let imagePath = `${process.cwd()}/resources/${process.env.IMG}`

    await ctx.replyWithPhoto({ source: imagePath }, options)
  }
}
