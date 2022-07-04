'use strict'

const ACTIVIDAD_YA_EJECUTADA = process.env.ACTIVIDAD_YA_EJECUTADA

// Actividades ya Ejecutadas Command
module.exports = async (ctx) => {

  let caption = 'Enlace a las Actividades ya Ejecutadas'

  let options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Actividades ya Ejecutadas',
            url: ACTIVIDAD_YA_EJECUTADA
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
