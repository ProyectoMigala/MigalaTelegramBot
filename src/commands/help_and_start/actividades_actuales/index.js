'use strict'

const ACTIVIDAD_ACTUAL = process.env.ACTIVIDAD_ACTUAL

// Actividad Actual Command
module.exports = async (ctx) => {

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
