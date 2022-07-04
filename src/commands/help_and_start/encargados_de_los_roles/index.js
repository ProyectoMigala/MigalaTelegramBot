'use strict'

const ENCARGADOS_DE_LOS_ROLES = process.env.ENCARGADOS_DE_LOS_ROLES

// Encargados de los Roles Actuales Command
module.exports = async (ctx) => {

  let caption = 'Enlace a los Encargados de los Roles Actuales'

  let options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Encargados de los Roles Actuales',
            url: ENCARGADOS_DE_LOS_ROLES
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
