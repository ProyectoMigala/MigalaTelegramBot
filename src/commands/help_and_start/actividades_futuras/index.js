'use strict'

const ACTIVIDAD_FUTURA = process.env.ACTIVIDAD_FUTURA

// Actividad Futura Command
module.exports = async (ctx) => {

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
