'use strict'
const services = require('../../../services')

const ACTIVIDAD_ACTUAL = process.env.ACTIVIDAD_ACTUAL

// Actividad Actual Command
module.exports = async (ctx) => {

  let user = ctx.update.callback_query.from.first_name
  let activity = ctx.update.callback_query.data

  await services.jsoning.add(user, activity)

  let caption = 'Enlace a las Actividades Actuales'

  let options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Actividad Actual',
            url: ACTIVIDAD_ACTUAL
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
