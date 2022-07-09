'use strict'
const services = require('../../services')

const text = process.env.MENU_TEXT

// Default Command (Shows a Message and Buttons Menu)
module.exports = async (ctx) => {

  if (ctx.update.message !== undefined) {
    let user = ctx.update.message.from.first_name
    let activity = 'Inicio'

    await services.jsoning.add(user, activity)
  }

  if (ctx.update.callback_query !== undefined) {
    let user = ctx.update.callback_query.from.first_name
    let activity = ctx.update.callback_query.data

    await services.jsoning.add(user, activity)
  }

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
            text: 'Link3',
            callback_data: 'Link3'
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
