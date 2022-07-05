'use strict'
const services = require('../../../services')

const ACTIVIDAD_FUTURA = process.env.ACTIVIDAD_FUTURA

// Actividad Futura Command
module.exports = async (ctx) => {

  let user = ctx.update.callback_query.from.first_name
  let activity = ctx.update.callback_query.data

  await services.jsoning.add(user, activity)

  let caption = 'Enlace a las Actividades Futuras'

  let options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Actividad Futura',
            url: ACTIVIDAD_FUTURA
          },
        ],
        [
          {
            text: 'Regresar',
            callback_data: 'Regresar'
          },
        ],
      ]
    }
  }

  await ctx.editMessageCaption(caption, options)
}
